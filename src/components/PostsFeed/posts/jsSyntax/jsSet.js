import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsSet = {
  title: 'Set in JavaScript',
  date: '2021.12.22',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <>Set is a special type collection, like an array where each value may occur only once.</>,
    },
    {
      val: <h5>Declaration</h5>,
    },
    {
      val: <><CodeSpan>{'new Set([iterable])'}</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
      let set = new Set([1,1,2,2,3,3]);
      set // Set(3) {0:1, 1:2, 2:3}
      `,
    },
    {
      val: <h5>Add</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let set = new Set()
      let john = { name: "John" }
      let pete = { name: "Pete" }
      let mary = { name: "Mary" }
      set.add(john)
      set.add(pete)
      set.add(mary)
      set.add(john)
      set.add(mary)
      set // Set(3) {{…}, {…}, {…}}
      `,
    },
    {
      val: <h5>Get</h5>,
    },
    {
      val: <>It seems there is no native way.</>,
    },
    {
      val: <h5>Size</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      set.size; // 3
      `,
    },
    {
      val: <h5>Delete</h5>,
    },
    {
      val: <>
      <ul>
        <li><CodeSpan>{'set.delete(value)'}</CodeSpan> - returns true if value existed at the moment of the call, otherwise false.</li>
        <li><CodeSpan>{'set.clear()'}</CodeSpan> - removes everything from the set</li>
        <li></li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      set.delete(john); // true
      // but  
      set.delete({ name: "John" }); // false

      set.clear()
      set // Set(0) {size: 0}
      `,
    },
    {
      val: <h5>Has</h5>,
    },
    {
      val: <>
      <ul>
        <li><CodeSpan>{'set.has(value)'}</CodeSpan></li>
        <li>returns true if the value exists in the set, otherwise false</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      set.has(pete); // true
      // but  
      set.has({ name: "Pete" }); // false
      `,
    },
    {
      val: <h5>Iteration</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      set.keys() // returns an iterable object for values, because there are no keys in Set, exists for compatibility with Map.
      set.values() // returns an iterable object for values
      set.entries() // returns an iterable object for entries [value, value], exists for compatibility with Map.

      for (let user of set) {
        alert(user.name); // John (then Pete and Mary)
      }

      set.forEach((value, valueAgain, set) => {
        alert(value.name); // John (then Pete and Mary)
      });
      `,
    },
    {
      val: <h5>Set --> Array </h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let set = new Set([1,1,2,2,3,3])
      set // Set(3) {1, 2, 3}
      arr = Array.from(set)
      arr //  [1, 2, 3]
      `,
    },
    {
      val: <h5>WeakSet</h5>,
    },
    {
      val: <>
      <ul>
        <li>allows to store only objects</li>
        <li>removes them once they become inaccessible</li>
        <li>main advantages are that they have weak reference </li>
        <li>they can easily be removed by garbage collector</li>
        <li>disadvantages are not having support for clear, size, keys, values…</li>
        <li>An object exists in the set while it is reachable from somewhere else</li>
        <li>Like Set, it supports add, has and delete, but not size, keys() and no iterations.</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      xx let weakSet = new WeakSet();

      let john = { name: "John" };
      let pete = { name: "Pete" };
      let mary = { name: "Mary" };
      
      weakSet.add(john);
      weakSet.add(pete);
      weakSet.add(john);
      
      // weakSet has 2 users now
      
      // check if John visited?
      alert(weakSet.has(john)); // true
      alert(weakSet.has(mary)); // false
      
      john = null;
      // weakSet will be cleaned automatically
      `,
    },
  ],
}
