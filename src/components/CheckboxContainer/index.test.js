import React from "react";
import { create, act } from "react-test-renderer";
import CheckboxContainer from "./index";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";
const store = configureStore();

describe("CheckboxContainer component", () => {
  let wrapper;

  afterAll(() => {
    wrapper.unmount();
  });

  act(() => {
    wrapper = create(
      <Provider store={store}>
        <CheckboxContainer />
      </Provider>
    );
  });

  it("Matches the snapshot", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("Correct checkboxes count", () => {
    const instance = wrapper.root;
    const CheckboxContainer = instance.findByType("div");
    expect(CheckboxContainer.children.length).toEqual(5);
  });
});
