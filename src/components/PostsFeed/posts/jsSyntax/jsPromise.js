import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsPromise = {
  title: 'Promise in JavaScript',
  date: '2021.12.29',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h3>Syntax</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const promise = new Promise((resolve, reject) => {
        /* executor code */
        resolve('done')
        reject(new Error('failed'))
      })
      
      promise
        .then(
          result => { console.log(result) },
          error => { console.log(error) }
        )
        .catch(error => { console.log(error) })
        .finally(() => { /* code */ })
      `,
    },
    {
      val: <ul>
        <li><i>Promise</i> object runs an asynchronous operation + stores its resulting value + completion (or failure) state</li>
        <li>When new <i>promise</i> is created, the executor runs</li>
        <li>Its arguments <code>resolve</code> & <code>reject</code> are default callbacks</li>
        <li>When function is executed <CodeSpan>resolve()</CodeSpan> or <CodeSpan>reject()</CodeSpan> callbacks should be called</li>
        <li><CodeSpan>resolve(result)</CodeSpan> if the job is finished successfully</li>
        <li><CodeSpan>reject(error)</CodeSpan> if an error has occurred</li>
        <li><CodeSpan>resolve()</CodeSpan> or <CodeSpan>reject()</CodeSpan> should be call only ones.</li>
        <li>All further calls of <CodeSpan>resolve()</CodeSpan> or <CodeSpan>reject()</CodeSpan> are ignored</li>
        <li><CodeSpan>resolve()</CodeSpan> & <CodeSpan>reject()</CodeSpan> expect only one argument (or none)</li>
        <li>In <CodeSpan>reject()</CodeSpan> recommended to use an <code>Error</code> object</li>
        <li>Resolved or rejected <i>promise</i> is called <i>settled</i>, as opposed to an initially <i>pending</i></li>
        <li>Returned <i>promise</i> object has internal properties:</li>
          <code>state</code>
          <ul>
            <li><CodeSpan>[[PromiseState]] = "pending"</CodeSpan> initial state</li>
            <li><CodeSpan>[[PromiseState]] = "fulfilled"</CodeSpan> when <CodeSpan>resolve()</CodeSpan> is called</li>
            <li><CodeSpan>[[PromiseState]] = "rejected"</CodeSpan> when <CodeSpan>reject()</CodeSpan> is called</li>
          </ul>
        <code>result</code>
        <ul>
          <li><CodeSpan>[[PromiseResult]] = "undefined"</CodeSpan> initial result</li>
          <li><CodeSpan>[[PromiseResult]] = "value"</CodeSpan> when <CodeSpan>resolve()</CodeSpan> called</li>
          <li><CodeSpan>[[PromiseResult]] = "error"</CodeSpan> when <CodeSpan>reject()</CodeSpan> is called</li>
        </ul>
        <li>We can’t directly access <code>state</code> & <code>result</code> properties</li>
        <li>But can access them through methods <CodeSpan>.then()</CodeSpan>, <CodeSpan>.catch()</CodeSpan>, <CodeSpan>.finally()</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // the function is executed automatically when the promise is constructed
      // after 5s job is done with the result "done" or rejected

      // resolve
      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), 5000)
      })

      // reject
      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("Whoops!")), 5000)
      })

      // both in one statement
      let promise = new Promise(function(resolve, reject) {
        resolve("done") 
        reject(new Error("…")) // ignored
        setTimeout(() => resolve("…")) // ignored
      });
      `,
    },
    {
      val: <h3>then, catch, finally</h3>,
    },
    {
      val: <><i>Promise</i> object serves as a link between the executor and the consuming functions</>,
    },
    {
      val: <h5>promise.then()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      promise.then(
        function(result) {}, 
        function(error) {} 
      )
      // 1st fn - handles a successful result, when the promise is resolved, and receives the result
      // 2nd fn - handles an error, when the promise is rejected, and receives the error
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done!"), 1000)
        // or
        setTimeout(() => reject(new Error("Whoops!")), 1000)
      })

      promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
      )
      `,
    },
    {
      val: <>One argument is acceptable</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let promise = new Promise(resolve => {
        setTimeout(() => resolve("done!"), 1000)
      })
      
      promise.then(alert) // shows "done!" after 1 second
      `,
    },
    {
      val: <h5>promise.catch()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // If we’re interested only in errors use null as a 1st arg or use .catch(errorHandlingFunction)
      promise.then(null, errorHandlingFunction)

      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
      })
      
      // .catch(f) is the same as promise.then(null, f)
      promise.catch(alert) // shows "Error: Whoops!" after 1 second
      `,
    },
    {
      val: <h5>promise.finally()</h5>,
    },
    {
      val: <ul>
        <li><CodeSpan>.finally(f)</CodeSpan> is similar to <CodeSpan>.then(f, f)</CodeSpan> </li>
        <li>Always runs when the <i>promise</i> is settled (resolved or rejected)</li>
        <li><i>Finally</i> is a good handler for performing cleanup, e.g. stopping our loading indicators</li>
        <li><i>Finally</i> handler has no arguments</li>
        <li><i>Finally</i> handler passes through results and errors to the next handler</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      new Promise((resolve, reject) => {
        setTimeout(() => resolve("result"), 2000)
      })
        .then(result => alert(result)) // <-- .then handles the result
        .catch(err => alert(err)) // <-- .catch handles the error object, if there is any
        .finally(() => alert("Promise ready"))
      `,
    },
    {
      val: <h3>Example</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function loadScript(src) {
        return new Promise(function(resolve, reject) {
          let script = document.createElement('script')
          script.src = src
          script.onload = () => resolve(script)
          script.onerror = () => reject(new Error(\`Script load error for \${src}\`))
          document.head.append(script)
        })
      }

      // usage
      let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
      promise.then(
        script => alert(\`\${script.src} is loaded!\`),
        error => alert(\`Error: \${error.message}\`)
      )
      promise.then(script => alert('Another handler...'))
      `,
    },
    {
      val: <h3>Promises chaining</h3>,
    },
    {
      val: <ul>
        <li>Result is passed through the chain of <i>then/catch/finally</i> handlers</li>
        <li>Handler returns <i>“thenable”</i> object, that has a method <CodeSpan>.then()</CodeSpan></li>
        <li>Returning promises allows us to build chains of asynchronous actions</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      new Promise( resolve => {
        setTimeout(() => resolve(1), 1000)
      }).then( result => { 
        alert(result) // 1
        return result * 2
      }).then( result => { 
        alert(result) // 2
        return result * 2
      }).then( result => {
        alert(result) // 4
        return result * 2
      }) // 1 // 2 // 4
      `,
    },
    {
      val: <>Same as above, but with 1s delay between alerts</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      new Promise( resolve => {
        setTimeout(() => resolve(1), 1000)
      }).then( result => {
        alert(result) // 1
        return new Promise( resolve => {
          setTimeout(() => resolve(result * 2), 1000) // 2
        })
      }).then( result => {
        alert(result) // 2
        return new Promise( resolve => {
          setTimeout(() => resolve(result * 2), 1000) // 4
        })
      }).then( result => {
        alert(result) // 4
      }) 
      `,
    },
    {
      val: <h3>Make function thenable / chainable</h3>,
    },
    {
      val: <>To make a function thenable, just return a <i>promise</i></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // not thenable
      function func() {
        setTimeout(() => '2 sec passed', 2000)
      }
      func().then(res => console.log(res)) // TypeError: Cannot read properties of undefined (reading 'then')
      
      // thenable
      function funcThenable() {
        return new Promise(resolve => {
          setTimeout(() => resolve('2 sec passed'), 2000)
        })
      }
      funcThenable().then(res => console.log(res)) // 2 sec passed
      `,
    },
    {
      val: <h3>Error handling</h3>,
    },
    {
      val: <ul>
        <li>We may have many <CodeSpan>.then()</CodeSpan> handlers, and use a single <CodeSpan>.catch()</CodeSpan> at the end</li>
        <li>If any of the promises above rejects, then it would catch it</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      fetch('/article/promise-chaining/user.json')
        .then(response => response.json())
        .then(user => fetch(\`https://api.github.com/users/\${user.name}\`))
        .then(response => response.json())
        .catch(error => alert(error.message)) 
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      new Promise((resolve, reject) => {
        reject(new Error("Whoops!"))
      }).catch(err => alert(err)); // Error: Whoops!

      // same as

      new Promise((resolve, reject) => {
        throw new Error("Whoops!")
      }).catch(err => alert(err)); // Error: Whoops!

      // error in then()
      new Promise((resolve, reject) => {
        resolve("ok");
      }).then((result) => {
        throw new Error("Whoops!"); // rejects the promise
      }).catch(err => alert(err)); // Error: Whoops!

      // catch also handles programming errors
      new Promise((resolve, reject) => {
        resolve("ok");
      }).then((result) => {
        blabla(); // no such function
      }).catch(err => alert(err)); // ReferenceError: blabla is not defined

      // all synchronous errors while the executor is running are handled by try...catch
      // catch() can't handle this error
      new Promise(function(resolve, reject) {
        setTimeout(() => {
          throw new Error("Whoops!");
        }, 1000);
      }).catch(err => alert(err));

      // Unhandled rejections
      new Promise(function() {
        throw new Error("Whoops!");
      }); // no catch to handle the error
      
      // The JS engine tracks such rejections and generates a global error
      window.addEventListener('unhandledrejection', function(event) {
        console.log(event.promise); // [object Promise] - the promise that generated the error
        console.log(event.reason); // Error: Whoops! - the unhandled error object
      })
      `,
    },
    {
      val: <h3>Promise.all()</h3>,
    },
    {
      val: <ul>
        <li>Takes an array of <i>promises</i></li>
        <li>Waits for all promises to resolve and returns an array of their results</li>
        <li>If any of the given promises rejects, it throws an error & other results are ignored </li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let p1 = new Promise(resolve => setTimeout(() => resolve(1), 3000))
      let p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
      let p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000))
      Promise.all([p1, p2, p3]).then(values => console.log(values)) // [1, 2, 3]
      // same, but with destructuring
      Promise.all([p1, p2, p3]).then(([val1, val2, val3]) => console.log('results: ', val1, val2, val3)) 
      `,
    },
    {
      val: <h5>Rejection</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).catch(alert) // Error: Whoops!
      `,
    },
    {
      val: <h5>Mix <i>promises</i> with regular values</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let promiseObj = new Promise(resolve => setTimeout(() => resolve(1), 1000))
        Promise.all([promiseObj, 2, 3]).
        then((res) => console.log(res)) // 1, 2, 3
      `,
    },
    {
      val: <h5>Promise.all & fetch</h5>,
    },
    {
      val: <ul>
        <li>Fetch returns a <i>promise</i></li>
        <li>We can put them in array with <CodeSpan>.map()</CodeSpan></li>
      </ul>,
    },
    {
      val: <>
        Simple example without reading content
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://api.github.com/users/jeresig'
      ]

      let requests = urls.map(url => fetch(url))
      Promise.all(requests)
        .then(responses => responses.forEach(
          response => console.log(\`\${response.url}: \${response.status}\`)
        ))
      `,
    },
    {
      val: <>
        With reading content
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let names = ['iliakan', 'remy', 'jeresig'];
          let requests = names.map(name => fetch(\`https://api.github.com/users/\${name}\`));
          Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json()))) 
            .then(users => users.forEach(user => console.log(user.name)))
      `,
    },
    {
      val: <h3>Promise.allSettled()</h3>,
    },
    {
      val: <>Waits for all promises to settle, regardless of the result</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://no-such-url'
      ]
      
      Promise.allSettled(urls.map(url => fetch(url)))
        .then(results => { 
          results.forEach((result, num) => {
            if (result.status == "fulfilled") console.log(\`\${urls[num]}: \${result.value.status}\`)
            if (result.status == "rejected") console.log(\`\${urls[num]}: \${result.reason}\`)
          })
        })

      //  https://api.github.com/users/iliakan: 200
      //  https://api.github.com/users/remy: 200
      //  https://no-such-url: TypeError: Failed to fetch
      `,
    },
    {
      val: <h3>Promise.race()</h3>,
    },
    {
      val: <>Waits only for the first settled promise and gets its result</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).then(alert) // 1

      // 1st promise was fastest, it became the result 
      // 1st settled promise “wins the race”, all further results/errors are ignored
      `,
    },
    {
      val: <h3>Promise.any()</h3>,
    },
    {
      val: <ul>
      <li>Waits only for the first <i>fulfilled</i> <i>promise</i> and gets its result</li>
      <li>If all <i>promises</i> are <i>rejected</i>, then the returned <i>promise</i> is <i>rejected</i> with <i>AggregateError</i></li>
      <li>Special error object that stores all <i>promise</i> errors in its errors property</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // first promise here was fastest, but it was rejected, so the second promise became the result
      Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).then(alert); // 1

      // example when all promises fail
      Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
      ]).catch(error => {
        console.log(error.constructor.name); // AggregateError
        console.log(error.errors[0]); // Error: Ouch!
        console.log(error.errors[1]); // Error: Error
      });
      `,
    },
    {
      val: <h3>Promise.resolve() & Promise.reject()</h3>,
    },
    {
      val: <ul>
        <li>Creates a <i>resolved</i> or <i>rejected</i> promise with the result value or error</li>
        <li>The method is used for compatibility, when a function is expected to return a <i>promise</i></li>
        <li>Rarely needed in modern code, because of <i>async/await</i> syntax</li>
        <li>Same as <CodeSpan>{'let promise = new Promise(resolve => resolve(value))'}</CodeSpan></li>
        <li>Same as <CodeSpan>{'let promise = new Promise((null, reject) => reject(error))'}</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const status = res => {
        if (res.status >= 200 && res.status < 300) return Promise.resolve(res)
        return Promise.reject(new Error(res.statusText))
      }
      
      const json = res => res.json()
      
      fetch('/todos.json')
        .then(status)    // note that the 'status' function is actually **called** here, and that it **returns a promise***
        .then(json)      // likewise, the only difference here is that the 'json' function here returns a promise that resolves with 'data'
        .then(data => {  // ... which is why 'data' shows up here as the first parameter to the anonymous function
          console.log('Request succeeded with JSON response', data)
        })
        .catch(err => {
          console.log('Request failed', err)
        })
      `,
    },
    {
      val: <h3>Task queue</h3>,
    },
    {
      val: <ul>
        <li>When a <i>promise</i> is ready, its <i>.then/catch/finally</i> handlers are put into the 'microtasks' queue</li>
        <li>When the JS engine becomes free from the current code, it takes a task from the queue and executes it</li>
        <li>To guarantee that code is executed after <i>.then/catch/finally</i>, add it into a chained <i>.then</i> call</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function funcA() {
        console.log(1)
        setTimeout(() => { console.log(2) })
        console.log(3)
        Promise.resolve()
          .then(res => console.log(4))
          .then(res => console.log(5))
        console.log(6)
      }
      function funcB() {
        console.log(7)
      }
      
      funcA()
      funcB()
      // 1 3 6 4 5 2
      `,
    },
    {
      val: <h3>Common errors</h3>,
    },
    {
      val: <ul>
        <li><i>TypeError: undefined is not a promise</i> - make sure you use new Promise() instead of just Promise()</li>
        <li><i>UnhandledPromiseRejectionWarning</i> - promise you called rejected, but there was no catch used to handle the error</li>
      </ul>,
    },
    {
      val: <h3>async/await</h3>,
    },
    {
      val: <ul>
        <li>It is a special syntax to work with promises without chaining</li>
        <li>Just another way of getting the promise result than <CodeSpan>.then()</CodeSpan></li>
        <li><CodeSpan>async</CodeSpan> makes function return a promise</li>
        <li>Values are wrapped in a resolved promise automatically</li>
        <li><CodeSpan>await</CodeSpan> makes JS wait until a promise settles and returns its result</li>
        <li><CodeSpan>await</CodeSpan> works only inside <CodeSpan>async</CodeSpan></li>
        <li>Can’t use <CodeSpan>await</CodeSpan> in regular functions</li>
        <li>Top-level <CodeSpan>await</CodeSpan> works outside <CodeSpan>async</CodeSpan> functions in modules, in Chrome DevTools & Node.js & Safari Web Inspector</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      async function f() { return 1 }
      f().then(alert) // 1
      `,
    },
    {
      val: <h5><CodeSpan>await</CodeSpan> for <i>promise</i></h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // example 1
      let promise = new Promise(resolve => setTimeout(() => resolve("done!"), 1000))
      promise // Promise {<fulfilled>: 'done!'} // not the result itself
      let result = await promise // wait until the promise resolves
      alert(result) // "done!"

      // example 2
      async function hi() { return 'hi' }
      hi() // Promise {<fulfilled>: 'hi'}
      // but
      const res = await hi()
      alert(res) // 'hi'

      // example 3
      let response = await fetch('https://api.github.com/users/iliakan')
      let user = await response.json()
      await new Promise((resolve, reject) => setTimeout(resolve, 3000));
      console.log(user)

      // example 4
      await new Promise(resolve => setTimeout(resolve, 1000))
      return 10
      `,
    },
    {
      val: <h5><CodeSpan>await</CodeSpan> accepts <i>“thenables”</i></h5>,
    },
    {
      val: <ul>
      <li><CodeSpan>await</CodeSpan> allows to use thenable objects (with a callable then method)</li>
      <li>The idea is that a third-party object may not be a promise, but promise-compatible</li>
      <li>if an object supports .then, that’s enough to use it with <CodeSpan>await</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Thenable {
        constructor(num) { this.num = num }
        then(resolve, reject) {
          setTimeout(() => resolve(this.num * 2), 1000) // resolve with this.num*2 after 1000ms
        }
      }
      let result = await new Thenable(1) // waits for 1 second, then result becomes 2
      alert(result) // 2
      `,
    },
    {
      val: <h5><CodeSpan>async</CodeSpan> class methods</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // To declare an async class method, just prepend it with async
      class Waiter {
        async wait() {
          return await Promise.resolve(1)
        }
      }
      
      new Waiter()
        .wait()
        .then(alert); // 1 (this is the same as (result => alert(result)))
      `,
    },
    {
      val: <h5>Error handling</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      try {
        let response = await fetch('http://no-such-url')
        let user = await response.json()
      } catch(err) {
        alert(err) // TypeError: failed to fetch
      }

      // or

      async function f() {
        let response = await fetch('http://no-such-url');
      }
      f().catch(alert); // TypeError: failed to fetch

      // or 

      // if we do not have catch we may handle unhandled errors with 
      window.addEventListener('unhandledrejection', function(event) {
        alert(event.promise)
        alert(event.reason)
      })
      `,
    },
    {
      val: <h5>async/await + Promise.all</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let p1 = new Promise(res => setTimeout(() => res(1), 3000))
      let p2 = new Promise(res => setTimeout(() => res(2), 2000))
      let p3 = new Promise(res => setTimeout(() => res(3), 1000))
      Promise.all([p1, p2, p3]).then(values => console.log(values)) // [1, 2, 3]
      // same as
      let res = await Promise.all([p1, p2, p3])
      console.log(res)

      `,
    },
  ],
}
