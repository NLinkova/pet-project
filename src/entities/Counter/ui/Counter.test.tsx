import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders with initial value", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increments value when increment button is clicked", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId("increment-btn");
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrements value when decrement button is clicked", async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const decrementBtn = screen.getByTestId("decrement-btn");
    await userEvent.click(decrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});