import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Soft } from "../../utils/getSoft";

function SoftItem(props: { soft: Soft }) {
  const soft = props.soft;
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ width: 96 }}
        component="img"
        alt={soft.name}
        height="96"
        width="96"
        image={soft.iconPath}
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
        <Button size="small">启动</Button>
        {soft.installed ? (
          <Button size="small">卸载</Button>
        ) : (
          <Button size="small" hidden={props.soft.installed}>
            下载
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default SoftItem;
