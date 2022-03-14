import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  openSideBar,
  closeSideBar,
  updateSelectedNavItem,
} from '../../features/app/appSlice';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import {
  StyledDiv,
  SideBar,
  SBLogoContainer,
  StyledDashboardIcon,
  SBLogoName,
  SBToggleBtn, 
  SBToggleBtnOpen,
  
  NavItemList,
  NI,
  NILink,
  NIIconContainer,
  NILinkName,
  NIToolTip,

  // Unfinished feature:
  UpdatesContainer,
  UpdatesItem,

  ProfileContainer,
  PContent,
  PDetails,
  PNameJob,
  PName,
  PJob,
  LogOutIconContainer
} from './SideMenu.styles';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
// Contacts Page Icon
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'; 
// License Page Icon
import CreditScoreIcon from '@mui/icons-material/CreditScore'; 
// Social Media stats page icon
import RecommendIcon from '@mui/icons-material/Recommend';
// Custom query page icon
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const StyledLink = styled(Link)`
    text-decoration: none;
`
interface Props {
  state: {
      open: boolean;
  };
  selected: boolean;
}
function SideMenu(): JSX.Element {
  // The state arg is correctly typed as RootState already
  const appState = useAppSelector((state) => state.app);
  const { open, selectedNavItem } = appState.sideBar;
  const dispatch = useAppDispatch();
  const location = useLocation();
  React.useEffect(() => { 
    dispatch(updateSelectedNavItem(location.pathname))
  },[dispatch]) // To avoid missing dependency errors
  const toggleSideMenu = (): void => {
    open ? dispatch(closeSideBar()) : dispatch(openSideBar())
  }
  return (
    <>
      <SideBar state={{ open }} selected={false}>
        {/* BASHBOARD LOGO */}
        <SBLogoContainer state={{ open }} selected={false}> {/* Logo Container*/}
          <StyledDashboardIcon/> {/* Logo */}
          
          <SBLogoName>Dashboard</SBLogoName> {/* Logo Name */}
        </SBLogoContainer>
        {/* Menu Icon */}
        { !open && ( <SBToggleBtn state={{ open }} selected={false} onClick={toggleSideMenu}/>) }
        { open && ( <SBToggleBtnOpen state={{ open }} selected={false} onClick={toggleSideMenu}/>) }
        {/* NAV ITEMS (NI) */}
        <NavItemList>
          { NavItems.map((item, index) => 
          <NI state={{ open }} selected={ selectedNavItem === item.link} key={index}
              onClick={()=>dispatch(updateSelectedNavItem(item.link))}
          >
            <NILink to={ item.link } state={{ open }} 
                selected={ selectedNavItem === item.link }>
              <NIIconContainer state={{ open }} selected={false}> 
                  { item.icon() }
              </NIIconContainer>
              <NILinkName state={{ open }} selected={false}>{ item.name }</NILinkName>
            </NILink>
            <NIToolTip state={{ open }} selected={false}>{ item.name }</NIToolTip>
          </NI>
          )}
        </NavItemList>
        
        {/* App Updates */}
        { open && (
          <UpdatesContainer state={{ open }} selected={false}>- Updates -
            <ul> {/* Update Item List */}
            { updates.map((update, index) => 
              <UpdatesItem key={index}><u>{update.title}</u><br />({update.date})</UpdatesItem>
            )} 
            </ul>
          </UpdatesContainer>
        )}
        {/* USER PROFILE (P)*/}
        <ProfileContainer> {/* Profile content */} 
          <PContent> {/* Profile */}
            {/* Profile Details */}
            <PDetails state={{ open }} selected={false}> 
                <Avatar
                    sx={{ bgcolor: "#DB9320"}}
                    alt="Kevin Jones"
                    // src="/broken-image.jpg"
                />
                <PNameJob> {/* Name Job */}
                  <PName>User</PName>
                </PNameJob>
            </PDetails>
            <LogOutIconContainer state={{ open }} selected={false}>
                <StyledLink to="/logout">
                    <LogoutIcon style={{ color: 'white' }}/>
                </StyledLink>
            </LogOutIconContainer>
          </PContent>
        </ProfileContainer>
      </SideBar>
    </>
  );
}

// Hard Coded Data
const NavItems = [
  { name: "Overview", link: "/", icon: ()=> <HomeIcon /> },
  { name: "Installs", link: "/installs", icon: ()=> <AppsIcon /> },
  { name: "Sales", link: "/sales", icon: () => <AssessmentIcon /> },
  { name: "Contacts", link: "/contacts", icon: () => <PeopleAltRoundedIcon /> },
  { name: "Licenses", link: "/licenses", icon: () => <CreditScoreIcon /> },
  { name: "Socials", link: "/socials", icon: () => <RecommendIcon/> },
  { name: "Custom", link: "/custom", icon: () => <QueryStatsIcon/> },
  { name: "Settings", link: "/settings", icon: () => <SettingsSuggestIcon /> },
]
// Mock Data below
const updates = [
  { title: "New feature added", date: "31-08-2021 21:10"},
  { title: "Bug fixes added", date: "28-08-2021 07:25"},
  { title: "New PM Store started", date: "22-08-2021 09:55"},
]

export default SideMenu;
