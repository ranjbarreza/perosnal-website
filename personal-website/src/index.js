import React from 'react';
// import { IndexHelmet } from './components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStylesComponent } from './custom-styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './consts';
import { Home } from './pages';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStylesComponent />
      <BrowserRouter>
        <Switch>
          {/* <IndexHelmet /> */}
          <Switch>
            <Route path={Routes.home.routePath} exact>
              <Home />
            </Route>
          </Switch>
        </Switch>
      </BrowserRouter>
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
