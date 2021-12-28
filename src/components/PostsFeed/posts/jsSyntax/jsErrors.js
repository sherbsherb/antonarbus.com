import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsErrors = {
  title: 'Error handling in JavaScript',
  date: '2021.12.29',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h3>try…catch…finally</h3>,
    },
    {
      val: <ul>
        <li>code to be put into <code>try</code> block</li>
        <li>if no errors, then <code>catch</code> block is ignored</li>
        <li>if an error the script is not killed</li>
        <li><code>try...catch</code> works synchronously, no delayed functions will be executed</li>
        <li>if an error occurs, then execution in <code>try</code> block is stopped</li>
        <li><code>try...catch</code> can only handle errors that occur in valid code</li>
        <li><code>catch</code> block has default <code>error</code> variable which contains an error object</li>
        <li><code>finally</code> block always executes</li>
        <li><code>finally</code> can be omitted</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      try {
        alert('Start of try runs')
        lalala // error, variable is not defined!
        alert('End of try (never reached)')
      } catch(err) {
        alert(\`Error has occurred!\`)
        console.dir(err)
      } finally {
        alert('bugs happens, do not get upset')
      }
      `,
    },
    {
      val: <h3>Scheduled function</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      setTimeout(function() {
        try {
          noSuchVariable // try...catch handles the error!
        } catch (err) {
          alert( "error is caught here!" )
        }
      }, 1000)
      `,
    },
    {
      val: <h3>Error object</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      try {
        lalala; // error, variable is not defined!
      } catch (err) {
        alert(err.name); // ReferenceError
        alert(err.message); // lalala is not defined
        alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
      
        // Can also show an error as a whole
        // The error is converted to string as "name: message"
        alert(err); // ReferenceError: lalala is not defined 
      } 
      `,
    },
    {
      val: <h3>Different ways to create error object</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let error = new Error(message)
      let error = new SyntaxError(message)
      let error = new ReferenceError(message)
      let error = new TypeError(message)
      `,
    },
    {
      val: <>Or even extend built-in class (overkill!!!)</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class ValidationError extends Error {
        constructor(message) {
          super(message)
          this.name = "ValidationError"
        }
      }
      
      // Usage
      function readUser(json) {
        let user = JSON.parse(json)
        if (!user.age) throw new ValidationError("No field: age")
        if (!user.name) throw new ValidationError("No field: name")
        return user
      }
      
      // Working example with try..catch
      
      try {
        let user = readUser('{ "age": 25 }')
      } catch (err) {
        if (err instanceof ValidationError) {
          alert("Invalid data: " + err.message) // Invalid data: No field: name
        } else if (err instanceof SyntaxError) { // (*)
          alert("JSON Syntax Error: " + err.message)
        } else {
          throw err // unknown error, rethrow it (**)
        }
      }
      `,
    },
    {
      val: <h3>Throw own error</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let error = new Error("Things happen o_O")
      error.name // Error
      error.message // Things happen o_O

      let json = '{ "age": 30 }' // incomplete data
      try {
        let user = JSON.parse(json) // <-- no errors
        if (!user.name) {
          // generate error object
          throw new SyntaxError("no name!")
        }
        // never come here
        alert(user.name)
      } catch (err) {
        console.dir(err) // JSON Error: Incomplete data: no name
      `,
    },
    {
      val: <h3>Re-throw error</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function readData() {
        let json = '{ "age": 30 }';
        try {
          blabla(); // error!
        } 
        catch (err) {
          if (!(err instanceof SyntaxError)) {
            throw err; // rethrow (don't know how to deal with it)
          }
        }
      }
      
      try {
        readData();
      } catch (err) {
        alert( "External catch got: " + err ); // caught it!
      }
      `,
    },
    {
      val: <h3><code>Finally</code> always executes</h3>,
    },
    {
      val: <ul>
        <li>even if we use <code>return</code> in <code>try</code> block</li>
        <li>can use it if don’t want to handle errors, but want to finalize process</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function func() {
        try {
          console.log('try')
          return 
        } 
        catch (err) {
        } 
        finally {
          console.log('finally' )
        }
      }

      func() // try // finally
      `,
    },
    {
      val: <h3>Global catch error listener</h3>,
    },
    {
      val: <ul>
        <li>In case of fatal error outside <code>try...catch</code></li>
        <li>ErrorEvent contains all the information about the event and the error.</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      window.addEventListener('error', function(event) { 
        alert(event.message) // human-readable error message describing the problem.
        console.log(event.filename) // name of the script file in which the error occurred.
        console.log(event.lineno ) //  line number of the script file on which the error occurred.
        console.log(event.colno) // column number of the script file on which the error occurred.
        console.log(event.error) // Is a JavaScript Object that is concerned by the event.
      })
      `,
    },
    
 


    {
      type: 'code',
      lang: 'js',
      val: `
      xxx
      `,
    },
    {
      val: <h5>xxx</h5>,
    },
  ],
}
