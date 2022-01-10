import { H5 } from '../../components/H5'

export const jsDataTypes = {
  title: 'Data types in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H5>Primitives</H5>,
    },
    {
      val: (
        <>
          <ul>
            <li>
              <code>number</code> numbers of any kind: integer or floating-point, integers are
              limited by ±(253-1)
            </li>
            <li>
              <code>bigint</code> integer numbers of arbitrary length
            </li>
            <li>
              <code>string</code> strings. A string may have zero or more characters, there’s no
              separate single-character type
            </li>
            <li>
              <code>boolean</code> true/false.
            </li>
            <li>
              <code>null</code> unknown values – a standalone type that has a single value null
            </li>
            <li>
              <code>undefined</code> unassigned values – a standalone type that has a single value
              undefined
            </li>
            <li>
              <code>symbol</code> unique identifiers
            </li>
          </ul>
        </>
      ),
    },
    {
      val: <H5>Objects</H5>,
    },
    {
      val: (
        <>
          <ul>
            <li>
              <code>object</code> for more complex data structures
            </li>
            <li>
              <code>function</code>
            </li>
          </ul>
        </>
      ),
    },
    {
      val: <H5>Typeof</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        typeof 0 // "number"
        typeof "foo" // "string"
        typeof ("foo") // "string"
      `,
    },
    {
      val: <H5>Type conversion</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        String(true) // 'true'

        Number("   123   ") // 123
        Number("123z") // NaN (error reading a number at "z")
        Number(true) // 1
        Number(false) // 0
        Number(null) // 0
        Number(undefined) // NaN  

        +true // 1
        +""   // 0
        +"123" // 123

        Boolean(1) // true
        Boolean(0) // false
        Boolean("0") // true
        Boolean(" ") // true
        Boolean("hello") // true
        Boolean("") // false
      `,
    },
  ],
}
