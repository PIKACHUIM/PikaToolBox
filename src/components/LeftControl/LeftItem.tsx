import Tooltip from "@mui/material/tooltip";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import RecommendIcon from "@mui/icons-material/Recommend";
import { ReactComponent as StartIcon } from "../../assets/LeftIcon/yindaojinxinag.svg";
import { ReactComponent as SoftwareDev } from "../../assets/LeftIcon/ruanjiankaifabao.svg";
import { ReactComponent as SpeedOffice } from "../../assets/LeftIcon/xiaoshuaitisheng.svg";
import { ReactComponent as CProgramming } from "../../assets/LeftIcon/jiamijiemifuwu.svg";
import { ReactComponent as Hardware } from "../../assets/LeftIcon/cpuchuliqiyingjian.svg";
import { ReactComponent as DeviceInfo } from "../../assets/LeftIcon/shebeixinxi.svg";
import { ReactComponent as NetworkTools } from "../../assets/LeftIcon/wangluogongju-.svg";
import { ReactComponent as SystemInstall } from "../../assets/LeftIcon/xitonganzhuang.svg";
import { ReactComponent as SystemOptimize } from "../../assets/LeftIcon/xitongyouhua.svg";
import { ReactComponent as DiskTools } from "../../assets/LeftIcon/yingpan.svg";

const icons = [
  StartIcon,
  SoftwareDev,
  SpeedOffice,
  CProgramming,
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
          title={props.title}
        >
          <IconButton>
            <ItemIcon index={props.index} viewBox="0 0 1024 1024" />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default LeftItem;
