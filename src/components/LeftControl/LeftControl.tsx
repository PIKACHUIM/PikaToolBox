import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import LeftItem from "./LeftItem";
import { styled } from "@mui/material/styles";
import { fs, path } from "@tauri-apps/api";

const Item = styled(LeftItem)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  flexGrow: 1,
  color: theme.palette.text.secondary,
}));

function LeftControl(props: {}) {
  const [isExtend, setIsExtend] = useState(false);
  const [titleList, setTitleList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      let configPath = await path.resolveResource("apps/ToolsConfig.json");
      let data = await fs.readTextFile(configPath);
      if (data) {
        setTitleList( JSON.parse(data).type.map((item: any) => item.name));
      } else {
        setTitleList([
          "引导镜像",
          "软件开发",
          "效率办公",
          "加密恢复",
          "硬件编程",
          "设备信息",
          "网络工具",
          "系统安装",
          "系统优化",
          "硬盘工具",
        ]);
      }
    })();
  }, []);

  return (
    <Stack
      sx={{ ml: 1, height: "100vh" }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Item key={-1} isExtend={isExtend} title="常用推荐" index={-1}></Item>
      {titleList.map((title, index) => (
        <Item
          key={index}
          isExtend={isExtend}
          title={title}
          index={index}
        ></Item>
      ))}
    </Stack>
  );
}

export default LeftControl;
