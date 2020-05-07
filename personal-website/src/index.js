import React from 'react';
// import { IndexHelmet } from './components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStylesComponent } from './custom-styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Project, Work, Study, Me } from './pages';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { NavBurgerMenu } from './components';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStylesComponent />

      <Router>
        {/* <Switch> */}
        {/* <IndexHelmet /> */}
        <NavBurgerMenu />
        <Switch>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/study">
            <Study />
          </Route>
          <Route exact path="/me">
            <Me />
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
