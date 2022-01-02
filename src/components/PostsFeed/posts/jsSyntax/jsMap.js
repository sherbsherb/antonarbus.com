import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsMap = {
  title: 'Map in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <>Map is is a special type collection, like an object with keys of any data type.</>,
    },
    {
      val: <H5>Object vs Map</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let john = { name: "John" };
      let obj = {};
      obj[john] = 123;
      obj // {[object Object]: 123}

      let map = new Map(); 
      map.set(john, 123); 
      map // [key: {name: "John"}, value: 123]
      `,
    },
    {
      val: <H5>Declaration</H5>,
    },
    {
      val: <><CodeSpan>{'new Map([iterable])'}</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let map = new Map() // creates the map
      // or
      let map = new Map([
        ['1',  'str1'],
        [1,    'num1'],
        [true, 'bool1']
      ]);
      `,
    },
    {
      val: <H5>Add</H5>,
    },
    {
      val: <><CodeSpan>{'map.set(key, value)'}</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      map.set('1', 'str1') // a string key
      map.set(1, 'num1') // a numeric key
      map.set(true, 'bool1') // a boolean key
      `,
    },
    {
      val: <H5>Get</H5>,
    },
    {
      val: <>
      <ul>
        <li><CodeSpan>{'map.get(key)'}</CodeSpan></li>
        <li>returns the value by the key</li>
        <li><code>undefined</code> if key doesn’t exist in map</li>
        <li><CodeSpan>{'map[key]'}</CodeSpan> -  works, but isn’t the right way</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      map.get('1'); // 'str1'
      map.get(1); // 'num1'
      `,
    },
    {
      val: <H5>Size</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      map.size; // 3
      `,
    },
    {
      val: <H5>Delete</H5>,
    },
    {
      val: <>
      <ul>
        <li><CodeSpan>{'map.delete(key)'}</CodeSpan> - removes the value by the key</li>
        <li><CodeSpan>{'map.clear() '}</CodeSpan> - removes everything from the map</li>
      </ul>
      </>,
    },
    {
      val: <H5>Has</H5>,
    },
    {
      val: <>
      <ul>
        <li><CodeSpan>{'map.has(key)'}</CodeSpan> - returns true if the key exists, false otherwise</li>
      </ul>
      </>,
    },
    {
      val: <H5>Iteration</H5>,
    },
    {
      val: <>Iteration goes in the same order as the values were inserted</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion', 50]
      ]);
  
      // returns iterable of keys, values & entries
      recipeMap.keys() // MapIterator {"cucumber", "tomatoes", "onion"}
      recipeMap.values() // MapIterator {500, 350, 50}
      recipeMap.entries() // MapIterator {"cucumber" => 500, "tomatoes" => 350, "onion" => 50} // it’s used by default in for..of.
  
      for (let key of recipeMap.keys()) alert(key) // cucumber, tomatoes, onion
      for (let value of recipeMap.values()) alert(value) // 500, 350, 50
      for (let entry of recipeMap) alert(entry) // cucumber,500 (and so on) // the same as of recipeMap.entries()
      
      recipeMap.forEach( (value, key, map) => {
        alert(\`\${key}: \${value}\`) // cucumber: 500 etc
      })
      `,
    },
    {
      val: <H5>Chaining</H5>,
    },
    {
      val: <><code>map.set</code> call returns the map itself</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        map.set('1', 'str1').set(1, 'num1').set(true, 'bool1')
        map // Map(3) {'1' => 'str1', 1 => 'num1', true => 'bool1'}
      `,
    },
    {
      val: <H5>Array --> Map </H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let map = new Map([
        ['1',  'str1'],
        [1,    'num1'],
        [true, 'bool1']
      ]);
  
      map.get('1') // "str1"
      `,
    },
    {
      val: <H5>Object --> Map </H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let obj = {
        name: "John",
        age: 30
      };
      
      let map = new Map(Object.entries(obj));
      map.get('name') // "John"
      `,
    },
    {
      val: <H5>Map --> Object </H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let prices = Object.fromEntries([
        ['banana', 1],
        ['orange', 2],
      ])
      prices // { banana: 1, orange: 2, meat: 4 }
      `,
    },
    {
      val: <H5>WeakMap</H5>,
    },
    {
      val: <>
      <ul>
        <li>allows only objects as keys</li>
        <li>removes them together with associated value once they become inaccessible</li>
        <li>main advantages are that they have weak reference to objects</li>
        <li>they can easily be removed by garbage collector</li>
        <li>disadvantages are not having support for clear, size, keys, values…</li>
        <li>idea is that object key stays in map if we even delete the object reference, it is not garbage collected</li>
        <li>but in weakMap if we kill the obj it will be also removed from the weakMap</li>
        <li>If we’re working with an object that “belongs” to another code, maybe even a third-party library, 
        and would like to store some data associated with it, 
        that should only exist while the object is alive – then WeakMap is exactly what’s needed.</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let map = new Map();
      let obj1 = {name: "Jane"}
      let obj2 = {name: "Anton"}
      map.set(obj1, "good girl");
      map.set(obj2, "good boy");
      obj1 = null
      obj2 = null
      map.size // 2 // bad

      let weakMap = new WeakMap();
      let obj1 = {name: "Jane"}
      let obj2 = {name: "Anton"}
      weakMap.set(obj1, "good girl");
      weakMap.set(obj2, "good boy");
      obj1 = null
      obj2 = null
      weakMap.size // undefined
      // When obj gets garbage collected, weakMap will be removed as well   
      `,
    },    
  ],
}
