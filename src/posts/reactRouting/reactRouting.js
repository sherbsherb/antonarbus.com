import React, { useEffect, useState } from 'react';
import { CodeSpan } from '../../components/post/CodeSpan';
import { Lnk } from '../../components/post/Lnk';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import img from './linkProps.png'

function Component() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemInShop} />
      </Switch>
      <Footer />
    </Router>
  );
}

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

const Shop = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios('https://fortnite-api.theapinetwork.com/store/get')
      .then(res =>setState(res.data.data))
  }, []);

  return (
    <>
      <div>Shop: Fortnite toys</div>
      {state.map(o => (
        <h3 key={o.itemId}>
          <Link to={`/shop/${o.itemId}`}>{o.item.name}</Link>
        </h3>
      ))}
    </>
  );
};

const ItemInShop = (props) => {
  console.log(props)
  const [state, setState] = useState({ images: {}, ratings: {}, });
  
  useEffect(() => {
    axios(`https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`)
      .then(res => setState({ ...state, ...res.data.data.item }))
  }, []);

  return (
    <>
      <div><b>name</b>: {state.name}</div>
      <div><b>description</b>: {state.description}</div>
      <div><b>cost</b>: {state.cost}</div>
      <div><b>ratings</b>: {state.ratings.avgStars}</div>
      <img src={state.images.icon} alt={state.description} /> 
    </>
  );
};

const Footer = () => <div>Footer</div>;

const toRender = <Component />;

export const reactRouting = {
  title: 'Routes in React',
  date: '2021.10.26',
  tagsArr: ['react', 'routes', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Install{' '}
          <Lnk path="https://www.npmjs.com/package/react-router-dom">
            <CodeSpan>npm i react-router-dom</CodeSpan>{' '}
          </Lnk>{' '}
          package in your terminal.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          App should be wrapped into <CodeSpan>{'<Router>'}</CodeSpan> component.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          A component which is connected to an <i>url</i> to be passed into the <CodeSpan>{'<Route>'}</CodeSpan>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useEffect, useState } from 'react';
        import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
        
        function Component() {
          return (
            <Router>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/shop/:id" component={ItemInShop} />
              </Switch>
              <Footer />
            </Router>
          );
        }
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Anchor tag to a component should be wrapped into <CodeSpan>{'<Link to="/about">About</Link>'}</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          When we are redirected to a component from the <CodeSpan>{'<Link/>'}</CodeSpan> the component automatically gets props with useful information. 
        </>
      ),
    },
    {
      type: 'img',
      path: img,
    },
    {
      type: 'text',
      val: (
        <>
          Component can have a dynamic routing with a placeholder <CodeSpan>{'<Route path="/shop/:id" component={ItemInShop} />'}</CodeSpan>. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Such component can be accessed with following <CodeSpan>{'<Link to={`/shop/${o.itemId}`}>item</Link>'}</CodeSpan>. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>id</i> received by a component from props can be used for dynamic data presentation, for example for data fetching from api <CodeSpan>{'axios(`https://apiUrl/get?id=${props.match.params.id}`)'}</CodeSpan>. 
        </>
      ),
    },
    {
      type: 'text',
      val: 'Full code',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {
          return (
            <Router>
              <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/shop/:id" component={ItemInShop} />
              </Switch>
              <Footer />
            </Router>
          );
        }
        
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
        
        const Shop = () => {
          const [state, setState] = useState([]);
          useEffect(() => {
            axios('https://fortnite-api.theapinetwork.com/store/get')
              .then(res =>setState(res.data.data))
          }, []);
        
          return (
            <>
              <div>Shop: Fortnite toys</div>
              {state.map(o => (
                <h3 key={o.itemId}>
                  <Link to={\`/shop/\${o.itemId}\`}>{o.item.name}</Link>
                </h3>
              ))}
            </>
          );
        };
        
        const ItemInShop = (props) => {
          console.log(props)
          const [state, setState] = useState({ images: {}, ratings: {}, });
          
          useEffect(() => {
            axios(\`https://fortnite-api.theapinetwork.com/item/get?id=\${props.match.params.id}\`)
              .then(res => setState({ ...state, ...res.data.data.item }))
          }, []);
        
          return (
            <>
              <div><b>name</b>: {state.name}</div>
              <div><b>description</b>: {state.description}</div>
              <div><b>cost</b>: {state.cost}</div>
              <div><b>ratings</b>: {state.ratings.avgStars}</div>
              <img src={state.images.icon} alt={state.description} /> 
            </>
          );
        };
        
        const Footer = () => <div>Footer</div>;
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: <>Inspired by Dev Ed's <Lnk path="https://www.youtube.com/watch?v=Law7wfdg_ls">video</Lnk></>,
    },
  ],
};
