import TopMenu from "./TopMenu";
import RightGroup from "./RightGroup";
import { styled } from "@mui/material/styles";

const RightBox = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));
export default function RightMain() {
  return (
    <RightBox>
      <TopMenu />
      <RightGroup typeIndex={0}/>
    </RightBox>
  );
}
