import { createElement } from "react";
import { render } from "react-dom";
import { RootStoreProvider } from "./stores";
import { setup } from "goober";
import { shouldForwardProp } from "goober/should-forward-prop";
// order important
import App from "./App";
import "@/assets/icons/index";

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp(prop => !prop.startsWith("$")),
);

render(
  <RootStoreProvider>
    <App />
  </RootStoreProvider>,
  document.getElementById("root"),
);
