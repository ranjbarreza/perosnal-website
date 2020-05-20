import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';
import { NavBurgerMenu } from './components';
import { defaultTheme, GlobalStylesComponent } from './custom-styles';
import './page-transform.css';
import { Home, Me, Project, Study, Work } from './pages';
import * as serviceWorker from './serviceWorker';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/project', name: 'Project', Component: Project },
  { path: '/work', name: 'Work', Component: Work },
  { path: '/study', name: 'Study', Component: Study },
  { path: '/me', name: 'Me', Component: Me },
];

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStylesComponent />

      <Router>
        <NavBurgerMenu />

        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
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
