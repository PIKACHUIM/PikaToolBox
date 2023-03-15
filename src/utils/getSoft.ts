import { fs, path, http } from "@tauri-apps/api";

export interface Soft {
  typeIndex: number;
  name: string; // not include .exe
  description: string;
  version: string;
  downloadUrl: string[];
  exePath: string;
  iconPath: string;
  installed: boolean;
}

async function getSoftsByType(typeIndex: number): Promise<Soft[]> {
  // 从配置文件中获取某类软件，返回确定的软件列表
  let resourcePath: string = "";
  let type_detail: any;
  let global_download_url: string[];
  try {
    resourcePath = await path.resolveResource("apps");
    let configPath = await path.resolveResource("apps/ToolsConfig.json");
    let data = await fs.readTextFile(configPath);
    let all_data = JSON.parse(data);
    global_download_url = all_data.global.download_url;
    type_detail = all_data.type[typeIndex];

    let apps: Soft[] = type_detail.list.map((file: any) => ({
      typeIndex: typeIndex,
      name: file.NameDisplay,
      description: file.Description,
      version: file.SoftVersion,
      downloadUrl: global_download_url.map(
        (prefix) =>
          `${prefix}/${type_detail.path}/${file.DownloadFix}-${file.SoftVersion}`
      ),
      exePath: "",
      iconPath: "",
      installed: false,
    }));
    for (let i in apps) {
      apps[i].exePath = await path.join(
        resourcePath,
        "installed",
        type_detail.path,
        `${apps[i].name}-${apps[i].version}.exe`
      );
      apps[i].iconPath = await path.join(
        resourcePath,
        "icons",
        type_detail.path,
        `${apps[i].name}-${apps[i].version}.ico`
      );
    }
    await Promise.all(
      apps.map(async (app) => {
        for (let each_path of [app.exePath, app.iconPath]) {
          let dirname = await path.dirname(each_path);
          if (!(await fs.exists(dirname))) {
            fs.createDir(dirname, { recursive: true });
          }
        }
        const response_icon = await Promise.race(
          app.downloadUrl.map((url) =>
            http.fetch<Uint8Array>(url + ".ico", {
              method: "GET",
              responseType: http.ResponseType.Binary,
            })
          )
        );
        await fs.writeBinaryFile(app.iconPath, response_icon.data);
      })
    );
    return apps;
  } catch (e) {
    console.log("无法获取目标类型的软件列表", e);
    return [];
  }
}

export async function fetchConfig() {
  let configPath = await path.resolveResource("ToolsConfig.json");
  try {
    // 从远端更新 Config
    // TODO: 根据OS获取不同的配置文件
    let data = await fs.readTextFile(configPath);
    await fs.writeTextFile(configPath, data);
  } catch (err) {
    throw new Error("Failed to get config");
  }
  return;
}

export async function getApp(app: Soft) {
  const response_exe = await Promise.race(
    app.downloadUrl.map((url) =>
      http.fetch<Uint8Array>(url + ".exe", {
        method: "GET",
        responseType: http.ResponseType.Binary,
      })
    )
  );

  await fs.writeBinaryFile(app.exePath, response_exe.data);
}

export default {
  getSoftsByType,
};
