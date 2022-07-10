import { render, screen } from "@testing-library/react";
import { UIProvider } from "../Context/UIContext";
import Page from "./Page";

test("prev is disabled page number equals to one", () => {
  render(
    <UIProvider>
      <Page />
    </UIProvider>,
  );
  screen.debug();
});

export {};
