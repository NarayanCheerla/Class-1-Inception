import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter, staticRouter } from "react-router-dom/server";

test("Logo render in loading of Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart should have zero items after loading of Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartElement = header.getByTestId("cart");
  expect(cartElement.innerHTML).toBe("Cart - 0 items");
});
