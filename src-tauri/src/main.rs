#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::api::process::Command;


#[tauri::command]
fn execute_file(file_path: String, args: Vec<String>) -> Result<(), String> {
    let _result = Command::new(file_path)
        .args(args)
        .spawn()
        .map_err(|e| format!("failed to execute command: {}", e))?;

    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![execute_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
