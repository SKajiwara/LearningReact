import React from "react";
import styled, { css } from "styled-components";
import {
  Routes, 
  Route, 
  Navigate 
} from "react-router-dom";
// Redux
import { useAppSelector, useAppDispatch } from "./store/hooks";
import {
  openSideBar,
  closeSideBar,
  updateSelectedNavItem
} from "./features/app/appSlice";
interface Props {
  state: {
    open: boolean;
  }
}

const Section = styled.section`
    position: relative;
    background: white; // #E4E9F7;
    height: calc(100vh - 4vh); // 100 - header
    top: 0;
    left: 60px; // Side bar With
    width: calc(100% - 60px); // Side bar With
    transition: all 0.5s ease;
    // z-index: 2;

    // When Open
    ${(props: Props) => props.state.open && css`
        width: calc(100% - 240px);
        left: 240px;
    `}
`

function Overview(): JSX.Element {
  return(<>Overview</>)
}

function Routing(): JSX.Element {
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.app);
  const { open } = appState.sideBar;

  return (
    <Section state={{ open }} onClick={() => dispatch(closeSideBar())}>
      <Routes>
        <Route path="/" element={ <Overview /> } />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Section>
  );
}

export default Routing;
