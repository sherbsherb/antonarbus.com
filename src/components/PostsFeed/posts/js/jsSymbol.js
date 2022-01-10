import { CodeSpan } from '../../components/CodeSpan'
import { H5 } from '../../components/H5'

export const jsSymbol = {
  title: 'Symbol in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <>
      <ul>
        <li>Object property keys may be string or symbol type</li>
        <li>A “symbol” represents a unique identifier</li>
        <li>Symbols are guaranteed to be unique</li>
        <li>Even if we create many symbols with the same description, they are different values</li>
      </ul>
      </>,
    },
    {
      val: <H5>Create </H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let id1 = Symbol("id")
      let id2 = Symbol("id")
      id1 == id2 // false
      typeof id1 // "symbol"
      alert(id1) // TypeError: Cannot convert a Symbol value to a string
      alert(id1.toString()); // "Symbol(id)"
      `,
    },
    {
      val: <H5>Description property</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let id1 = Symbol("id")
      id1.description // "id"
      `,
    },
    {
      val: <H5>Symbol in object literal</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let id = Symbol("id");
      let user = {
        name: "John",
        [id]: 123 // not "id": 123 // That’s because we need the value from the variable id as the key, not the string “id”
      };
      `,
    },
    {
      val: <H5>“Hidden” properties</H5>,
    },
    {
      val: <>
      <ul>
        <li>we can access the data using the symbol as the key</li>
        <li>nobody can overwrite it, coz nobody can generate same id, symbol cannot be accessed accidentally</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let user = { name: "John" };
      let id = Symbol("id");
      user[id] = 1;
      user[id] // 1     
      `,
    },
    {
      val: <H5>Symbols are skipped by for…in loop</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      for (let key in user ) {
        console.log(key, user [key]); // name John
      }
      // Symbol(id): 1 is skipped
      Object.keys(user) // ["name"] // Symbol is not shown 
      `,
    },
    {
      val: <H5>Copy object with Symbol</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let id = Symbol("id");
      let user = { [id]: 123   };
      let clone = Object.assign({}, user);
      clone[id]; // 123 
      `,
    },
    {
      val: <H5>Global symbols</H5>,
    },
    {
      val: <>
        <ul>
          <li>We can create symbols global registry & access them later</li>
          <li>It guarantees that repeated accesses by the same name return exactly the same symbol.</li>
          <li><CodeSpan>Symbol.for(key)</CodeSpan> checks the global registry, and creates or returns existing symbol</li>
          <li>Symbols inside the registry are called global symbols</li>
          <li>They are accessible everywhere in the code – that’s what they are for.</li>
          <li>There are many system symbols used by JavaScript which are accessible as Symbol.*</li>
          <li>We can use them to alter some built-in behaviors</li>
        </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // read from the global registry
      let id = Symbol.for("id"); // if the symbol did not exist, it is created
      // read it again (maybe from another part of the code)
      let idAgain = Symbol.for("id");
      id === idAgain // true // the same symbol
  
      // Symbol.for works only for global symbols
      let globalSymbol = Symbol.for("name");
      let localSymbol = Symbol("name");
      Symbol.keyFor(globalSymbol) // name, global symbol
      Symbol.keyFor(localSymbol) // undefined, not global
      globalSymbol.description // name
      localSymbol.description // name 
      
      // There are many system symbols used by JavaScript which are accessible as Symbol.*. 
      // We can use them to alter some built-in behaviors.
      Symbol.hasInstance
      Symbol.isConcatSpreadable
      Symbol.iterator
      Symbol.toPrimitive
      // …and so on.
      `,
    },
    {
      val: <H5>Example to understand symbols</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let lib = { name: "ABC" };
      lib["id"] = 5;
      lib["id"] = 6; // The value is changed because it is String [KEY]!!
  
      lib[Symbol("id")] = 123;
      lib[Symbol("id")] = 124; //Not changed
      lib // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 } 
      `,
    },
    {
      val: <H5>Object to primitive conversion</H5>,
    },
    {
      val: <>
        For data conversion into a primitive value JavaScript tries to find and call three object methods: <br />
        1. Call <CodeSpan>obj[Symbol.toPrimitive](hint)</CodeSpan> – the method with the symbolic key <CodeSpan>Symbol.toPrimitive</CodeSpan>. <br />
        2. Otherwise if hint is <code>string</code> JS tries <CodeSpan>obj.toString()</CodeSpan> or <CodeSpan>obj.valueOf()</CodeSpan>. <br />
        3. Otherwise if hint is <code>number</code> or "default" JS tries  <CodeSpan>obj.valueOf()</CodeSpan> or <CodeSpan>obj.toString()</CodeSpan>. <br />
      </>,
    },
    {
      val: <>
        Knowing that we can make our data be convertible into primitive value by JS natively.
      </>,
    },
    {
      val: <>
        Basic object is not converted into number or boolean.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let obj = {a: "5"}
      Boolean({obj}) // true // All objects are true in a boolean context
      obj.toString() // "[object Object]"
      +obj // NaN
      `,
    },
    {
      val: <>
        But when we add symbol it can do conversion.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let user = {
        name: "John",
        money: 1000,
        [Symbol.toPrimitive](hint) {
          return hint == "string" ? this.name : this.money;
        }
      };
      
      alert(user); // "John"
      alert(+user); // 1000
      alert(user + 500); // 1500
      `,
    },
    {
      val: <>
        In the absence of <CodeSpan>Symbol.toPrimitive</CodeSpan> conversion can be handled by <CodeSpan>valueOf()</CodeSpan>, <CodeSpan>toString()</CodeSpan>.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let user = {
        name: "John",
        money: 1000,
        // for hint="string"
        toString() {
          return this.name;
        },
        // for hint="number" or "default"
        valueOf() {
          return this.money;
        }
      };
  
      alert(user); // "John"
      alert(+user); // 1000
      alert(user + 500); // 1500
      `,
    },
    {
      val: <H5>Make iterable concatable</H5>,
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
      val: <H5>Make object iterable</H5>,
    },
    {
      val: <>
        To make an iterable we need to add <code>Symbol.iterator</code> & <code>next()</code> method.
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let range = {
        from: 1,
        to: 5,
      
        [Symbol.iterator]() {
          this.current = this.from;
          return this;
        },
      
        next() {
          if (this.current <= this.to) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
      
      for (let num of range) alert(num); // 1, then 2, 3, 4, 5
      `,
    },
  ],
}
