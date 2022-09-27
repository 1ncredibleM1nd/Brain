import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { rootStore } from "./stores";
import { GlobalStyles } from "@/styles/base";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cabinet } from "@/Pages/Cabinet";
import { Settings } from "@/Pages/Settings";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Projects } from "@/Pages/Projects";
import { Messages } from "@/Pages/Messages";
import { Freelancers } from "@/Pages/Freelancers";
import { Notifications } from "@/Pages/Notifications";
import { Documents } from "@/Pages/Documents";

const App = observer(() => {
  useEffect(() => {
    const init = async () => {
      await rootStore.init();
    };
    init();
  }, []);

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState === "visible") {
    }
  });

  return (
    <Router>
      <GlobalStyles />
      <LeftSidebar />
      <Switch>
        {/*<Route path="/projects">*/}
        {/*  <Projects />*/}
        {/*</Route>*/}
        {/*<Route path="/messages">*/}
        {/*  <Messages />*/}
        {/*</Route>*/}
        {/*<Route path="/freelancers">*/}
        {/*  <Freelancers />*/}
        {/*</Route>*/}
        {/*<Route path="/notifications">*/}
        {/*  <Notifications />*/}
        {/*</Route>*/}
        {/*<Route path="/documents">*/}
        {/*  <Documents />*/}
        {/*</Route>*/}
      </Switch>
    </Router>
  );
});

export default App;
