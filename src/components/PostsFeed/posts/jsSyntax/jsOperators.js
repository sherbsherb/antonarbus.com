import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsOperators = {
  title: 'Operators in JavaScript',
  date: '2021.12.22',
  tagsArr: ['js', 'basics'],
  postParts: [
    {
      val: <h5>Operator vs operand</h5>,
    },
    {
      val: (
        <ul>
          <li>Operators are applied to operands.</li>
          <li>
            <code>5 * 2</code> here are two operands & one operator
          </li>
          <li>operators in JavaScript return a value</li>
        </ul>
      ),
    },
    {
      val: <h5>Unary vs binary operator</h5>,
    },
    {
      val: (
        <>
          <code>x = -x</code> - operator is unary if it has a single operand
          <code>y - x</code> - operator is binary if it has two operands
        </>
      ),
    },
    {
      val: <h5>Arithmetical</h5>,
    },
    {
      val: (
        <>
          <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        5 % 2 // 1, a remainder of 5 divided by 2
        2 ** 3 // 2³ = 8
        4 ** (1/2) // 2 (power of 1/2 is the same as a square root)
        "my" + "string" // "mystring"
    
        // + supports strings and numbers
        '1' + 2 // "12"
        2 + 2 + '1' // "41"
        '1' + 2 + 2 // "122"
    
        // Other arithmetic operators work only with numbers and always convert their operands to numbers.
        6 - '2' // 4
        '6' / '2' // 3
      `,
    },
    {
      val: <h5>Comparison</h5>,
    },
    {
      val: (
        <>
          <code>{'>'}</code>, <code>{'<'}</code>, <code>{'>='}</code>, <code>{'<='}</code>, <code>{'=='}</code>, <code>{'==='}</code>, <code>{'!='}</code>, <code>{'!=='}</code>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        2 > 1 // true
        2 == 1 // false
        2 != 1 // true 
        let result = 5 > 4
        result // true
        // When comparing values of different types, JavaScript converts the values to numbers
        '2' > 1 // true, string '2' becomes a number 2
        '01' == 1 // true, string '01' becomes a number 1
        true == 1 // true
        false == 0 // true
        // strict equality operator === checks the equality w/o type conversion
        0 === false // false, because the types are different
        null === undefined // false
        null == undefined // true
        null > 0 // false // coz comparisons convert null to a number, treating it as 0 
        null == 0// false
        null >= 0 // true // coz comparisons convert null to a number, treating it as 0
        undefined > 0 // false // undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
        undefined < 0 // false // undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
        undefined == 0 // false // undefined only equals null, undefined, and no other value.
      `,
    },
    {
      val: <h5>Bitwise</h5>,
    },
    {
      val: (
        <>
          Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their
          binary representation.
          <br />
          <code>&</code> AND <br />
          <code>|</code> OR
          <br />
          <code>^</code> XOR
          <br />
          <code>~</code> NOT
          <br />
          <code>{'<<'}</code> LEFT SHIFT
          <br />
          <code>{'>>'}</code> RIGHT SHIFT
          <br />
          <code>{'>>>'}</code> ZERO-FILL RIGHT SHIFT
        </>
      ),
    },
    {
      val: <h5>Logical</h5>,
    },
    {
      val: (
        <>
          <code>{'||'}</code>, <code>{'&&'}</code>, <code>{'!'}</code>, <code>{'??'}</code>
        </>
      ),
    },
    {
      val: (
        <>
          <code>||</code> ('OR') finds the first truthy value, returns it and stops"||" finds the first truthy
          value, returns it and stops
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // || (OR)
        true || true // true
        false || true // true
        true || false // true
        false || false // false
  
        "" || 0 || false || "SuperCoder" || "Anonymous" // SuperCoder
        true || alert("not printed") // true
        false || alert("printed") // printed
      `,
    },
    {
      val: (
        <>
          <code>&&</code> (AND) finds the first falsy value and returns it, if all operands are truthy, returns
          the last operand
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        true && true // true
        false && true // false
        true && false // false
        false && false // false

        1 && 0 // 0
        1 && 5 // 5 // all true
        null && 5 // null
        0 && "no matter what" // 0
        1 && 2 && null && 3 // null
        1 && 2 && 3 // 3, the last one // all true
      `,
    },
    {
      val: <><code>!</code> (NOT) is used for negation</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        !true // false
        !0 // true

        //A double NOT !! is sometimes used for converting a value to boolean type
        !!"non-empty string" // true // same as Boolean("non-empty string")
        !!null // false // Boolean(null)
      `,
    },
    {
      val: <><code>??</code> (Nullish Coalescing) returns the first defined value</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        a ?? b // if a is defined, then a // if not defined, then b
        height = height ?? 100 // set height=100, if height is null or undefined
        // ?? returns the first defined value (not null/undefined)

        let user
        user ?? "Anonymous" // Anonymous (user not defined)

        let user = "John"
        user ?? "Anonymous" // John (user defined)

        null ?? null ?? "Supercoder" ?? "Anonymous" // Supercoder

        // || returns the first truthy value
        // ?? returns the first defined value
        let height = 0
        height || 100 // 100
        height ?? 100 // 0

        // Precedence
        // ?? is evaluated before = and ?, but after most other operations, such as +, *, thus consider adding Using ?? with && or ||
        (null ?? 100) * (null ?? 50) // 5000

        // Using ?? with && or ||
        1 && 2 ?? 3 // syntax error
        (1 && 2) ?? 3 // Works // works only with Using ?? with && or ||
      `,
    },
    {
      val: <h5>Precedence</h5>,
    },
    {
      val: (
        <>
          Grouping <code>{'()'}</code> -->
          Not <code>{'!'}</code> -->
          Unary operator <code>{'+'}</code>, <code>{'-'}</code> -->
          Exponentiation <code>{'**'}</code> -->
          Multiplication <code>{'*'}</code> -->
          Division <code>{'/'}</code> -->
          Reminder <code>{'%'}</code> -->
          Addition <code>{'+'}</code> -->
          Subtraction <code>{'-'}</code> -->
          Less than <code>{'<'}</code> -->
          Greater then <code>{'>'}</code> -->
          Equality <code>{'=='}</code> -->
          Inequality <code>{'!='}</code> -->
          And <code>{'&&'}</code> -->
          Or <code>{'||'}</code> -->
          Subtraction <code>{'-'}</code> -->
          Assignment <code>{'='}</code> -->
          Comma <code>{','}</code>
        </>
      ),
    },
    {
      val: (
        <>
          <Lnk path="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table">
            Whole table
          </Lnk> of operators precedence.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        a && b || c && d 
        // same as 
        (a && b) || (c && d)
      `,
    },
    {
      val: <h5>Modify-in-place <code>+=</code></h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let n = 2
        n += 5 // now n = 7 (same as n = n + 5)
        n *= 2 // now n = 14 (same as n = n * 2)
      `,
    },
    {
      val: <h5>Increment/decrement <code>++</code>, <code>--</code></h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // increase a value and immediately use the result
        let counter = 0
        ++counter // 1

        // increase a value but use its previous value
        let counter = 0
        counter++ // 0
        counter // 1
      `,
    },
    {
      val: <h5>Comma</h5>,
    },
    {
      val: <>Each expression is evaluated but only the result of the last one is returned</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let a = (b = 1 + 2, 3 + 4) // 7
        a // 7
        b // 3
      `,
    },
    {
      val: <h5>Spread <code>...</code></h5>,
    },
    {
      val: <>Spread syntax allows an iterable to be expanded in places where zero or more arguments or elements are expected:
      for function calls, for array & object literals</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        Math.max(3, 5, 1) // 5
        Math.max([3, 5, 1]) // NaN
        Math.max(...[3, 5, 1]) // 5

        let arr1 = [1, -2, 3, 4] 
        let arr2 = [8, 3, -8, 1] 
        Math.max(1, ...arr1, 2, ...arr2, 25) // 25

        let str = "Hello" 
        [...str] // H,e,l,l,o // same as Array.from(str)
      `,
    },
    {
      val: <h5>Assignment</h5>,
    },
    {
      val: <>Cause every operator returns a value following works</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let a = 1
        let b = 2
        let c = 3 - (a = b + 1)
        a // 3
        c // 0

        let a, b, c
        a = b = c = 2 + 2
        a // 4
        b // 4
        c // 4
      `,
    },
  ],
}
