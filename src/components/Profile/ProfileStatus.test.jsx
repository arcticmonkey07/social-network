import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status={'hey la la la'}/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hey la la la");
  });

  test(`after creation input should't be displayed`, () => {
    const component = create(<ProfileStatus status={'hey la la la'}/>);
    const root = component.root;

    expect(() => {
      let input = root.findByType('input');
      (span).toBeNull();
    }).toThrow();
  });

  test("after creation span should contains correct status", () => {
    const component = create(<ProfileStatus status={'hey la la la'}/>);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('hey la la la');
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status={'hey la la la'}/>);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('hey la la la');
  });

  test("callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = create(<ProfileStatus status={'hey la la la'} updateStatus={mockCallBack} />);
    const instance = component.getInstance();
    instance.deActivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});