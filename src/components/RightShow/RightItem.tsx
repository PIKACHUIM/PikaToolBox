import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Soft } from "../../utils/getSoft";
import { fs, invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

function SoftItem(props: { soft: Soft }) {
  const soft = props.soft;
  const [installed, setInstalled] = useState<boolean>(soft.installed);
  const [image64, setImage64] = useState<string>("");
  useEffect(() => {
    fs.readBinaryFile(soft.iconPath).then((data) => {
      // [x]: deprecated base64 method
      // let binary = "";
      // for (let i = 0; i < data.length; i++) {
      //   binary += String.fromCharCode(data[i]);
      // }
      // setImage64("data:image/png;base64,"+ window.btoa(binary));
      // [ ]: recommend createObjectURL method
      setImage64(
        URL.createObjectURL(new Blob([data.buffer], { type: "	image/png" }))
      );
    });
  }, [soft.iconPath]);
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ width: 96 }}
        component="img"
        alt={soft.name}
        height="96"
        width="96"
        src={image64}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {soft.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {soft.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <Button
          size="small"
          disabled={!installed}
          onClick={() => {
            invoke("execute_file", { filePath: soft.exePath, args: [] });
          }}
        >
          启动
        </Button>
        {installed ? (
          <Button size="small">卸载</Button>
        ) : (
          <Button
            size="small"
            onClick={() => {
              invoke("install_app", { downloadUrl: soft.downloadUrl[0]+'.exe', path: soft.exePath }).then(()=>{
                setInstalled(true);
              });
            }}
          >
            下载
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default SoftItem;
