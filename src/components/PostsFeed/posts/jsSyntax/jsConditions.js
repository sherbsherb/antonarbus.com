import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsConditions = {
  title: 'Conditions in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H5>If</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        const year = 2000

        // one statement
        if (year == 2015) alert( 'You are right!' );

        // multiple statements // better doing this even for one statement for readability 
        if (year == 2015) {
          alert("That's correct!");
          alert("You're so smart!");
        }

        // pre-evaluated boolean value to if
        let cond = (year == 2015); // equality evaluates to true or false
        if (cond) alert( 'You are right!' );
      `,
    },
    {
      val: <H5>If-else</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        const year = 2000
        if (year < 2015) {
          alert( 'Too early...' );
        } else {
          alert( 'Exactly!' );
        }
      `,
    },
    {
      val: <H5>Else-if</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        const year = 2000
        if (year < 2015) {
          alert( 'Too early...' );
        } else if (year > 2015) {
          alert( 'Too late' );
        } else {
          alert( 'Exactly!' );
        }
      `,
    },
    {
      val: <H5>Ternary operator</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let accessAllowed = (age > 18) ? true : false;
        let accessAllowed = age > 18 ? true : false; // parentheses can be omitted // but it is not readable
      
        // multiple ‘?’
        let age = prompt('age?', 18);
        let message = (age < 3) ? 'Hi, baby!' :
          (age < 18) ? 'Hello!' :
          (age < 100) ? 'Greetings!' :
          'What an unusual age!';
        alert( message );
      `,
    },
    {
      val: <H5>Switch</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let a = 3;
        switch (a) {
          case 1:
            alert('1'); break;
          case 2: // grouped two cases
          case 3: // grouped two cases
            alert('2 or 2'); break;
          default:
            alert('not 1,2 or 3');
        }
      
        // in some cases to use obj is more elegant
      `,
    },
  ],
}
