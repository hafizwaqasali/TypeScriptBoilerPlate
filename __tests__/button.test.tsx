/**
 * @format
 */

import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';
import { Button } from '~components';

describe("Reusable Components", () => {
  it('button renders correctly', () => {
    const mockfn = jest.fn();
    const { getByText } = render(<Button onPress={mockfn} >Button Label</Button>);

    const button = getByText("Button Label");

    fireEvent.press(button);
    expect(mockfn).toBeCalled()
  });
})
