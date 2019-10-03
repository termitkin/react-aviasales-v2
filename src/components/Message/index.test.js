import React from "react";
import { create, act } from "react-test-renderer";
import Message from "./index";

describe("Message component", () => {
  let wrapper;

  afterAll(() => {
    wrapper.unmount();
  });

  act(() => {
    wrapper = create(<Message text={"Some message"} />);
  });

  it("Matches the snapshot", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
