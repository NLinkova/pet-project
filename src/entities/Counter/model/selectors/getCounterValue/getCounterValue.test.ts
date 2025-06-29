import type { StateSchema } from "app/providers/StoreProvider";
import type { DeepPartial } from "app/types/common";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue.test", () => {
  test("", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
