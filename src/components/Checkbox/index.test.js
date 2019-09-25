import React from "react";
import TestRenderer from "react-test-renderer";
import Checkbox from "./index";
import { StyledOnlyButton } from "./index";
import { matchers } from "jest-emotion";
expect.extend(matchers);

describe("Checkbox component", () => {
  const wrapper = TestRenderer.create(
    <Checkbox
      id={1}
      changeStops={() => {}}
      labelText="1 пересадка"
      isEnabled={true}
    />
  );
  let tree = wrapper.toJSON();

  it("Matches the snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  it("Change background-color on hover", () => {
    expect(tree).toHaveStyleRule("background-color", "#f1fcff", {
      target: ":hover"
    });
  });

  it("Correct props values", () => {
    const instance = wrapper.root;
    const checkbox = instance.find(el => el.type === "input");
    expect(checkbox.props.id).toEqual("checkbox1");
    expect(checkbox.props.type).toEqual("checkbox");
    expect(checkbox.props.checked).toEqual(true);
  });

  it("Correct label text", () => {
    const instance = wrapper.root;
    const label = instance.find(el => el.type === "label");
    expect(label.children).toEqual(["1 пересадка"]);
  });

  it("Correct display value of 'only button'", () => {
    const target = { target: `:hover ${StyledOnlyButton}` };
    expect(tree).toHaveStyleRule("display", "table-cell", {
      ...target
    });
    expect(tree).toHaveStyleRule("background-color", "#f1fcff", {
      ...target
    });
  });
});
