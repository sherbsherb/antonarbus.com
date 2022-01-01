import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
import rabbitPrototype from './rabbitPrototype.png'

export const jsPrototype = {
  title: 'Prototype in JavaScript',
  date: '2021.12.27',
  tagsArr: ['JavaScript', 'basics', 'OOP'],
  postParts: [
    {
      val: <h3><code>[[Prototype]]</code></h3>,
    },
    {
      val: <ul>
        <li>objects have a hidden property <code>[[Prototype]]</code> which references to another object and contains its properties and methods</li>
        <li>when read a none existing property or call method, JS tries to find it in the <code>[[Prototype]]</code> - <i>prototypal inheritance</i></li>
        <li><code>[[Prototype]]</code> is hidden, but can be set via special name <code>__proto__</code></li>
        <li><code>this</code> is always the object from where the method is called</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let obj1 = {
        eats: true,
        name: "John",
        surname: "Smith",
        hi() { alert("Hi, I am John") },
        set fullName(value) { [this.name, this.surname] = value.split(" "); },
        get fullName() { return \`\${this.name} \${this.surname}\`; }
      }
  
      let obj2 = { jumps: true } // your object
  
      obj2.__proto__ = obj1

      // or

      obj2 = {
        jumps: true,
        __proto__: obj1
      }
  
      obj2.eats // true
      obj2.hi() // Hi, I am John
      obj2.fullName // John Smith
      obj2.fullName = "Alice Cooper"
      obj2.fullName // Alice Cooper
      `,
    },
    {
      val: <h3><code>__proto__</code></h3>,
    },
    {
      val: <ul>
        <li><code>__proto__</code> is a getter/setter for <code>[[Prototype]]</code></li>
        <li>It resides in <CodeSpan>Object.prototype</CodeSpan>, just like other methods.</li>
        <li><code>__proto__</code> is not the same as <code>[[Prototype]]</code></li>
        <li><code>__proto__</code> value can be either an object or <code>null</code>, other types are ignored.</li>
        <li>There can be only one <code>[[Prototype]]</code> per object. An object may not inherit from two others.</li>
        <li>It is outdated & exists for historical reasons.</li>
        <li>References can’t go in circles. JavaScript will throw an error.</li>
        <li>Instead of <code>__proto__</code> recommended to use follwoing methods:</li>
        <li><CodeSpan>Object.create(proto, [descriptors])</CodeSpan> - creates an empty object with given proto as [[Prototype]] and optional property descriptors.</li>
        <li><CodeSpan>Object.getPrototypeOf(obj2)</CodeSpan></li>
        <li><CodeSpan>Object.setPrototypeOf(obj2, obj1)</CodeSpan></li>
      </ul>,
    },
    {
      val: <h3>Prototype chain</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let animal = {
        eats: true,
        walk() { alert("Animal walk") }
      }
      
      let rabbit = {
        jumps: true,
        __proto__: animal
      }
      
      let longEar = {
        earLength: 10,
        __proto__: rabbit
      }
      // or
      Object.setPrototypeOf(rabbit, animal)
      Object.setPrototypeOf(longEar, rabbit)
      
      longEar.walk() // Animal walk
      longEar.jumps // true (from rabbit)
      `,
    },
    {
      val: <h3>for…in loop</h3>,
    },
    {
      val: <>Iterates over inherited properties also</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let animal = { eats: true }
      let rabbit = { 
        jumps: true,
        __proto__: animal
      }
  
      Object.keys(rabbit) // jumps
      for (let prop in rabbit) alert(prop) // jumps,  eats
      `,
    },
    {
      val: <h3><CodeSpan>obj.hasOwnProperty(key)</CodeSpan></h3>,
    },
    {
      val: <>Returns true if an object has its own (not inherited) property named key</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let animal = { eats: true }
      let rabbit = {
        jumps: true,
        __proto__: animal
      }
      
      for(let prop in rabbit) {
        let isOwn = rabbit.hasOwnProperty(prop)
        if (isOwn) {
          alert(\`Our: \${prop}\`); // Our: jumps
        } else {
          alert(\`Inherited: \${prop}\`); // Inherited: eats
        }
      }
      `,
    },
    {
      val: <h3>Constructor function & <code>.prototype</code></h3>,
    },
    {
      val: <ul>
        <li>Constructor function has a <code>prototype</code> property, which assigns <code>[[Prototype]]</code> to an object</li>
        <li><code>.prototype</code> property is used when constructor function is called</li>
        <li>The default <code>.prototype</code> is an object with the only property constructor, which points back to the function itself</li>
        <li>we may point constructor function's <code>.prototype</code> to an object to let constructed future object inherit from that object</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function Rabbit() {}
      Rabbit.prototype // { constructor: Rabbit }
      let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
      rabbit.constructor == Rabbit // true (from prototype)
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let animal = { eats: true }
      function Rabbit(name) { this.name = name }
      Rabbit.prototype = animal
    
      let rabbit = new Rabbit("White Rabbit") // rabbit.__proto__ == animal
      rabbit.eats // true
      `,
    },
    {
      val: <ul>
        <li>May also add some properties to <code>.prototype</code> </li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      function Rabbit() {}
      Rabbit.prototype = { 
        jumps: true,
        constructor: Rabbit 
      };

      let rabbit = new Rabbit();
      rabbit.jumps // true
      `,
    },
    {
      type: 'img',
      src: rabbitPrototype,
    },
    {
      val: <h3>Native prototypes</h3>,
    },
    {
      val: <ul>
        <li>All built-in prototypes have <code>Object.prototype</code> on the top</li>
        <li>Strings, numbers and booleans are not objects, but wrapper object silently created with built-in constructors <code>String</code>, <code>Number</code> and <code>Boolean</code></li>
        <li><code>null</code> & <code>undefined</code> do not have object wrappers</li>
      </ul>
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      const arr = []
      arr.__proto__ === Array.prototype // true
      arr.__proto__.__proto__ === Object.prototype // true
      arr.__proto__.__proto__.__proto__ // null
      `,
    },
    {
      val: <h3>Change native prototypes</h3>,
    },
    {
      val: <ul>
        <li>Native prototypes can be modified</li>
        <li>It becomes available to all variables</li>
        <li style={{color: 'red'}}>BAD practice!!!</li>
      </ul>
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      String.prototype.show = function() { alert(this) };
      "BOOM!".show(); // BOOM!

      String.prototype.repeat = function(n) { return new Array(n + 1).join(this) };
      "La".repeat(3) // 'LaLaLa'

      Function.prototype.defer = function(ms) { setTimeout(this, ms) };
      function f() { alert("Hello!") }
      f.defer(1000); // "Hello!" in 1 sec
      `,
    },
    {
      val: <h3>Borrow from prototypes</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // array-like object
      let obj = {
        0: "Hello",
        1: "world!",
        length: 2,
      }
      // borrow method
      obj.join = Array.prototype.join
      obj.join(',') // Hello, world!
      `,
    },
    {
      val: <h3>Prototype methods</h3>,
    },
    {
      val: <><CodeSpan>Object.create(protoObj, [propertiesObject])</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let animal = { eats: true }
      let rabbit = Object.create(animal, {
        jumps: { value: true }
      })
      rabbit.jumps // true
      rabbit.eats // true
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // "very plain" object w/o a prototype 
      let obj = Object.create(null)
      `,
    },
    {
      val: <><CodeSpan>Object.getPrototypeOf(obj)</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      Object.getPrototypeOf(rabbit) === animal // true
      `,
    },
    {
      val: <h5>Object true cloning</h5>,
    },
    {
      val: <>Including all properties: enumerable and non-enumerable, data properties and setters/getters</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
      `,
    },

  ],
}
