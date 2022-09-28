import React from "react";
import { Wrapper } from "./style";
import { Switch, Route } from "react-router-dom";
import { Projects } from "@/Pages/Projects";
import { Messages } from "@/Pages/Messages";
import { Freelancers } from "@/Pages/Freelancers";
import { Notifications } from "@/Pages/Notifications";
import { Documents } from "@/Pages/Documents";
import { Cabinet } from "@/Pages/Cabinet";
import { Finances } from "@/Pages/Finances";
import { Settings } from "@/Pages/Settings";
import { Help } from "@/Pages/Help";

export const Workspace = () => {
  return (
    <Switch>
      <Wrapper>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/freelancers">
          <Freelancers />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/documents">
          <Documents />
        </Route>
        <Route path="/user">
          <Cabinet />
        </Route>
        <Route path="/finances">
          <Finances />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Wrapper>
    </Switch>
  );
};
