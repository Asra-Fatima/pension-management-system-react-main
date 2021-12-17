import { render, screen } from '@testing-library/react';

//import PensionerData from './components/PensionerData';

import { Provider } from 'react-redux';
import store from './redux/store';
import PensionDetails from './components/PensionDetails';

//positive test case
test('render Data from PensionDetails', () => {
  render(
    <Provider store={store} >
      <PensionDetails/>
    </Provider>);
  const linkElement = screen.getByText('Pension Details Component');
  expect(linkElement).toBeInTheDocument();
});




// negative test case 
test('render Data from PensionDetails', () => {
  render(
    <Provider store={store} >
      <PensionDetails />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});