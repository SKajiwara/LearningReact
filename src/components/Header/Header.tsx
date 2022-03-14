import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
// import { Avatar, Paper, Card, CardContent, Box } from "@mui/material";
// import Popper from '@mui/material/Popper';
// import Typography from '@mui/material/Typography';
// import Fade from '@mui/material/Fade';
// import { closeControlBox, openControlBox } from "../features/app/appSlice";
import ControlButton from "./ControlButton";

interface Props {
  open: boolean;
}

const HeaderContainer = styled.div`
  position: relative; 
  background: #fff; // White so you can't see
  min-height: 60px; // Make sure Section is 100vh - <this height>
  top: 0;
  left: ${(props: Props) => props.open ? "240px" : "60px"};
  width: ${(props: Props) => props.open ? "calc(100% - 240px)" : "calc(100% - 60px)"};
  transition: all 0.5s ease;
`;

function Header(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const appState = useAppSelector((state) => state.app);
  const sideBarOpen = appState.sideBar.open;
  // const controlBoxOpen = appState.controlBox.open;
  // const toggleControlBox = () => {
  //   if (controlBoxOpen)
  //     dispatch(closeControlBox());
  //   else
  //     dispatch(openControlBox());
  // }
  return(
    <HeaderContainer open={sideBarOpen}>
      <ControlButton />
    </HeaderContainer>
  );
}

export default Header;