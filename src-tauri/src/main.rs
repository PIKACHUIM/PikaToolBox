#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use serde_json::Value;
use std::fs::File;
use std::io::prelude::*;
use tauri::api::http::{ClientBuilder, HttpRequestBuilder, ResponseType};
use tauri::api::process::Command;

#[tauri::command]
fn execute_file(file_path: String, args: Vec<String>) -> Result<(), String> {
    Command::new(file_path)
        .args(args)
        .spawn()
        .map_err(|e| format!("failed to execute command: {}", e))?;

    Ok(())
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            // 从本地文件系统加载 JSON 文件
            let mut base_config_data = String::new();
            let resource_path = app
                .path_resolver()
                .resolve_resource("apps/ToolsConfig.json")
                .expect("no resource path for ToolsConfig.json");
            let mut file = File::open(resource_path).expect("failed to open file");
            file.read_to_string(&mut base_config_data)
                .expect("failed to read file");

            let _base_data: Value =
                serde_json::from_str(&base_config_data).expect("failed to parse JSON data");
            

            // 下载 JSON 文件并保存到本地文件系统
            tauri::async_runtime::spawn(async move {
                let urls = _base_data["global"]["config_url"]["url-win"]
                .as_array()
                .expect("json format error");
                let client = ClientBuilder::new().build().unwrap();
                let response = client
                    .send(
                        HttpRequestBuilder::new("GET", urls[0].as_str().unwrap())
                            .unwrap()
                            .response_type(ResponseType::Binary),
                    )
                    .await;
                if let Ok(response) = response {
                    let bytes = response.bytes().await.expect("response body error");
                    file.write_all(&bytes.data).expect("write json error");
                }
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![execute_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
