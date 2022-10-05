import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { rootStore } from "./stores";
import { GlobalStyles } from "@/styles/base";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Workspace } from "@/components/Workspace";
import { Authorization } from "./Pages/Auth/Authorization";
import { Registration } from "./Pages/Auth/Registration";
import { Header } from "@/components/Header";
import { Wrapper, MainWrapper } from "./style";

const Links = [
  {
    identifier: "projects",
    name: "Проекты",
  },
  {
    identifier: "messages",
    name: "Сообщения",
  },
  {
    identifier: "freelancers",
    name: "Фрилансеры",
  },
  {
    identifier: "documents",
    name: "Документы",
  },
  {
    identifier: "user",
    name: "Личные данные",
  },
  {
    identifier: "finances",
    name: "Финансы",
  },
  {
    identifier: "settings",
    name: "Настройки",
  },
  {
    identifier: "help",
    name: "Помощь",
  },
];

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

  const [logged, setlogged] = useState(false); // need update with business logic

  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        {logged ? (
          <>
            <LeftSidebar links={Links} />
            <MainWrapper>
              <Header />
              <Workspace />
            </MainWrapper>
          </>
        ) : (
          <>
            <Route path="/auth">
              <Authorization />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
          </>
        )}
      </Wrapper>
    </Router>
  );
});

export default App;
