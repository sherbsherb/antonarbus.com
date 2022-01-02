import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsFunctions = {
  title: 'Functions in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H3>Function declaration</H3>,
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
      val: <H3>Parameters</H3>,
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
      val: <H3>Return</H3>,
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
      val: <H3>Call without parenthesis</H3>,
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
      val: <H3>Copy function</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        function sayHi() { alert( "Hello" ); }
        let func = sayHi;
        sayHi === func // true
        func(); // Hello
        sayHi(); // Hello
      `,
    },
    {
      val: <H3>Callback</H3>,
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
      val: <H3>Recursion</H3>,
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
      val: <H3>Arguments</H3>,
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
      val: <H3>Immediately-invoked function expressions</H3>,
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
      val: <H3>Function is object</H3>,
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
      val: <H3>Function expression</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: ` 
      let myFunc = function(name) { alert( \`Hello, \${name}\` ); };
      `,
    },
    {
      val: <H3>Named Function Expression</H3>,
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
      val: <H3>Function declaration vs expression</H3>,
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
      val: <H3>Arrow function expression</H3>,
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
        Don’t have own "this" & “arguments”. They are taken from outer LE.
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
      val: <H3>new Function</H3>,
    },
    {
      val: <>Function is created from a string & have access only to global, but not LE</>,
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
      val: <H3>Decorators (call/apply/bind)</H3>,
    },
    {
      val: <>Function that takes another function and alters its behavior, the main job is still carried out by the function</>,
    },
    {
      val: <H5>.call()</H5>,
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
      val: <H5>.apply()</H5>,
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
      val: <H5>.bind()</H5>,
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
      val: <H3>Lexical Environment</H3>,
    },
    {
      val: <ul>
        <li><b>Execution Context</b> (EC, stack, call stack) is the internal JS engine to track execution of a function or the global code</li>
        <li><i>EC</i> tracks where statement of the corresponding function is being executed</li>
        <li>New <i>EC</i> is created and pushed to the stack when execution of a function begins and deleted when stops</li>
        <li>For every <i>EC</i> a corresponding LE is created</li>
        <li><b>Lexical Environment</b> (LE) is the internal JS engine that holds names of variables/functions & a reference to a parent <i>LE</i></li>
        <li>Running function, block <code>{'{}'}</code>, and the script as a whole have an internal hidden object <code>[[Environment]]</code> with reference to its <i>LE</i></li>
        <li>Every function tracks the <i>LE</i> related to the <i>EC</i>it was created in & its parent <i>LE</i></li>
        <li><code>[[Environment]]</code> stores all local variables & 'this' & other...& a reference to outer <i>LE</i></li>
        <li>With <code>[[Environment]]</code> a function remembers where it was born</li>
        <li>Variable is a property of <code>[[Environment]]</code> object, associated with the executing block/function/script</li>
        <li>Variable change means a change of <code>[[Environment]]</code> property object</li>
        <li>On function start <i>LE</i> is pre-populated with variables, but their state is <code>uninitialized</code></li>
        <li>Engine knows about variables, but cannot be referenced until it has been declared with with <code>let</code>, <code>const</code></li>
        <li>When <code>let</code> definition appears, variable's value is <code>undefined</code></li>
        <li>Variable goes to <i>LE</i>, but get initialized in code execution flow</li>
        <li><i>Function declaration</i> is instantly fully initialized unlike <i>function expressions</i></li>
        <li><i>LE</i> is a specification object & exists “theoretically”, we can’t get this object in our code</li>
        <li>When the code accesses a variable the JS searches it in <i>LE</i> chain up to the global one</li>
        <li><i>LE</i> is removed from memory with all the variables after the function call finishes</li>
        <li>But not in case of nested functions. <span>LE</span> object dies when it becomes unreachable (just like other objects)</li>
      </ul>,
    },
    {
      val: <H3>Closure</H3>,
    },
    {
      val: <ul>
        <li><b>Closure</b> is a function that remembers its outer variables and can access them</li>
        <li>Functions in JavaScript are <i>closures</i></li>
        <li>In some languages, that’s not possible</li>
        <li><i>Closures</i> remember where they were created using a hidden <code>[[Environment]]</code> property</li>
        <li>Their code can access outer variables</li>
        <li>The <code>new Function</code> syntax is not a <i>closure</i></li>
        <li>Function can be returned and then used somewhere else and no matter where, it still has access to the same outer variables</li>
        <li><i>Lexical environment</i> is created on function initialization & it is separate for every function</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function makeCounter() {
        let count = 0
      
        return function() {
          return count++
        }
      }
      
      let counter = makeCounter()
      let counter2 = makeCounter()
      
      counter() // 0
      counter() // 1
      
      counter2() // 0
      counter2() // 1
      `,
    },
    {
      val: <H3>Currying</H3>,
    },
    {
      val: <>
        Currying is a transformation of <CodeSpan>func(a, b, c)</CodeSpan> into <CodeSpan>func(a)(b)(c)</CodeSpan>
      </>,
    },
    {
      val: <H5>Simple example</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function curry(f) { 
        return function(a) {
          return function(b) {
            return f(a, b)
          }
        }
      }
      
      function sum(a, b) {
        return a + b
      }
      
      let curriedSum = curry(sum)
      curriedSum(1)(2) // 3
      `,
    },
    {
      val: <H5>Advanced example</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function curry(func) {
        return function curried(...args) {
          if (args.length >= func.length) return func.apply(this, args)
          // Function.length - number of parameters expected by the function
  
          return function(...args2) {
            return curried.apply(this, args.concat(args2))
          }
        }
      }
      
      function sum(a, b, c) {
        return a + b + c
      }
      
      let curriedSum = curry(sum)
      
      alert( curriedSum(1, 2, 3) ) // 6, still callable normally
      alert( curriedSum(1)(2, 3) ) // 6, currying of 1st arg
      alert( curriedSum(1)(2)(3) ) // 6, full currying
      `,
    },
    {
      val: <>Maybe better to use <Lnk path="https://lodash.com/docs/4.17.15#curry">_.curry</Lnk> function from Lodash.</>,
    },
  ],
}
