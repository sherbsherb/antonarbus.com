import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsArrays = {
  title: 'Arrays in JavaScript',
  date: '2021.12.22',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h5>Declaration</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let fruits = new Array("Apple", "Pear", "etc")

      // mix of values + training comma are allowed
      let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello') }, ]
      `,
    },
    {
      val: <h5>Access</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      fruits[0] // Apple
      arr[1].name // John
      arr[3]() // hello
      `,
    },
    {
      val: <h5>Add</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      fruits[2] = 'Pear' // now ["Apple", "Orange", "Pear"]
      fruits[3] = 'Lemon' // now ["Apple", "Orange", "Pear", "Lemon"]
      `,
    },
    {
      val: <h5>Delete</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ["I", "study", "JavaScript", "right", "now"]
      delete arr[1]; 
      arr // ["I", empty, "JavaScript", "right", "now"]

      arr.length = 3 // truncate
      arr // ["I", empty, "JavaScript"]
      arr.length = 0 
      arr // []
      `,
    },
    {
      val: <h5>Arrays is reference type</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let fruits = ["Banana"]
      let arr = fruits // copy by reference (two variables reference the same array)
      arr.push("Pear") // modify the array by reference
      fruits // Banana, Pear - 2 items now
      `,
    },
    {
      val: <h5>Arrays is an ordered collection</h5>,
    },
    {
      val: <>
      Arrays is an ordered collection & we can destroy array speed if:
      <ul>
      <li>Add a non-numeric property like <code>arr.test = 5</code></li>
      <li>Make holes like <code>arr[0]</code>, <code>arr[1000]</code> & nothing between</li>
      <li>Fill an array in the reverse order, like <code>arr[1000]</code>, <code>arr[999]</code> and so on.</li>
      </ul>
      </>,
    },
    {
      val: <h5>Keys, values, entries</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ['a', 'b', 'c']

      // object methods
      Object.keys(arr) // ['0', '1', '2']
      Object.values(arr)  // ['a', 'b', 'c']
      Object.entries(arr) // [["0",1],["1",2],["2",3]]

      // array iterator methods
      const iterator = arr.values(); // returns a new Array Iterator object that contains the values for each index in the array
      for (const value of iterator) console.log(value); // a // b // c

      const iterator = arr.keys(); // returns a new Array Iterator object that contains the keys for each index in the array.
      for (const key of iterator) console.log(key);  // 0 // 1 // 2

      const iterator = arr.entries();
      for (const entry of iterator) console.log(entry); // [0, "a"] // [1, "b"] // [2, "c"]

      `,
    },
    {
      val: <h5>Length</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = [1, 2, 3, 4, 5]
      arr.length // 5 // greatest numeric index plus one

      arr[123] = "Apple"
      arr // [1, 2, 3, 4, 5, empty × 118, "Apple"]
      arr.length // 124

      arr.length = 2 // truncate to 2 elements
      arr // [1, 2]

      arr.length = 124 // return length back
      arr // [1, 2, empty × 122]

      arr[3] // undefined

      arr.length = 0 // simplest way to clear the array
      arr // []
      `,
    },
    {
      val: <h5>Multidimensional arrays</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      matrix[1][1] // 5
      `,
    },
    {
      val: <h5>Loops</h5>,
    },
    {
      val: <b>For</b>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      for (let i = 0; i < arr.length; i++) {
        alert(arr[i]);
      }
      `,
    },
    {
      val: <b>for..of</b>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      for (let fruit of arr) {
        alert(fruit); // no access to index, only to a value
      }
      `,
    },
    {
      val: <><b>for..in</b> (DO NOT USE!!!)</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // came from object, 100 times slower 
      for (let key in arr) {
        alert(arr[key]); 
      }
      `,
    },
    {
      val: <b>forEach</b>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        arr.forEach(function(item, index, array) {
          alert(\`\${item} is at index \${index} in \${array}\`);
        });
      `,
    },
    {
      val: <h5>Array.isArray()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      typeof {} // object
      typeof [] // object
      Array.isArray({}) // false
      Array.isArray([]) // true
      `,
    },
    {
      val: <h5>Array.from()</h5>,
    },
    {
      val: <>Returns a new shallow-copied array instance from iterable object</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arrayLike = {  0: "Hello",  1: "World",  length: 2};
      let arr = Array.from(arrayLike); // ["Hello", "World"]
  
      let arrLike = $('textarea'); // S.fn.init(4) [#word-textarea, #tranalstion-textarea, #example-textarea, #category-textarea, prevObject: S.fn.init(1)]
      let arr = Array.from(arrayLike); // [#word-textarea, #tranalstion-textarea, #example-textarea, #category-textarea]
      `,
    },
    {
      val: <h5>push()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ["Apple", "Orange", "Pear"]
      arr.push("Lemon") // 4 // arr = ["Apple", "Orange", "Pear", "Lemon"]
      arr.push("Orange", "Peach")  // 6 
      arr // ["Apple", "Orange", "Pear", "Lemon", "Orange", "Peach"]
      `,
    },
    {
      val: <h5>pop()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ["Apple", "Orange", "Pear"]
      arr.pop() // "Pear" 
      arr // ["Apple", "Orange"]
      `,
    },
    {
      val: <h5>unshift()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // SLOW!
      let arr = ["Apple", "Orange", "Pear"]
      arr.unshift("Lemon") // 4 
      arr // ["Lemon", "Apple", "Orange", "Pear"]
      arr.unshift("Orange", "Peach") // 6 
      arr // ["Orange", "Peach", "Lemon", "Apple", "Orange", "Pear"]
      `,
    },
    {
      val: <h5>shift() </h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // SLOW!
      let arr = ["Apple", "Orange", "Pear"]
      arr.shift() // "Apple" 
      arr // ["Orange", "Pear"]
      `,
    },
    {
      val: <h5>String()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // returns a comma-separated list of elements
      let arr = ["Apple", "Orange", "Pear"];
      String(arr); // "Apple,Orange,Pear"
      `,
    },
    {
      val: <h5>toString()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const arr = [1, 2, 'a', '1a']
      arr.toString() // "1,2,a,1a"
      arr // [1, 2, 'a', '1a']
      `,
    },
    {
      val: <h5>toLocaleString()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const  arr = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
      arr.toLocaleString('en', { timeZone: 'UTC' }); // "1,a,12/21/1997, 2:12:00 PM"
      `,
    },
    {
      val: <h5>splice()</h5>,
    },
    {
      val: <CodeSpan>{'arr.splice(startIndex, [deleteCount], [elemToInsert1], [elemToInsert2])'}</CodeSpan>,
    },
    {
      val: <>
      <ul>
        <li>Remove an item by index position</li>
        <li>modifies arr starting from the startIndex</li>
        <li>removes deleteCount number of elements</li>
        <li>inserts elem1, ..., elemN at their place</li>
        <li>Returns the array of removed elements</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // remove el
      let arr = ["I", "study", "JavaScript"]
      arr.splice(1, 1) // ["study"] // Starting from the index 1 remove 1 el
      arr // ["I", "JavaScript"]

      // remove & replace els
      let arr = ["I", "study", "JavaScript", "right", "now"]
      arr.splice(0, 3, "Let's", "dance") // ) ["I", "study", "JavaScript"]
      arr // ["Let's", "dance", "right", "now"]

      // insert the elements w/o any removals
      let arr = ["I", "study", "JavaScript"]
      arr.splice(2, 0, "complex", "language") // []
      arr // ["I", "study", "complex", "language", "JavaScript"]

      // Negative indexes are allowed
      // index -1 (one step from the end)
      let arr = [1, 2, 5]
      arr.splice(-1, 0, 3, 4) // []
      arr // [1, 2, 3, 4, 5]
      `,
    },
    {
      val: <h5>slice()</h5>,
    },
    {
      val: <CodeSpan>{'arr.slice([beginIndex], [endIndex])'}</CodeSpan>,
    },
    {
      val: <>
      <ul>
        <li>returns new array copying all items from beginIndex to endIndex (not including end)</li>
        <li>start & end can be negative, in that case position from end is assumed</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ["t", "e", "s", "t"];
      arr.slice(1, 3); // ["e", "s"] (copy from 1 to 3) 
      arr // ["t", "e", "s", "t"]

      arr.slice(-2); // ["s", "t"] (copy from -2 to the end) 
      arr // ["t", "e", "s", "t"]

      let newArr = arr.slice(); // ["t", "e", "s", "t"] // created a copy
      arr // ["t", "e", "s", "t"]
      `,
    },
    {
      val: <h5>concat()</h5>,
    },
    {
      val: <CodeSpan>{'arr.concat(arg1, arg2)'}</CodeSpan>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const arr = [1, 2]
      const newArr = arr.concat([3, 4]) // [1, 2, 3, 4] 
      arr // [1, 2]

      arr.concat([3, 4], [5, 6]) // [1,2,3,4,5,6] 
      arr.concat([3, 4], 5, 6) // [1,2,3,4,5,6] // arr = [1, 2]
      `,
    },
    {
      val: <>Make iterable concatable</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let arr = [1, 2]
        let arrayLike = {
          0: "something",
          length: 1,
        }
        arr.concat(arrayLike) // [1,2,[object]]

        let arr = [1, 2];
        let arrayLike = {
          0: "something",
          1: "else",
          [Symbol.isConcatSpreadable]: true,
          length: 2,
        };
        arr.concat(arrayLike) //[1, 2, "something", "else"]
      `,
    },
    {
      val: <h5>indexOf(), lastIndexOf()</h5>,
    },
    {
      val: <CodeSpan>{'arr.indexOf(item, [fromIndex])'}</CodeSpan>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // looks for item starting from index from, and returns the index where it was found, otherwise -1.
      // same methods as for strings

      let arr = [1, 0, false, 1];

      arr.indexOf(0) // 1
      arr.indexOf(false) // 2
      arr.indexOf(null) // -1

      // same, but looks for from right to left
      arr.lastIndexOf(1) // 3
      `,
    },
    {
      val: <h5>includes()</h5>,
    },
    {
      val: <CodeSpan>{'arr.includes(item, [fromIndex])'}</CodeSpan>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      //  looks for item starting from fromIndex, returns true if found
      arr.includes(1) // true

      // indexOf() vs includes()
      [NaN].indexOf(NaN) // -1 (should be 0, but === equality doesn't work for NaN)
      [NaN].includes(NaN) // true
      `,
    },
    {
      val: <><h5>reverse()</h5> - mutates!</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // returns reversed modified array
      let arr = [1, 2, 3, 4, 5]
      arr.reverse() // [5, 4, 3, 2, 1]
      arr // [5,4,3,2,1]
      `,
    },
    {
      val: <h5>split()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
      arr; // [Bilbo, Gandalf]
      "test".split('') // ["t", "e", "s", "t"]
      `,
    },
    {
      val: <h5>join()</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
      let str = arr.join(';'); // glue the array into a string using ;
      str; // Bilbo;Gandalf;Nazgul
      `,
    },
    {
      val: <><h5>fill()</h5> - mutates!</>,
    },
    {
      val: <CodeSpan>{'arr.fill(value, [startIndex], [endIndex])'}</CodeSpan>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = [1, 2, 3, 4];
      arr.fill(0, 2, 4); // [1, 2, 0, 0] // fill with 0 from position 2 until position 4
      arr // [1, 2, 0, 0]

      arr.fill(5, 1); // [1, 5, 5, 5] // fill with 5 from position 1
      arr.fill(6); // [6, 6, 6, 6] // fill all with 6
      `,
    },
    {
      val: <h5>copyWithin()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.copyWithin(targetIndex, [startIndex], [endIndex])'}</CodeSpan></li>
          <li>copies part of an array to another location in the same array and returns it w/o modifying its length</li>
          <li>targetIndex - index where to copy. If negative - counted from the end</li>
          <li>startIndex - index start copying elements from. If negative - counted from the end. Default - 0</li>
          <li>endIndex - index end copying elements from. copyWithin() copies up to but not including end. If negative - counted from the end. Default = arr.length</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ['a', 'b', 'c', 'd', 'e'];
      arr.copyWithin(0, 3, 4); // ["d", "b", "c", "d", "e"] // copy to index 0 the element at index 3
      arr // ["d", "b", "c", "d", "e"] 

      arr.copyWithin(1, 3); // ["d", "d", "e", "d", "e"] // copy to index 1 els from index 3 to the end
      `,
    },
    {
      val: <h5>flat()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.flat([depth])'}</CodeSpan></li>
          <li>returns a new array with concatenated sub-array elements with specified depth.</li>
          <li>depth - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = [0, 1, 2, [3, 4]]
      arr.flat() // [0, 1, 2, 3, 4]
      arr // [0, 1, 2, [3, 4]] // not mutated

      let arr = [0, 1, 2, [[[3, 4]]]]
      arr.flat(2) // [0, 1, 2, [3, 4]]
      arr.flat() // [0, 1, 2, [[3, 4]]]

      [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      `,
    },
    {
      val: <h5>map()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'let result = arr.map(function(item, [index], [array]) {...}, [thisArg]);'}</CodeSpan></li>
          <li>method calls the function for each element of the array</li>
          <li>returns an array of function returns</li>
          <li>It is identical to a map() followed by a flat() of depth 1</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = ["Bilbo", "Gandalf", "Nazgul"]
      arr.map(item => item.length) // [5, 7, 6]
      arr // ["Bilbo", "Gandalf", "Nazgul"]
      `,
    },
    {
      val: <h5>flatMap()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.flatMap(function callbackFn(currentValue, [index], [array]) {...}, [thisArg]) '}</CodeSpan></li>
          <li>method returns a new array formed by applying a given callback function to each element of the array</li>
          <li>Result is flattened by one level</li>
          <li>It is identical to a map() followed by a flat() of depth 1</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      var arr = [1, 2, 3, 4];
      arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8]
      arr // [1, 2, 3, 4]
      `,
    },
    {
      val: <><h5>sort()</h5> - mutates!</>,
    },
    {
      val: <>
        <ul>
          <li>returns sorted modified array</li>
          <li><CodeSpan>{'sort(function compareFn(firstEl, secondEl) {...})'}</CodeSpan></li>
          <li>comparison function is required to return a positive number to say “greater” and a negative number to say “less”.</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let arr = [ 1, 2, 15 ]
      arr.sort() // [1, 15, 2] // items are sorted as strings by default
      arr // 1, 15, 2

      function compareFn(firstEl, secondEl) {
        if (firstEl > secondEl) return 1; // if the first value is greater than the second
        if (firstEl == secondEl) return 0; // if values are equal
        if (firstEl < secondEl) return -1; // if the first value is less than the second
      }
      arr.sort(compareFn);
      arr // 1, 2, 15

      // shorter function
      let arr = [ 1, 2, 15 ]
      arr.sort(function(a, b) { return a - b })
      arr  // 1, 2, 15

      // or even shorter with an arrow fn
      [ 1, 2, 15 ].sort( (a, b) => a - b ); // [1, 2, 15]
      ['Österreich', 'Andorra', 'Vietnam'].sort(); // ["Andorra", "Vietnam", "Österreich"]
      ['Österreich', 'Andorra', 'Vietnam'].sort( (a, b) => a.localeCompare(b) ); // ["Andorra", "Österreich", "Vietnam"]
      `,
    },
    {
      val: <h5>filter()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.filter(function(element, [index], [array]) {...}, [thisArg]) '}</CodeSpan></li>
          <li>returns a new array of all matching elements</li>
          <li>if 'true' item is pushed to results and the iteration continues</li>
          <li>returns empty array if nothing found</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // returns array of the first two users
      const users = [{id: 1, name: "John"},{id: 2, name: "Pete"}, {id: 3, name: "Felix"}]
      let someUsers = users.filter(item => item.id < 3); 
      someUsers // [{id: 1, name: "John"},{id: 2, name: "Pete"}]
      `,
    },
    {
      val: <h5>some()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.some(function(element, [index], [array]) {...}, [thisArg]) '}</CodeSpan></li>
          <li>method tests if one element in the array passes the test function</li>
          <li>returns true if it finds an el for which the function returns true, otherwise it returns false</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const array = [1, 2, 3, 4, 5]
      const even = (el) => el % 2 === 0 // checks whether an element is even
      array.some(even) // true
      `,
    },
    {
      val: <h5>every()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.every(function(element, [index], [array]) {...}, [thisArg]) '}</CodeSpan></li>
          <li>method tests whether all elements in the array pass the test function.</li>
          <li>returns true or false</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const isBelowThreshold = (el) => el < 40;
      const arr = [1, 30, 39, 29, 10, 13];
      arr.every(isBelowThreshold); // true
      `,
    },
    {
      val: <h5>find()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'let result = arr.find(function(item, index, array) {}, thisArg)'}</CodeSpan></li>
          <li>returns index of the first element in the array that passes the test. Otherwise, -1.</li>
          <li>if fn returns TRUE, item is returned and iteration is stopped</li>
          <li>for falsy scenario returns undefined</li>
          <li>index, array, thisArg: optional arguments</li>
          <li>The find method looks for a single (first) element that makes the function return true.</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
      ];

      let user = users.find(item => item.id == 1); // user = {id: 1, name: "John"}
      user.name; // John
      // item argument is used, other arguments of this function are rarely used
      `,
    },
    {
      val: <h5>findIndex()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'arr.findIndex(function(item, index, array) {...}, thisArg);'}</CodeSpan></li>
          <li>returns index of the first element in the array that passes the test. Otherwise, -1.</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let index = users.findIndex(item => item.id == 3); // index = 2
      `,
    },
    {
      val: <h5>reduce()</h5>,
    },
    {
      val: <>
        <ul>
          <li><CodeSpan>{'let value = arr.reduce(function(previousValue, currentValue, [currentIndex], [array]) {...}, [initial]);'}</CodeSpan></li>
          <li><code>previousValue</code> – result of the previous function call, equals initial the first time (if initial is provided)</li>
          <li><code>currentValue</code> – is the current array item</li>
          <li><code>[currentIndex]</code> – is its position</li>
          <li><code>[array]</code> – is the array</li>
          <li><code>[initial]</code> - A value to use as the first argument</li>
          <li>the result of the previous function call is passed to the next one as the first argument</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      

      [1, 2, 3, 4, 5].reduce((sum, item) => sum + item) // 15
      [1, 2, 3, 4, 5].reduce((sum, item) => sum + item, 0) // 15
      [1, 2, 3, 4, 5].reduce((sum, item) => sum + item, 10) // 25

      arr.reduceRight() // does the same, but goes from right to left
      `,
    },
  ],
}
