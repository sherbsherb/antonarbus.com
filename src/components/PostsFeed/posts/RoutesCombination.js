import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CodeSpan } from '../components/CodeSpan';
import { Lnk } from '../components/Lnk';

const Nav = () => (
  <div>
    Nav:
    <Link to="/"> •Home</Link>
    <Link to="/about"> •About</Link>
    <Link to="/shop"> •Shop</Link>
  </div>
);

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Shop = () => <div>Shop</div>;
const Footer = () => <div>Footer</div>;

function Component1() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

const toRender1 = <Component1 />;

function Component2() {
  return (
    <Router>
      <Switch>
        <Route path="/about" exact render={props => (
            <>
              <Nav />
              <About />
            </>
          )}
        />
        <Route path="/shop" exact render={props => (
            <>
              <Nav />
              <Shop />
              <Footer />
            </>
          )}
        />
        <Route path="/" render={props => (
            <>
              <Nav />
              <Home />
              <Footer />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

const toRender2 = <Component2 />;

export const RoutesCombination = {
  title: 'Routes combination',
  date: '2021.10.28',
  tagsArr: ['react', 'routes', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          We have static <i>Nav</i> & <i>Footer</i> and dynamic <i>About</i>,{' '}
          <i>Shop</i>, <i>Home</i> components
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        <Router>
          <Nav />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: (
        <>
          What if we do not want to render <i>Footer</i> when <i>About</i> is
          on.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We can use{' '}
          <CodeSpan>
            {'render = {(routeProps ) => <Component {...routeProps} />}'}
          </CodeSpan>{' '}
          <Lnk path="https://reactrouter.com/web/api/Route/route-render-methods">method</Lnk>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        <Router>
          <Switch>
            <Route path="/about" exact render={props => (
                <>
                  <Nav />
                  <About />
                </>
              )}
            />
            <Route path="/shop" exact render={props => (
                <>
                  <Nav />
                  <Shop />
                  <Footer />
                </>
              )}
            />
            <Route path="/" render={props => (
                <>
                  <Nav />
                  <Home />
                  <Footer />
                </>
              )}
            />
          </Switch>
        </Router>
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: (
        <>
          Hope there are neater ways, but will study later.
        </>
      ),
    },
  ],
};
