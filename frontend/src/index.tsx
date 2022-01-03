import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);
