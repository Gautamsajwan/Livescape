import React from "react";
import { Wrapper } from "./wrapper";
import { Navigation } from './navigation'
import Toggle from "./toggle";

type Props = {};

async function Sidebar({}: Props) {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
}

export default Sidebar;
