import { Lnk } from '../../components/Lnk'
import { CodeSpan } from '../../components/CodeSpan'
import userObjectInConsole from './userObjectInConsole.png'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsClass = {
  title: 'Class in JavaScript',
  date: '2021.12.26',
  tagsArr: ['JavaScript', 'basics', 'OOP'],
  postParts: [
    {
      val: <ul>
        <li>Class is useful for objects creation of the same kind.</li>
        <li>There is not 'real' classes in JS</li>
        <li>Classes in JS are based internally on constructor functions & prototypes</li>
      </ul>,
    },
    {
      val: <H3>Syntax</H3>,
    },
    {
      val: <ul>
        <li>Class is useful for objects creation of the same kind.</li>
        <li>There is not 'real' classes in JS</li>
        <li>Classes in JS are based internally on constructor functions & prototypes</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class MyClass {
        prop = value
        constructor() {} // NO commas
        method1() {} 
        method2() {}
        get something() {}
        set something(param) {}
        [Symbol.iterator]() {}
      }

      const obj = new MyClass() // create a new object with all the listed methods
      `,
    },
    {
      val: <ul>
        <li>constructor() method is called automatically by 'new', so we can initialize the object there</li>
        <li>MyClass is technically a constructor function</li>
        <li>methods, getters and setters are written to MyClass.prototype of a constructor function</li>
      </ul>,
    },
    {
      val: <H3>Create</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class User {
        constructor(name) { this.name = name }
        sayHi() { alert(this.name) }
        car = "bmw"
        dog = prompt("your dog breed?", "husky");
      }
    
      let user = new User("John") // object is created
      user.sayHi() // "John"
      user.car // "bmw"
      user.dog // "husky"
      typeof User // function
      User.prototype // {constructor: ƒ, sayHi: ƒ}
      alert(User) // class User { ... } // string representation starts with the “class…”
      // for...in // does not work by default, coz enumerable flag is false for all methods in the "prototype"
      // Classes always "use strict"
      `,
    },
    {
      type: 'img',
      path: userObjectInConsole,
    },
    {
      val: <H3>Class expression</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let User = class { sayHi() { alert("Hello") } }
      let User = class MyClass { sayHi() { alert("Hello") } } // Like a function, class expressions may have a name, it’s visible inside the class only
      let xxx = new User()
      xxx.sayHi() // Hello

      // return class in function on-demand
      function makeClass(phrase) {
        return class { sayHi() { alert(phrase) } }
      }
      let User = makeClass("Hello") // Create a new class
      new User().sayHi() // Hello
      `,
    },
    {
      val: <H3>Dynamic method name</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class User {
        ['say' + 'Hi']() { alert("Hello") }
      }
      new User().sayHi() // Hello
      `,
    },
    {
      val: <H3><code>this</code> in class</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Button {
        constructor(value) { this.value = value }
        click() { alert(this.value) }
      }
      let button = new Button("hello")
      setTimeout(button.click, 1000) // undefined
  
      // but works with arrow function, which takes "this" from above
      class Button {
        constructor(value) { this.value = value }
        click = () => alert(this.value)
      }
      let button = new Button("hello")
      setTimeout(button.click, 1000) // hello
      `,
    },
    {
      val: <H3>Methods chaining</H3>,
    },
    {
      val: <>To enable methods chaining just return object's instance by returning <code>this</code></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Greetings {
        hi() { console.log('hi'); return this; }
        bye() { console.log('bye'); return this; }
      }

      const greeting = new Greetings()
      greeting.hi().bye() // hi // bye
      `,
    },
    {
      val: <H3>Extends</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Animal {
        constructor(name) {
          this.speed = 0
          this.name = name
        }
        setSpeed(speed) { this.speed = speed }
      }
      
      let dog = new Animal("Spok")
      dog.name // 'Spok'
      dog.setSpeed(30)
      dog.speed // 30
      dog.doFly() // !!! dog.doFly is not a function
      
      class Bird extends Animal { 
        doFly() { return true }
      }

      let owl = new Bird('Lintu')
      owl.name // 'Lintu'
      owl.setSpeed(100)
      owl.speed // 100
      owl.doFly() // true
      `,
    },
    {
      val: <H3>Override method</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Animal {
        constructor(name) {
          this.speed = 0
          this.name = name
        }
        setSpeed(speed) { this.speed = speed }
      }
      
        let dog = new Animal("Spok")
        dog.name // 'Spok'
        dog.setSpeed(30)
        dog.speed // 30
      
      class Bird extends Animal { 
        setSpeed(speed) { this.speed = 2 * speed }
      }
      
        let owl = new Bird('Lintu')
        owl.name // 'Lintu'
        owl.setSpeed(100)
        owl.speed // 200
      
      `,
    },
    {
      val: <H3>Override constructor</H3>,
    },
    {
      val: <ul>
        <li>constructors in inheriting classes must call <code>super</code> before using <code>this</code></li>
        <li><code>super</code> calls parent method</li>
        <li>arrow functions do not have <code>super</code></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Animal {
        constructor(name) {
          this.speed = 0
          this.name = name
        }
      }
      let rabbit = new Animal ("White Rabbit", 10) 
      // {speed: 0, name: "White Rabbit"}
  
      class Rabbit extends Animal {
        constructor(name, earLength) {
          super(name)
          this.earLength = earLength
        }
      }
      rabbit = new Rabbit("White Rabbit", 10) 
      // {speed: 0, name: "White Rabbit", earLength: 10}
      `,
    },
    {
      val: <H3>Static methods & properties</H3>,
    },
    {
      val: <ul>
        <li>they belong to the class</li>
        <li>they are not part of an instantiated object</li>
        <li>static properties and methods are inherited</li>
      </ul>,
    },
    {
      val: <H5>Static methods</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Man {
        name = "John"
        static hi() {
          return 'John says hi'
        }
      }

      // same as

      class Man { name = "John" }
      Man.hi = function() { return 'John says hi' }
      
      const john = new Man
      john.name // 'John'
      john.hi() // ! Uncaught TypeError: john.hi is not a function
      Man.hi() // 'John says hi'
      `,
    },
    {
      val: <H5>Static property</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Article {
        static publisher = "John"
      }
      // or
      Article.publisher = "John"

      const news1 = new Article
      news1.publisher // undefined
      Article.publisher // 'John'
      `,
    },
    {
      val: <H3>Read-only property</H3>,
    },
    {
      val: <ul>
      <li>property can be set & never modified</li>
      <li>to do that need to make getter, but not the setter</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class CoffeeMachine {   
        constructor(power) { this._power = power }
        get power() { return this._power }
      }
      
      let coffeeMachine = new CoffeeMachine(100)
      alert(\`Power is: \${coffeeMachine.power} W\`) // Power is: 100 W
      coffeeMachine.power = 25; // Error (no setter)
      `,
    },
    {
      val: <H3>Private property</H3>,
    },
    {
      val: <ul>
        <li>only accessible from inside the class</li>
        <li>not supported widely yet</li>
        <li>should start with <code>#</code></li>
        <li>inherits have no direct direct access</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class CoffeeMachine {
        #waterAmount = 666
  
        waterAmount() {
          return this.#waterAmount
        }
      }
      
      let machine = new CoffeeMachine()
      machine.waterAmount() // 666
      machine.#waterAmount // Error Private field '#waterAmount' must be declared in an enclosing class
  
      // can not be inherited
      class MegaCoffeeMachine extends CoffeeMachine {
        method() {
          alert( this.#waterAmount ); // Error Private field '#waterAmount' must be declared in an enclosing class
        }
      }
      `,
    },
    {
      val: <H3>Getters & setters</H3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class CoffeeMachine {
        #waterAmount = 0
  
        get waterAmount() {
          return this.#waterAmount
        }

        set waterAmount(value) {
          if (value < 0) value = 0
          this.#waterAmount = value
        }
      }
      
      let machine = new CoffeeMachine()
      machine.waterAmount = -666
      machine.waterAmount // 0
      machine.waterAmount = 100
      machine.waterAmount // 100
      `,
    },
    {
      val: <H3>Getters & setters via functions</H3>,
    },
    {
      val: <ul>
        <li>can accept multiple arguments</li>
        <li>more flexible</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class CoffeeMachine {
        #waterAmount = 0
      
        setWaterAmount(value) {
          if (value < 0) value = 0
          this.#waterAmount = value
        }
      
        getWaterAmount() {
          return this.#waterAmount
        }
      }

      const machine = new CoffeeMachine()
      machine.setWaterAmount(100)
      machine.getWaterAmount() // 100
      `,
    },
    {
      val: <H3>Extend built-in classes</H3>,
    },
    {
      val: <ul>
        <li>Built-in classes like Array, Map, Object and <Lnk path="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">others</Lnk> are extendable</li>
        <li>Can add additional methods to it</li>
        <li>Static methods are not inherited</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class MyArray extends Array {
        isEmpty() { return this.length === 0 }
      }

      let arr = new MyArray(1, 2, 5, 10, 50)
      arr // MyArray(5) [1, 2, 5, 10, 50]
      arr.constructor === MyArray // true

      let filteredArr = arr.filter(item => item >= 10)
      filteredArr // MyArray(2) [10, 50]
      filteredArr.constructor === MyArray // true
      filteredArr.isEmpty() // false
      filteredArr.length = 0
      filteredArr // MyArray []
      filteredArr.isEmpty() // true
      `,
    },
    {
      val: <H5>[Symbol.species]</H5>,
    },
    {
      val: <ul>
        <li>If we’d like built-in methods like map or filter to return regular arrays</li>
        <li>return Array in [Symbol.species]</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class MyArray extends Array {
        isEmpty() { return this.length === 0 }
      
        static get [Symbol.species]() {
          return Array
        }
      }

      let arr = new MyArray(1, 2, 5, 10, 50)
      arr // MyArray(5) [1, 2, 5, 10, 50]
      arr.isEmpty() // false

      let filteredArr = arr.filter(item => item >= 10);
      filteredArr // [10, 50]
      filteredArr.isEmpty() // TypeError: filteredArr.isEmpty is not a function
      `,
    },
    {
      val: <H3>instanceof</H3>,
    },
    {
      val: <ul>
        <li>Checks if an object belongs to a certain class</li>
        <li>Returns true if object belongs to the Class or inherits from it</li>
        <li>Examines the prototype chain for the check</li>
        <li>Same as <CodeSpan>objA.isPrototypeOf(objB)</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Rabbit {}
      let rabbit = new Rabbit()
      rabbit instanceof Rabbit // true

      function Dog() {}
      new Dog() instanceof Dog // true

      let arr = [1, 2, 3];
      arr instanceof Array // true
      arr instanceof Object // true
      `,
    },
    {
      val: <H3>Mixins</H3>,
    },
    {
      val: <ul>
        <li>object can inherit from a single object</li>
        <li>class may extend only one other class</li>
        <li>Sometimes it may be limiting</li>
        <li><i>Mixin</i> is a class with methods that can be used by other classes without a need to inherit from it</li>
        <li>Mixin is a class that contains methods for other classes</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let sayHiMixin = {
        sayHi() { alert(\`Hello \${this.name}\`) },
        sayBye() { alert(\`Bye \${this.name}\`) }
      };
  
      class User {
        constructor(name) {
          this.name = name;
        }
      }
  
      // copy the methods
      Object.assign(User.prototype, sayHiMixin);
      // now User can say hi
      new User("Dude").sayHi(); // Hello Dude!
      `,
    },
    {
      val: <>Good but difficult <Lnk path="https://javascript.info/mixins#eventmixin">example</Lnk> on real mixin usage.</>,
    },
  ],
}
