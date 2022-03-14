import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Paper, Card, Popper, Fade } from "@mui/material";
import { closeControlBox, openControlBox } from "../../features/app/appSlice";
// Control Box Component
import ControlBox from "./ControlBox";

const Div = styled.div`
  position: absolute; 
  top: 4px;
  right: 4px;
`;

function ControlButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const appState = useAppSelector((state) => state.app);
  const controlBoxOpen = appState.controlBox.open;
  const toggleControlBox = () => {
    if (controlBoxOpen)
      dispatch(closeControlBox());
    else
      dispatch(openControlBox());
  }
  return(
    <Div>
      { /* Open and Close Control Box */ }
      <Avatar sx={{ bgcolor: "black" }} component={Paper}
        elevation={2} onClick={toggleControlBox}
      >
        { !controlBoxOpen && 
          <DashboardRoundedIcon style={{transitionDelay: "2s"}}/>
        }
        { controlBoxOpen && 
          <CloseIcon style={{transitionDelay: "2s"}}/>
        }
      </Avatar>
      {/* Pop Up Control Box */}
      <Popper
        id={controlBoxOpen ? 'virtual-element-popper' : undefined}
        open={controlBoxOpen}
        anchorEl={anchorEl}
        transition
        placement="right-start"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card style={{ position: "relative", left: "70vw", top: "4px" }}>
              <ControlBox />
            </Card>
          </Fade>
        )}
      </Popper>
    </Div>
  );
}

export default ControlButton;