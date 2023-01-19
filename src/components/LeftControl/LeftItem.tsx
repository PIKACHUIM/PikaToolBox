import Tooltip from "@mui/material/tooltip";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import RecommendIcon from "@mui/icons-material/Recommend";
import StartIcon from "../../assets/LeftIcon/yindaojinxinag.svg?component";
import SoftwareDev from "../../assets/LeftIcon/ruanjiankaifabao.svg?component";
import SpeedOffice from "../../assets/LeftIcon/xiaoshuaitisheng.svg?component";
import Cprogramming from "../../assets/LeftIcon/jiamijiemifuwu.svg?component";
import Hardware from "../../assets/LeftIcon/cpuchuliqiyingjian.svg?component";
import DeviceInfo from "../../assets/LeftIcon/shebeixinxi.svg?component";
import NetworkTools from "../../assets/LeftIcon/wangluogongju-.svg?component";
import SystemInstall from "../../assets/LeftIcon/xitonganzhuang.svg?component";
import SystemOptimize from "../../assets/LeftIcon/xitongyouhua.svg?component";
import DiskTools from "../../assets/LeftIcon/yingpan.svg?component";

const icons = [
  StartIcon,
  SoftwareDev,
  SpeedOffice,
  Cprogramming,
  Hardware,
  DeviceInfo,
  NetworkTools,
  SystemInstall,
  SystemOptimize,
  DiskTools,
];

function ItemIcon(props: { index: number } & SvgIconProps) {
  if (props.index === -1) {
    return <RecommendIcon />;
  } else if (typeof props.index == "number") {
    return <SvgIcon component={icons[props.index]} {...props} />;
  } else {
    return <SvgIcon {...props} />;
  }
}

function LeftItem(props: { isExtend: boolean; title: string; index: number }) {
  if (props.isExtend) {
    return (
      <div>
        <ItemIcon index={props.index} viewBox="0 0 600 476.6" />
        <span>{props.title}</span>
      </div>
    );
  } else {
    return (
      <div>
        <Tooltip
          TransitionComponent={Fade}
          placement="right"
          TransitionProps={{ timeout: 600 }}
          title={props.title}>
          <IconButton>
            <ItemIcon index={props.index} viewBox="0 0 1024 1024" />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default LeftItem;
