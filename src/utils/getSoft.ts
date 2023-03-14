import { fs, path, http } from "@tauri-apps/api";

export interface Soft {
  typeIndex: number;
  name: string; // not include .exe
  description: string;

  downloadUrl: string;
  exePath: string;
  iconPath: string;
  installed: boolean;
}

async function getSoftsByType(typeIndex: number): Promise<Soft[]> {
  // 从配置文件中获取某类软件，返回确定的软件列表
  let dirName: string;
  let type_detail: any;
  try {
    let resourcePath = await path.resolveResource("apps");
    let configPath = await path.resolveResource("apps/ToolsConfig.json");
    console.log("configPath", resourcePath);
    let data = await fs.readTextFile(configPath);
    type_detail = JSON.parse(data).type[typeIndex];
    dirName = `${resourcePath}/${type_detail.path}`;
  } catch (e) {
    console.log("无法获取目标类型的软件列表", e);
  }
  return type_detail.list.map((file: any) => {
    return {
      typeIndex: typeIndex,
      name: file.NameDisplay,
      description: file.Description,
      downloadUrl: file.DownloadURL,
      exePath: `${dirName}/installed/${file.NameDisplay}-${file.SoftVersion}.exe`,
      iconPath: `${dirName}/icons/${file.NameToFiles}-${file.SoftVersion}.ico`,
      installed: false,
    };
  });
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

async function getApp(app: Soft) {
  const response_exe = await http.fetch<Uint8Array>(app.downloadUrl, {
    method: 'GET',
    responseType: http.ResponseType.Binary,
  });
  const response_icon = await http.fetch<Uint8Array>(app.iconPath, {
    method: 'GET',
    responseType: http.ResponseType.Binary,
  });

  await fs.writeBinaryFile(app.exePath, response_exe.data);
  await fs.writeBinaryFile(app.iconPath, response_icon.data);

}

export default {
  getSoftsByType,
  getConfig: fetchConfig
};
