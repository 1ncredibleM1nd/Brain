import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { rootStore } from "./stores";
import { GlobalStyles } from "@/styles/base";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cabinet } from "@/Pages/Cabinet";
import { Settings } from "@/Pages/Settings";

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
      <Switch>
        <Route path={"/cabinet"}></Route>
      </Switch>
    </Router>
  );
});

export default App;
