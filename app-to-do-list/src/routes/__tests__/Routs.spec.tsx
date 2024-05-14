import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Routes from '../index';
import Home from '../../Screens/Home';
import App from '../../../mini-apps/mini-app-list/src/app/App';

describe('Routes', () => {
  it('renders Home screen by default', () => {
    const { getByText } = render(<Routes />);
    expect(getByText('Home')).toBeDefined();
  });

  it('navigates to MiniApp screen', () => {
    const { getByText } = render(<Routes />);
    fireEvent.press(getByText('To do List'));
    expect(getByText('To do list')).toBeDefined();
  });

});
