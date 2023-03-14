import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import LeftControl from "../../components/LeftControl/LeftControl";
import RightMain from "../../components/RightShow/RightMain";
import { fetchConfig } from "../../utils/getSoft";

const Left = styled(LeftControl)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Right = styled(RightMain)(({ theme }) => ({}));

function Main() {
  useEffect(() => {
    fetchConfig();
  });
  return (
    <Stack
      spacing={1}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Left />
      <Right />
    </Stack>
  );
}
export default Main;
