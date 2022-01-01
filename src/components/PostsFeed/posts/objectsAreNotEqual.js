import { Lnk } from '../components/Lnk'

export const objectsAreNotEqual = {
  title: <>Same objects are not equal</>,
  date: '2021.10.20',
  tagsArr: ['object', 'JavaScript', 'vanilla', 'data', 'types'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          From{' '}
          <Lnk
            path={
              'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects'
            }
          >
            MDN
          </Lnk>{' '}
          <i>
            <q>
              In JavaScript, objects are a reference type. Two distinct objects
              are never equal, even if they have the same properties. Only comparing
              the same object reference with itself yields true.
            </q>
          </i>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        Primitives
        'abc' === 'abc' // true
        123 === 123 // true
        false === false // true
        null === null // true
        undefined === undefined // true
        Symbol("Sym") === Symbol("Sym") // false
      
        Objects
        {} === {} // false
        [] === [] // false
        (() => 0) === (() => 0) // false
      `,
    },
  ],
}
