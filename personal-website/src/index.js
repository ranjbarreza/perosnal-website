import React from 'react';
// import { IndexHelmet } from './components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStylesComponent } from './custom-styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Lorem } from './pages';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStylesComponent />
      <Router>
        {/* <Switch> */}
        {/* <IndexHelmet /> */}
        <Switch>
          <Route exact path="/lorem">
            <Lorem />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* </Switch> */}
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
