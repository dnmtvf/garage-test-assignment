import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.css';
import App from './components/App';
import { events, typeToTitle } from './garageData';

const initialState = {
  events,
  filterTypes: typeToTitle,
  activeFilters: [],
};

const eventListApp = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_FILTER':
      return Object.assign({}, state, { activeFilters: [] });
    case 'CHANGE_FILTER':
      if (state.activeFilters.includes(action.filter)) {
        const newFilter = state.activeFilters.filter(item => item !== action.filter);
        return Object.assign({}, state, { activeFilters: newFilter });
      }
      return Object.assign({}, state, { activeFilters: state.activeFilters.concat(action.filter) });

    default:
      return state;
  }
};

const store = createStore(eventListApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
