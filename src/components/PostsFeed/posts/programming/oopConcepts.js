import { CodeSpan } from '../../components/CodeSpan'
import { H3 } from '../../components/H3'

export const oopConcepts = {
  title: 'OOP concepts',
  date: '2022.01.11',
  tagsArr: ['OOP', 'basics'],
  postParts: [
    {
      val: <H3>Encapsulation</H3>,
    },
    {
      val: <>
        Combining relative functions and variables in a single unit(object).
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        class Employee {
          setEmpDetails(name, id) {
            this.name = name
            this.id = id
          }
          getEmpName() {
            return this.name
          }
          getEmpId() {
            return this.id
          }
        }
        
        const emp1 = new Employee()
        emp1.setEmpDetails('John', 1001)
        emp1.getEmpName() // 'John'
        emp1.getEmpId() // 1001
      `,
    },
    {
      val: <H3>Inheritance</H3>,
    },
    {
      val: <ul>
        <li>Process where one object (class) gets properties from another object</li>
        <li>Inheritance is done from a class, which is called <i>parent</i> or <i>super</i> or <i>base</i> </li>
        <li>Inherited properties go to a class, which is called <i>child</i> or <i>sub</i> or <i>derived</i></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        class Car {
          setName(name) {
            this.name = name
          }
          startEngine() {
            console.log('Engine started for ' + this.name)
          }
        }

        class Toyota extends Car {
          topSpeed(speed) {
            console.log('Top speed for ' + this.name + ' is ' + speed)
          }
        }
        
        const myCar = new Toyota()
        myCar.setName('Camry')
        myCar.startEngine() // Engine started for Camry
        myCar.topSpeed(200) // Top speed for Camry is 200
      `,
    },
    {
      val: <H3>Polymorphism</H3>,
    },
    {
      val: <ul>
        <li>A way to create a single variable, function or object in different forms.</li>
        <li>Same method works differently depending on class.</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Animal {
        constructor(name) {
          this.name = name
        }
        eats() {
          console.log(this.name + ' eats food')
        }
      }

      class Alligator extends Animal {
        eats() {
          console.log(this.name + ' eats fishes')
        }
      }

      const bobby = new Animal('Bobby')
      bobby.eats() // Bobby eats food
      const murphy = new Alligator('Murphy')
      murphy.eats() // Murphy eats fishes
      `,
    },
    {
      val: <H3>Abstraction</H3>,
    },
    {
      val: <ul>
        <li>Abstraction is when we hide the complexity of the code, and also not letting the user access some of our functions.</li>
        <li>Can do that by using <i>let</i>, <i>const</i> keywords</li>
        <li>Can be easily done in function constructors, but not in class</li>
        <li>In class we can use <i>let</i>, <i>const</i> inside functions, but it is not always elegant</li>
        <li>If we use <i>this</i> keyword that function will be shown to the user</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      class Employee {
        constructor(name, yearsInCompany) {
          this.name = name
          this.yearsInCompany = yearsInCompany
        }
        get salary() {
          const hiddenBaseSalary = 2000
          return (1 + this.yearsInCompany / 10) * hiddenBaseSalary
        }
        tellSalary() {
          console.log('Salary of ' + this.name + ' is ' + this.salary + ' $/m')
        }
      }

      const john = new Employee('John', 5)
      john.salary // 3000
      john.tellSalary() // 'Salary of John is 3000 $/m'
      `,
    },
  ],
}
