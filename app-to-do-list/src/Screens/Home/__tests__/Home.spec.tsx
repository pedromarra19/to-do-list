import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from '../index';

describe('Home', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home')).toBeDefined();
    expect(getByText('To do List')).toBeDefined();
  });

  it('navigates to MiniApp screen when button is pressed', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };
    const { getByText } = render(<Home navigation={mockNavigation} />);
    fireEvent.press(getByText('To do List'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('MiniApp');
  });
});
