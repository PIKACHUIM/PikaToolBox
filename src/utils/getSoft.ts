import { fs } from "@tauri-apps/api";

export interface Soft {
  name: string; // not include .exe
  typeIndex: number;
  description: string;
  iconPath: string;
  installed: boolean;
}

async function getSoftsByType(typeIndex: number): Promise<Soft[]> {
  // 从配置文件中获取某类软件，返回确定的软件列表
  const path = "../src/softs.json";
  let dirName: string;
  let softs: Pick<Soft, "name" | "description" | "installed">[];
  let data: string;
  try {
    data = await fs.readTextFile(path);
    let type = JSON.parse(data).type[typeIndex];
    dirName = `./../../../resources/Packaged Software/${type.path}`;
    softs = type.softs;
  } catch (e) {
    console.log("无法获取目标类型的软件列表", e);
    softs = [
      {
        name: "BalenaEther-1.5.057",
        description: "启动引导制作工具",
        installed: true,
      },
    ];
    dirName =
      "../../../resources/Packaged Software/Booloader-DiskFlash-Tools";
  }
  return softs.map((file) => {
    return {
      ...file,
      typeIndex: typeIndex,
      iconPath: `${dirName}/icons/${file.name}.exe.ico`,
    };
  });
}

async function getConfig() {
  // 从远端更新 Config
  const path = "../src/config.json";
  try {
    let data = await fs.readTextFile(path);
  } catch (err) {
    throw new Error("Failed to get config");
  }
  return;
}

export default {
  getSoftsByType,
};
