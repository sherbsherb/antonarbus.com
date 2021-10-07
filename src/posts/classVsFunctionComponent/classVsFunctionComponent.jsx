import React, { useState } from 'react';

const btnCss = {
  padding: '5px 20px',
  margin: '10px 10px 0px 0px',
  cursor: 'pointer',
};

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ likes: this.state.likes + 1 });
  }

  decrement() {
    this.setState({ likes: this.state.likes - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.likes}</h1>
        <button onClick={this.increment} style={btnCss}>
          +1
        </button>
        <button onClick={this.decrement} style={btnCss}>
          -1
        </button>
      </div>
    );
  }
}

const toRender1 = <ClassComponent />

function FunctionComponent() {
  const [likes, setLikes] = useState(0);

  const increment = () => setLikes(likes + 1);
  const decrement = () => setLikes(likes - 1);

  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment} style={btnCss}>
        +1
      </button>
      <button onClick={decrement} style={btnCss}>
        -1
      </button>
    </div>
  );
}

const toRender2 = <FunctionComponent />

export const classVsFunctionComponent = {
  title: <>Class vs Function component</>,
  date: '2021.09.26',
  id: '4eretg',
  tagsArr: ['react', 'class component', 'function component', 'basics'],
  abstract: 'abstract from the article',
  postParts: [
    {
      type: 'text',
      val: <>Class component</>,
    },
    {
      type: 'code',
      val: `
        import React, { useState } from 'react';
        
        const btnCss = {
          padding: '5px 20px',
          margin: '10px 10px 0px 0px',
          cursor: 'pointer',
        };

        class ClassComponent extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
              likes: 0,
            };
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
          }
        
          increment() {
            this.setState({ likes: this.state.likes + 1 });
          }
        
          decrement() {
            this.setState({ likes: this.state.likes - 1 });
          }
        
          render() {
            return (
              <div>
                <h1>{this.state.likes}</h1>
                <button onClick={this.increment} style={btnCss}>
                  +1
                </button>
                <button onClick={this.decrement} style={btnCss}>
                  -1
                </button>
              </div>
            );
          }
        }

        const toRender1 = <ClassComponent />
      `
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: "Function component",
    },
    {
      type: 'code',
      val:  `
        import React, { useState } from 'react';
        
        const btnCss = {
          padding: '5px 20px',
          margin: '10px 10px 0px 0px',
          cursor: 'pointer',
        };

        function FunctionComponent() {
          const [likes, setLikes] = useState(0);
        
          const increment = () => setLikes(likes + 1);
          const decrement = () => setLikes(likes - 1);
        
          return (
            <div>
              <h1>{likes}</h1>
              <button onClick={increment} style={btnCss}>
                +1
              </button>
              <button onClick={decrement} style={btnCss}>
                -1
              </button>
            </div>
          );
        }

        const toRender2 = <FunctionComponent />
      `
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: "Function component is a modern way to write a component in react."
    }

  ],
};