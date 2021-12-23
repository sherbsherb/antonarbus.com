import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsFunctions = {
  title: 'Functions in JavaScript',
  date: '2021.12.22',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h5>Function declaration</h5>,
    },
    {
      val: <>Function declaration is "hoisted", like "var" in variable declarations. Can be called earlier than it is defined.</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function showMessage() {
          alert( 'Hello everyone!' );
        } // note! NO semicolon at the end
        showMessage(); // 'Hello everyone!'
      `,
    },
    {
      val: <>Function is blocked scoped and not visible outside.</>,
    },

    {
      type: 'code',
      lang: 'js',
      val: `
      console.log(fn1()); // "hi"
      console.log(fn2()); // fn2 is not a function !!!
    
      function fn1 () { return "hi"; }
    
      {
        function fn2 () { return "hi" }
      }
      `,
    },
    {
      val: <h5>Parameters</h5>,
    },
    {
      val: <>Full <Lnk path="https://antonarbus.com/post/pass-arguments-into-function">article</Lnk> about default parameters can be found here.</> ,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function showMessage(text) {
          alert(text);
        }
        showMessage('empty message'); // empty message
    
        // default parameters
        function showMessage(text = 'empty message') {
          alert(text);
        }
        showMessage(); // empty message
    
        // default parameters - old fashioned way
        function showMessage(text) {
          if (text === undefined) {
            text = 'empty message';
          }
          alert(text);
        }
        showMessage(); // empty message
    
        // default parameters - improved
        function showMessage(text) {
          text = text || 'empty message';
          alert(text);
        }
        showMessage(); // empty message
      `,
    },
    {
      val: <h5>Return</h5>,
    },
    {
      val: <>Function stops at <code>return</code></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function checkAge(age) {
          if (age >= 18) {
            return 'adult'; // function stops after "return"
          } else {
            return 'underaged';
          }
        }
        checkAge(20) // 'adult'
      `,
    },
    {
      val: <h5>Call without parenthesis</h5>,
    },
    {
      val: <>Shows string representation of the source code</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function xxx() {
          let a = 1+1;
        }
        console.log(xxx); // xxx() {let a = 1+1;}
      `,
    },
    {
      val: <h5>Copy function</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function sayHi() {   // (1) create
          alert( "Hello" );
        }
    
        let func = sayHi;    // (2) copy
        sayHi === func // true
        func(); // Hello
        sayHi(); // Hello
      `,
    },
    {
      val: <h5>Callback</h5>,
    },
    {
      val: <>It is a function passed to another function as an argument.</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function ask(question, yes, no) {
          if (confirm(question)) yes()
          else no();
        }

        ask(
          "Do you agree?",
          function showOk() { alert("You agreed."); },
          function showCancel() { alert("You canceled the execution."); }
        );

        // if we extract functions from arguments we may just use function names
        ask("Do you agree?", showOk, showCancel); 
      `,
    },
    {
      val: <h5>Recursion</h5>,
    },
    {
      val: <>Recursion is when a function calls itself. JavaScript engine allows 10000 calls maximum.</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function sumToRec(num) {
        if (num == 1) return num
        if (num > 1) return num + sumToRec(num - 1)
      }
      sumToRec(4) // 1 + 2 + 3 + 4 = 10
      `,
    },
    {
      val: <h5>Arguments</h5>,
    },
    {
      val: <>Functions have special array-like object named 'arguments' that contains all arguments by their index.</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function args() {
        return( [arguments.length, arguments[0],arguments[1]] );
      }
      args("Julius", "Caesar") // [2, 'Julius', 'Caesar']
      args("Ilya") // [1, 'Ilya', undefined]
      `,
    },
    {
      val: <h5>Immediately-invoked function expressions</h5>,
    },
    {
      val: <>IIFE requires semicolon before</>,
    },
    {
      val: <>They don’t pollute the global object</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      (function() {
        alert("Parentheses around the function");
      })();
  
      (function() {
        alert("Parentheses around the whole thing");
      }());
  
      !function() {
        alert("Bitwise NOT operator starts the expression");
      }();
  
      +function() {
        alert("Unary plus starts the expression");
      }();
      `,
    },
    {
      val: <h5>Function object</h5>,
    },
    {
      val: <>.name property</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function sayHi() {}
      sayHi.name; // "sayHi"
      `,
    },
    {
      val: <>.length property</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function func(a, b, c, d) {}
      function many(a, b, ...more) {}
      func.length // 4
      many.length // 2 // rest parameters are not counted
      `,
    },
    {
      val: <>Custom properties in function</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function sayHi() {
          return("Hi");
        }
        sayHi.wife = ' Kate' // initial value
        sayHi() + sayHi.wife // 'Hi Kate'
      `,
    },
    {
      val: <h5>Function expression</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: ` 
      let myFunc = function(name) { alert( \`Hello, \${name}\` ); };
      `,
    },
    {
      val: <h5>Named Function Expression</h5>,
    },
    {
      val: <>Allows the function to reference itself internally</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: ` 
      let sayHi = function func(who) {
        if (who) {
          alert(\`Hello, \${who}\`);
        } else {
          func("Guest"); // use func to re-call itself
        }
      };
      sayHi(); // Hello, Guest
      `,
    },
    {
      val: <h5>Function declaration vs expression</h5>,
    },
    {
      val: <>Hoisting, function expression is created when the execution reaches it and is usable only from that moment (not "hoisted")</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      sayHi1("John"); // Hello, John
      function sayHi1(name) { alert( \`Hello, \${name}\` ); }
  
      sayHi2("John"); // error!
      let sayHi2 = function(name) { alert( \`Hello, \${name}\` ); };
      `,
    },
    {
      val: <>Function expressions can have a conditional declaration</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let age = prompt("What is your age?", 18);
      let welcome = (age < 18) ?  function() { alert("Hello!"); } :  function() { alert("Greetings!"); };
      welcome(); // "Greetings!"
      `,
    },
    {
      val: <h5>Arrow function expression</h5>,
    },
    {
      val: <>
        Convenient for simple one-line actions.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // the curly braces are needed for a multiline function
      // if we use curly braces, then we need an explicit "return"
      let sum = (a, b) => {  
        let result = a + b;
        return result; 
      };
  
      // same, but shorter
      let sum = (a, b) => a + b;

      // same, but even shorter
      let sum = function(a, b) {return a + b;};
  
      // with a single argument
      let double = n => n * 2; // no parentheses
  
      // w/o arguments
      let sayHi = () => alert("Hello"); // parentheses are needed
  
      // arrow functions works same way as function expressions, 
      // for ex. we can dynamically create functions
      let age = prompt("What is your age?", 18);
      let welcome = (age < 18) ?
        () => alert('Hello') :
        () => alert("Greetings!");
      welcome();
      `,
    },
    {
      val: <>
        Don’t have own "this" & “arguments”. They are taken from outer lexical environment.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
        showList() {
          this.students.forEach(
            student => alert(this.title + ': ' + student)
          )
        }
      }
      group.showList(); 
      // Our Group: John // Our Group: Pete // Our Group: Alice
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function xxx() {
          (() => console.log(arguments))()
        }
        xxx(1, 2, 3) 
        // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

      `,
    },
    {
      val: <h5>new Function</h5>,
    },
    {
      val: <>Function is created from a string & have access only to global, but not lexical environment</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let sum = new Function('a', 'b', 'c', 'return a + b');
        sum(1, 2, 3); // 6
      `,
    },
    {
      val: <h5>Decorators (call/apply/bind)</h5>,
    },
    {
      val: <>Function that takes another function and alters its behavior, the main job is still carried out by the function</>,
    },
    {
      val: <h5>.call()</h5>,
    },
    {
      val: <>
        Method calls a function with a given "this" and arguments provided individually
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // func.call([thisArg], [arg1, arg2, argN])
      // The call() allows for a function/method belonging to one object to be assigned and called for a different object.
      // With call(), you can write a method once and then inherit it in another object, w/o having to rewrite the method for the new object.
      // thisArg - maybe null or undefined
      
      function say(phrase) { alert(this.name + ' ' + phrase) }
      let user = { name: "John" }
      say.call( user, "hello" ) // John: Hello

      // user becomes "this", and "Hello" becomes the "argument"
      `,
    },
    {
      val: <h5>.apply()</h5>,
    },
    {
      val: <>
        Method calls a function with a given "this" value, and arguments provided as an array
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        //apply(thisArg, [argsArray])

        // difference from call() is a list of arguments taken as an array-like object
        // Instead of func.call(this, ...arguments) we could use func.apply(this, arguments).
        // func.call and func.apply are almost the same
        // thisArg - maybe null or undefined
        
        // func.call(context, ...args);
        // same as
        // func.apply(context, args);

        const numbers = [5, 6, 2, 3, 7]
        console.log(Math.max.apply(null, numbers)) //7
      `,
    },
    {
      val: <h5>.bind()</h5>,
    },
    {
      val: <>
        Method creates a new function with "this" keyword set to the provided value & with a given sequence of arguments
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let user = {
          firstName: "John",
          sayHi() { alert('Hello ' + this.firstName) }
        };
        user.sayHi() // 'Hello, John'
        setTimeout(user.sayHi, 1000); // Hello, undefined
        // setTimeout in-browser is a little special: it sets this=window for the function call

        let sayHi = user.sayHi.bind(user);
        sayHi(); // 'Hello, John'
        setTimeout(sayHi, 1000); // 'Hello, John'

        // bind only arguments
        function mul(a, b) {return a * b}
        let double = mul.bind(null, 2);
        // 2 as the first argument. Further arguments are passed “as is”
        double(3) // = mul(2, 3) = 6
        double(4) // = mul(2, 4) = 8
        double(5) // = mul(2, 5) = 10

        // bound function can not be re-bound
      `,
    },
    {
      val: <h3>Debugger</h3>,
    },
    {
      val: <>Debugger pauses the code</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function hello(name) {
        let phrase = \`Hello, \${name}!\`;
        debugger;  // <-- the debugger stops here
        say(phrase);
      }
      `,
    },
  ],
}
