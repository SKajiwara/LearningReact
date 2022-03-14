import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu'; // MenuIcon when closed
import SortIcon from '@mui/icons-material/Sort'; // MenuIcon when oped

interface Props {
  state: {
    open: boolean;
  };
  selected: boolean;
}

export const StyledDiv = styled.div`
  height: 100px;
  width: 100px;
`;

// Container for the side menu
export const SideBar = styled.div`
  // Size 
  height: 100%;
  width: 60px;
  // Position
  left: 0;
  top: 0;
  position: fixed;
  padding: 6px 4px;
  z-index: 99; // To be above header
  // Shadow 
  box-shadow: 3px 0px 6px 3px rgba(0, 0, 0, 0.1);
  // Color
  background: #000;
  // Animation
  transition: all 0.5s ease;
  // When Open
  ${(props: Props) => props.state.open && css`
    width: 240px;
  `}
  
  @media only screen and (max-height: 500px) {
    opacity: 0;
  }
`;

// Dashboard Logo
export const SBLogoContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  // When Open
  ${(props: Props) => props.state.open && css`
    opacity: 1;
    pointer-events: none;
    transform: translateX(5px);
    // Shadow to make it 3D
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  `}
`;

export const StyledDashboardIcon = styled(DashboardIcon)`
  font-size:28px;
  margin-right: 5px;
`;
export const SBLogoName = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
export const SBToggleBtn = styled(MenuIcon)`
  position: absolute;
  color: #fff;
  left: 50%;
  top: 18px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
  // When Open
  ${(props: Props) => props.state.open && css`
    left: 90%;
  `}
`;
export const SBToggleBtnOpen = styled(SortIcon)`
  position: absolute;
  color: #fff;
  left: 50%;
  top: 18px;
  font-size: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
  transform: scaleX(-1);
  // When Open
  ${(props: Props) => props.state.open && css`
    left: 87%;
  `}
`;

export const SBDetails = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const SBIcon = styled.i`
  opacity: 0;
  transition: all 0.5s ease;
`;
export const SBTitle = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
  // Opacity is 1 when SB is open
`;
// Nav Link Items
export const NavItemList = styled.ul`
  margin-top: 20px;
`;
export const NI = styled.li`
  /* position: relative;
  margin: 8px 0; */
  position: relative;
  margin-left: 5px;
  height: 55px;
  width: 100%;
  // margin: 0 5px;
  list-style: none;
  line-height: 50px;
  align-items: center;
  // When Open
  ${(props: Props) => !props.state.open && props.selected && css`
    transform: translateX(15px);
  `}
`;
export const NILink = styled(Link)`
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  //box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  white-space: nowrap;
  // transition: all 0.5s ease;
  transform: translateX(-5px);
  text-decoration: none;
  &:hover  {
    color: #000;
    font-weight: 600;
    background: #fff;
  }
  // When Open
  ${(props: Props) => props.selected && css`
    color: #000;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    // color: #DB9320;
    font-weight: 700;
  `}
`;
export const NIIconContainer = styled.i`
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
  // transition: all 0.5s ease;
  transform: translate(1px, 6px);
  // When Open
  ${(props: Props) => props.state.open && css`
    transform: translate(0px, 6px);
  `}
`;
export const NILinkName = styled.span`
  opacity: 0;
  pointer-events: none;
  // When Open
  ${(props: Props) => props.state.open && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;
export const NIToolTip = styled.span`
  position: absolute;
  left: 122px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 122px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;

  // When Open
  ${(props: Props) => props.state.open && css`
    display: none;
  `}

  ${NI}:hover & {
    transition: all 0.5s ease;
    top: 50%;
    opacity: 1;
  }
`;
// Update UI
export const UpdatesContainer = styled.div`
  // Position
  position: absolute;
  bottom: 15%;
  left: 0;
  text-align: center;
  // Size
  width: 100%;
  // Font
  color: white;
  font-size: 12px;
  // Amination
  transition: all 0.4s ease;
  // Visibility
  opacity: 0;
  // When Open
  ${(props: Props) => props.state.open && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;
export const UpdatesItem = styled.li`
  list-style: none;
  line-height: 20px;
`;
// Profile UI
export const ProfileContainer = styled.div`
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
  // Shadow to make it 3D
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
`;
export const PContent = styled.div`
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: #000;
  // Amination
  transition: all 0.5s ease;
`;
export const PDetails = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  // When Open
  ${(props: Props) => props.state.open && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;
export const PNameJob = styled.div`
  margin-left: 10px;
`;
export const PName = styled.div`
  font-size: 15px;
  font-weight: 400px;
`;
export const PJob = styled.div`
  font-size: 12px;
`;
export const LogOutIconContainer = styled.i`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size:20px;
  border-radius: 12px;
  text-align: center;
  // Amination
  transition: all 0.5s ease;
  // When Open
  ${(props: Props) => props.state.open && css`
    left: 88%;
  `}
`;
