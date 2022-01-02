import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsStrings = {
  title: 'Strings in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H5>Quotation marks</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let single = 'single-quoted';
      let double = "double-quoted";
      let backticks = \`backticks\`;
      `,
    },
    {
      val: <H5>Interpolation</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      alert(\`1 + 2 = \${1 + 2}.\`); // 1 + 2 = 3
      `,
    },
    {
      val: <H5>Multiline string</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let guestList = \`
        line 1
        line 2
      \`;
      `,
    },
    {
      val: <H5>Special characters</H5>,
    },
    {
      val: <>Special characters start with a backslash character \, also called an “escape character”
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        \\n // New line
        \\r // Carriage return: not used alone. Windows text files use a combination of two characters \\r\\n to represent a line break.
        \\', \\" // Quotes
        \\\\ // Backslash
        \\t // Tab
        \\b, \\f, \\v // Backspace, Form Feed, Vertical Tab – kept for compatibility, not used nowadays.
        \\xXX // Unicode character with the given hexadecimal Unicode XX, e.g. '\\x7A' is the same as 'z'.
        \\uXXXX // A Unicode symbol with the hex code XXXX in UTF-16 encoding, for instance \\u00A9 – is a Unicode for the copyright symbol ©. It must be exactly 4 hex digits.
        \\u{X…XXXXXX} // (1 to 6 hex characters) A Unicode symbol with the given UTF-32 encoding. Some rare characters are encoded with two Unicode symbols, taking 4 bytes. This way we can insert long codes.
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        "Hello\\nWorld" // two lines using a "newline symbol"
        'I\\'m the Walrus!' // I'm the Walrus!
        "\\u00A9" // ©
        "\\u{20331}" // 佫, a rare Chinese hieroglyph (long Unicode)
        "\\u{1F60D}" // 😍, a smiling face symbol (another long Unicode)
    `,
    },
    {
      val: <H5>Length</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        \`My name is Anton\`.length // 16
        str.length() // NOT working, length is a property
    `,
    },
    {
      val: <H5>Access characters</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'Hello'
      str[0] // H
      str[str.length - 1] // o
      str[1000] // undefined
      str.charAt(0) // H
      str.charAt(1000) // '' (an empty string)
  
      // string is iterable
      for (let char of "Hello") alert(char); 
      // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
    `,
    },
    {
      val: <H5>Primitives are immutable</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'Hi'
      str[0] = 'X'
      str // 'Hi'
      `,
    },
    {
      val: <H5>Case</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'Interface'.toUpperCase() // INTERFACE
      'Interface'.toLowerCase() // interface
      `,
    },
    {
      val: <H5>Character position</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'abc0123456789a'
      str.indexOf('a') // 0, found at the beginning
      str.indexOf('z') // -1, not found, the search is case-sensitive
      str.indexOf("2") // 5, found at the position 5
      str.indexOf("2", 6) // -1, not found, because started to search from 6th position
      str.lastIndexOf('a') // 13, searches from the end
      `,
    },
    {
      val: <>All occurrences</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let str = "As sly as a fox, as strong as an ox";
        let pos = -1;
        while ((pos = str.indexOf("as", pos + 1)) != -1) alert( pos ); // 7, 17, 27
      `,
    },
    {
      val: <H5>Character existence</H5>,
    },
    {
      val: <>With <CodeSpan>indexOf()</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        if ("Widget".indexOf("dg") != -1) alert('found') // if we check for substring existence
        if (~"Widget".indexOf("dg")) alert('found') // same result // bitwise trick
      `,
    },
    {
      val: <>With <CodeSpan>includes()</CodeSpan>, <CodeSpan>startsWith()</CodeSpan>, <CodeSpan>endsWith()</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        str.includes(substr, pos) // returns true/false // more modern than indexOf()

        let str = 'abc0123456789a'
        str.includes('c') // true
        str.includes('z') // false
        str.startsWith('a') // true
        str.startsWith('b') // false
        str.endsWith('a') // true
        str.endsWith('aa') // false
      `,
    },
    {
      val: <H5>Substring</H5>,
    },
    {
      val: <><CodeSpan>slice(start,end)</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = "stringify"
      str.slice(0, 5) // 'strin', the substring from 0 to 5 (not including 5)
      str.slice(0, 1) // 's', from 0 to 1, but not including 1
      str.slice(-4, -1) // 'gif'
      str.slice(2) // 'ringify'
      `,
    },
    {
      val: <><CodeSpan>substring(start,end)</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        let str = "stringify";
        str.substring(2, 6) // "ring"
        str.substring(6, 2) // "ring"
        // same as slice, but it allows start to be greater than end
        // Negative arguments are (unlike slice) not supported, they are treated as 0.
      `,
    },
    {
      val: <><CodeSpan>substr(start,length)</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = "stringify";
      alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
      alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters

      // Returns the part of the string from start, with the given length.
      // In contrast with the previous methods, this one allows us to specify the length instead of the ending position
      // The first argument may be negative, to count from the end
      `,
    },
    {
      val: <H5>UTF-16 to string</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        'z'.codePointAt(0) // 122 // Returns the code for the character at position pos
      `,
    },
    {
      val: <H5>String to UTF-16</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        String.fromCodePoint(65); // 'A' // Creates a character by its numeric code
      `,
    },
    {
      val: <H5>Unicode</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        '\\u005a' // Z
      `,
    },
    {
      val: <H5>Compare strings</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'a' > 'Z' // true // lowercase letter is always greater than the uppercase
      'Österreich' > 'Zealand' // true // Letters with diacritical marks are “out of order”

      localeCompare(compareString, locales, options)
      'Österreich'.localeCompare('Zealand'); // -1 // compare strings with localization 
      // neg num if str1 is less than str2 // pos num if str1 is greater than str2 // 0 if they are equivalent
      `,
    },
    {
      val: <H5>Surrogate pairs</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        // rare symbols are encoded with a pair of 2-byte characters called “a surrogate pair”
        '𝒳'.length // 2
        '😂'.length // 2
      `,
    },
    {
      val: <H5>Diacritical marks & normalization</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
        'S' // "S"
        '\\u0307' // "̇" // dots above and below
        'S\\u0307' // Ṡ
        'S\\u0307\\u0323' // Ṩ
    
        let s1 = 'S\\u0307\\u0323'; // Ṩ, S + dot above + dot below
        let s2 = 'S\\u0323\\u0307'; // Ṩ, S + dot below + dot above
        s1 == s2 // false // though the characters look identical (?!)
        s1.normalize() == s2.normalize() // true
      `,
    },
    {
      val: <H5>Some string methods</H5>,
    },
    {
      val: <H5><CodeSpan>charAt()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abc0123456789a'.charAt(2); // 'c'
      `,
    },
    {
      val: <H5><CodeSpan>charCodeAt()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abc0123456789a'.charCodeAt(2); // 99
      `,
    },
    {
      val: <H5><CodeSpan>codePointAt()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abc0123456789a'.codePointAt(2); // 99
      `,
    },
    {
      val: <H5><CodeSpan>concat()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'a'.concat('b'); // 'ab'
      `,
    },
    {
      val: <H5><CodeSpan>match()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'The Brown Fox.'.match(/[A-Z]/g); // ["T", "B", "F"]
      `,
    },
    {
      val: <H5><CodeSpan>matchAll()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'The Brown Fox.'.matchAll('o'); // RegExpStringIterator {}
      [...'The Brown Fox.'.matchAll('o')]; // (2) [Array(1), Array(1)] 0: ["o", index: 6, input: "The Brown Fox.", groups: undefined] 1: ["o", index: 11, input: "The Brown Fox.", groups: undefined]
      `,
    },
    {
      val: <H5><CodeSpan>padStart()</CodeSpan>, <CodeSpan>padEnd()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      '1'.padStart(2, '0'); // "01"
      '1'.padStart(2); // " 1"
      'abc'.padEnd(5, '.'); // "abc.."
      'abc'.padEnd(5); // "abc  "
      `,
    },
    {
      val: <H5><CodeSpan>repeat()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      '*'.repeat(10); // "**********'
      `,
    },
    {
      val: <H5><CodeSpan>replace()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abcb'.replace('b', 'B'); // "aBcb"
      'abcb'.replace(/B/i, 'B'); // "aBcb" - RegExp
      'abcb'.replace(/B/ig, 'B'); // "aBcB" - RegExp
      `,
    },
    {
      val: <H5><CodeSpan>replaceAll()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abcb'.replaceAll('b', 'B'); // "aBcB"
      `,
    },
    {
      val: <H5><CodeSpan>search()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abcb'.search('b'); // 1
      'abcb'.search(/B/gi); // 1 - RegExp
      `,
    },
    {
      val: <H5><CodeSpan>split()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abcb'.split(''); // ["a", "b", "c", "b"]
      'abcb'.split('c'); // ["ab", "b"]
      `,
    },
    {
      val: <H5><CodeSpan>trim()</CodeSpan>, <CodeSpan>trimStart()</CodeSpan>, <CodeSpan>trimEnd()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      ' abcb  '.trim(); // 'abcd'
      ' abcb  '.trimStart(); // 'abcd  '
      ' abcb  '.trimEnd(); // ' abcd'
      `,
    },
    {
      val: <H5><CodeSpan>toLocaleUpperCase()</CodeSpan>, <CodeSpan>toLocaleLowerCase()</CodeSpan></H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'abcb'.toLocaleUpperCase(); // 'ABCD'
      'AbCd'.toLocaleLowerCase(); // 'abcd'
      `,
    },
    {
      val: <>Other string methods find on <Lnk path="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">mdn</Lnk></>,
    },
  ],
}
