import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import Restaurantmenu from "../RestaurantMenu";
import Tabs from "../Tabs";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Tabs />
        <Restaurantmenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));
  const addBtns = body.getAllByTestId("addBtn");
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[2]);
  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 2 items");
});
