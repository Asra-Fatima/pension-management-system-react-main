
import { render, screen } from '@testing-library/react';

import PensionerData from './components/PensionerData';

import { Provider } from 'react-redux';
import store from './redux/store';


test('render Data from PensionerData', () => {
  render(
    <Provider store={store} >
      <PensionerData />
    </Provider>);
  const linkElement = screen.getByText('Pensioner Details Component');
  expect(linkElement).toBeInTheDocument();
});


test('render Data from PensionerData', () => {
  render(
    <Provider store={store} >
      <PensionerData />
    </Provider>);
  const linkElement = screen.getByText('Pensioner Details Component');
  expect(linkElement).not.toBeInTheDocument('Some other text which is not present in the component.');
});