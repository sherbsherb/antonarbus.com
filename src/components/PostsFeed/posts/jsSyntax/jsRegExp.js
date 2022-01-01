import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsRegExp = {
  title: 'Regular expressions in JavaScript',
  date: '2022.01.01',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <>Regular expressions is a pattern to search and replace in text</>,
    },
    {
      val: <h3>Syntax</h3>,
    },
    {
      val: <ul>
        <li>Via object <CodeSpan>const regexp = new RegExp("pattern", "flags")</CodeSpan></li>
        <li>Via slashes <CodeSpan>const regexp = /pattern/gmi</CodeSpan></li>
        <li>Slashes pattern does not allow for expressions to be inserted, they are fully static</li>
        <li>Slashes are used when we know the regular expression at the code writing time</li>
        <li><CodeSpan>new RegExp</CodeSpan> is more often used when we need to create a regexp “on the fly”</li>
        <li>In both cases regexp becomes an instance of the built-in RegExp class</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let tag = prompt("What tag do you want to find?", "h2");
      let regexp = new RegExp(\`<\${tag}>\`);
      `,
    },
    {
      val: <h3>Flags</h3>,
    },
    {
      val: <ol>
        <li><CodeSpan>/.../i</CodeSpan> case-insensitive</li>
        <li><CodeSpan>/.../g</CodeSpan> all matches</li>
        <li><CodeSpan>/.../m</CodeSpan> multiline mode</li>
        <li><CodeSpan>/.../s</CodeSpan> match newline character \n</li>
        <li><CodeSpan>/.../u</CodeSpan> full Unicode support (correct processing of surrogate pairs)</li>
        <li><CodeSpan>/.../y</CodeSpan> searching at the exact position in the text</li>
      </ol>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "We will, we will rock you".match(/we/gi) // ["We", "we"]
      "A\\nB".match(/A.B/) // null
      "A\\nB".match(/A.B/s) // ['A\\nB', index: 0, input: 'A\\nB', groups: undefined]
      '😄 sfds'.match(/\\p{Emoji}/gu) // ["😄"]
      `,
    },
    {
      val: <h3>Character classes</h3>,
    },
    {
      val: <ul>
        <li><code>/./</code> any character, except a newline</li>
        <li><code>/\d/</code> digit</li>
        <li><code>/\s/</code> space, including tabs <code>\t</code>, newlines <code>\n</code>, <code>\v</code>, <code>\f</code>, <code>\r</code></li>
        <li><code>/\w/</code> word, either a letter of Latin alphabet or a digit or an underscore</li>
        <li><code>/\D/</code> non-digit, any character except \d, for ex a letter</li>
        <li><code>/\S/</code> non-space, any character except \s, for ex a letter</li>
        <li><code>/\W/</code> non-wordy character, anything but \w, e.g a non-latin letter or a space</li>
        <li><code>/\s\S/</code> anything, a space character OR not a space character</li>
        <li><code>/\d\D/</code> anything</li>
        <li><code>/[^]/</code> anything</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "Z".match(/./) // Z
      "Is there CSS4".match(/CSS\\d/g) // ['CSS4'] // matches a string 'CSS' with a digit after it
      "+7(903)-123-45-67".match(/\\d/g) // ['7']
      "+7(903)-123-45-67".match(/\\d/g) // ['7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7']
      "+7(903)-123-45-67".match(/\\D/g) // ['+', '(', ')', '-', '-', '-']
      "+7(903)-123-45-67".replace(/\\D/g, "") // 79031234567
      "CSS4".match(/CS.4/) // 'CSS4'
      "hi 123 свет".match(/[^]/g) // ['h', 'i', ' ', '1', '2', '3', ' ', 'с', 'в', 'е', 'т']
      `,
    },
    {
      val: <h3>Unicode properties</h3>,
    },
    {
      val: <>There are 3 categories</>,
    },
    {
      val: <h5><Lnk path="https://unicode.org/reports/tr18/#General_Category_Property">General category</Lnk></h5>,
    },
    {
      val: <ul>
        <li><b>Letter</b> (L), Uppercase_Letter (Lu), Lowercase_Letter (Ll), Titlecase_Letter (Lt), Modifier_Letter (Lm), Other_Letter (Lo)</li>
        <li><b>Mark</b> (M), Non-Spacing_Mark (Mn), Spacing_Combining_Mark (Mc), Enclosing_Mark (Me)</li>
        <li><b>Number</b> (N), Decimal_Digit_Number (Nd), Letter_Number (Nl), Other_Number (No)</li>
        <li><b>Symbol</b> (S), Math_Symbol (Sm), Currency_Symbol (Sc), Modifier_Symbol (Sk), Other_Symbol (So)</li>
        <li><b>Punctuation</b> (P), Connector_Punctuation (Pc), Dash_Punctuation (Pd), Open_Punctuation (Ps), Close_Punctuation (Pe), Initial_Punctuation (Pi), Final_Punctuation (Pf), Other_Punctuation (Po)</li>
        <li><b>Separator</b> (Z), Space_Separator (Zs), Line_Separator (Zl), Paragraph_Separator (Zp)</li>
        <li><b>Other</b> (C), Control (Cc), Format (Cf), Surrogate (Cs), Private_Use (Co), Unassigned (Cn)</li>
      </ul>
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "10 >= 5".match(/\\p{General_Category=Math_Symbol}/gu) // ['>', '=']
      "10 >= 5".match(/\\p{Math_Symbol}/gu) // ['>', '=']
      "10 >= 5".match(/\\p{Sm}/gu) // ['>', '=']
      `,
    },
    {
      val: <h5><Lnk path="https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values">Script</Lnk></h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "Привет man".match(/\\p{Script=Cyrillic}/gu) // ['П', 'р', 'и', 'в', 'е', 'т']
      `,
    },
    {
      val: <h5><Lnk path="https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties">Binary Unicode property</Lnk></h5>,
    },
    {
      val: <>ASCII, ASCII_Hex_Digit, Alphabetic, Any, Dash, Emoji, Hex_Digit, Lowercase, Math, Noncharacter_Code_Point, Pattern_Syntax, Pattern_White_Space, Quotation_Mark, Radical, Regional_Indicator, Sentence_Terminal, Soft_Dotted, Terminal_Punctuation, Unified_Ideograph, Uppercase, White_Space</>
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "1 plus 1 is 2".match(/\\p{Alphabetic}/gu) // ['p', 'l', 'u', 's', 'i', 's']
      `,
    },
    {
      val: <h3>Anchors + word boundary</h3>,
    },
    {
      val: <ul>
        <li><code>/^/</code> matches beginning of the text</li>
        <li><code>/$/</code> matches end of the text</li>
        <li><code>/\b/</code> matches for being a word boundary, </li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      /^Mary/.test("Mary had a little lamb") // true
      /lamb$/.test("Mary had a little lamb") // true
      "Hello, Java!".match(/\\bJava\\b/g) // ['Java']
      "Hello, JavaScript!".match(/\\bJava\\b/g) // null
      "1 23 456 78".match(/\\b\\d\\d\\b/g) // ["23", "78"]
      "12,34,56".match(/\\b\\d\\d\\b/g) // ["12", "34", "56"]
      // or
      "Mary had a little lamb".startsWith("Mary") // true
      "Mary had a little lamb".endsWith("lamb") // true
      `,
    },
    {
      val: <>Test if a time format</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let regexp = /^\\d\\d:\\d\\d$/
      regexp.test("12:34") // true
      regexp.test("12:345") // false
      `,
    },
    {
      val: <>In multiline text with 'm' flag they match start/end of a line not only string</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = \`1st place: Winnie
        2nd place: Piglet
        3rd place: Eeyore
      \`
      str.match(/^\\d/gm) // ["1", "2", "3"]
      `,
    },
    {
      val: <h3>Escaping, special characters</h3>,
    },
    {
      val: <><code>{'['}</code> <code>\</code> <code>{'^'}</code> <code>{'$'}</code> <code>{'.'}</code> <code>{'|'}</code> <code>{'?'}</code> <code>{'*'}</code> <code>{'+'}</code> <code>{'('}</code> <code>{')'}</code> <code>{'.'}</code> to be escaped with backslash <code>\</code></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "Chapter 5.1".match(/\\d\\.\\d/g) // ['5.1']
      "function g()".match(/g\\(\\)/g) // ['g()']
      // look for backslash
      `,
    },
    {
      val: <h3><code>[ab]</code> OR (Sets)</h3>,
    },
    {
      val: <ul>
      <li>Search for any character among given</li>
      <li>Allow only characters or character classes</li>
      </ul>,
    },
    {
      val: <>
        <code>[tm]</code>"t" or "m"<br />
        <code>[\w-]</code>wordly character or a hyphen <br />
        <code>[\s\d]</code>a space or a digit
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "Mop top".match(/[tm]op/gi) // ["Mop", "top"]
      "Voila".match(/V[oi]la/) // null
      `,
    },
    {
      val: <h3><code>|</code> OR</h3>,
    },
    {
      val: <ul>
      <li>Alternation allows any expressions</li>
      <li>A regexp A|B|C means one of expressions A, B or C</li>
      <li><code>I love HTML|CSS</code> matches I love HTML or CSS</li>
      <li><code>I love (HTML|CSS)</code> matches I love HTML or I love CSS</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "First HTML appeared, then CSS, then JavaScript".match(/html|php|css|java(script)?/gi) // ["HTML", "CSS", "JavaScript"]
      "Java, JavaScript, PHP, C, C++".match(/Java(Script)?|C(\\+\\+)?|PHP/g) // ["Java", "JavaScript", "PHP", "C", "C++"]
      "00:00 10:10 23:59 25:99 1:2".match(/([01]\\d|2[0-3]):[0-5]\\d/g) // ["00:00", "10:10", "23:59"]
      
      `,
    },
    {
      val: <h3>Ranges</h3>,
    },
    {
      val: <>
        <code>[a-z]</code> range from a to z<br />
        <code>[0-5]</code> digit from 0 to 5 <br />
        <code>[\s\d]</code>a space or a digit
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // searching for "x" followed by two digits or letters from A to F
      "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) // ["xAF"]
      `,
    },
    {
      val: <h3>Exclude <code>[^…]</code></h3>,
    },
    {
      val: <>
        <code>[^aeyo]</code> any character except 'a', 'e', 'y' or 'o'<br />
        <code>[^0-9]</code> any character except a digit, the same as \D<br />
        <code>[^\s]</code> any non-space character, same as \S
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: <>
      In square brackets we can use the vast majority of special characters w/o escaping, until they mean something for brackets</>
      ,
    },
    {
      val: <h3>Quantifiers <code>+</code>, <code>*</code>, <code>?</code>, <code>{'{n}'}</code></h3>,
    },
    {
      val: <>
        <code>{'{3}'}</code> 3 times <br />
        <code>{'{3,5}'}</code> from 3 to 5 <br />
        <code>{'{1,}'}</code> 1 or more  <br />
        <code>?</code> optional, same as {'{0,1}'} <br />
        <code>*</code> zero or more, same as {'{0,}'}  <br />
        <code>+</code> one or more <br />
        <code>\d+</code> looks for numbers <br />
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "I'm 12345 years old".match(/\\d{5}/) // "12345" // same as \\d\\d\\d\\d\\d
      "I'm not 12, but 1234 years old".match(/\\d{3,5}/) // "1234"
      "I'm not 12, but 345678 years old".match(/\d{3,}/) // "345678"
      "+7(903)-123-45-67".match(/\\d+/g) // ["7", "903", "123", "45", "67"]
      "color or colour?".match(/colou?r/g) // ["color", "colour"]
      "100 10 1".match(/\\d0*/g) // ["100", "10", "1"] // looks for a digit followed by any number of zeroes (may be many or none)
      "100 10 1".match(/\\d0+/g) // ["100", "10"] // 1 not matched, as 0+ requires at least one zero
      "0 1 12.345 7890".match(/\\d+\\.\\d+/g) // 12.345 // Regexp for decimal fractions 
      "<body> ... </body>".match(/<[a-z]+>/gi) // <body> //  Regexp for an “opening HTML-tag w/o attributes”, such as <span> or <p>
      "Hello!... How goes?.....".match(/\\.{3,}/g) //  ["...", "....."] // find an ellipsis "..."
      `,
    },
    {
      val: <h3>Greedy and lazy quantifiers</h3>,
    },
    {
      val: <h5>Greedy mode</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // let's find ["witch", "broom"]
      'a "witch" and her "broom" is one'.match(/".+"/g) // ['"witch" and her "broom"']
      // not what we want
      `,
    },
    {
      val: <ul>
      <li><code>.</code> means any character, <code>+</code> means one or more times</li>
      <li><code>.+</code> stops at a new line or end, then search for " further</li>
      <li>But there is no further, because we stopped at the end</li>
      <li>Regular expression engine understands that it took too many and starts to backtrack</li>
      <li>It iterates the string and shortens the match for the quantifier by one character every attempt from the end</li>
      <li>We got "witch" and her "broom"</li>
      <li>Due to flag 'g' it will continue from the prev match end, but no more quotes in the rest of the string</li>
      <li>In the default 'greedy' mode a quantified character is repeated as many times as possible</li>
      <li>The regexp adds to the match as many characters as it can for <code>.+</code> and then shortens that one by one, if the rest of the pattern doesn’t match</li>
      <li>Greedy quantifier may lead to <Lnk path="https://javascript.info/regexp-catastrophic-backtracking">catastrophic backtracking</Lnk> and make regexp to execute very long</li>
      </ul>,
    },
    {
      val: <h5>Lazy mode</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      'a "witch" and her "broom" is one'.match(/".+?"/g) // ["witch", "broom"]
      `,
    },
    {
      val: <ul>
      <li>Enable lazy mode by putting a question mark <code>?</code></li>
      <li>Repeats minimal number of times</li>
      <li>Usually <code>?</code> is a quantifier (zero or one)</li>
      <li>But if added after another quantifier it gets another meaning</li>
      <li>It switches the matching mode from greedy to lazy</li>
      <li>Laziness is only enabled for the quantifier with <code>?</code></li>
      <li>Other quantifiers remain greedy</li>
      </ul>,
    },
    {
      val: <h3>Capturing groups <code>(...)</code></h3>,
    },
    {
      val: <>
        <CodeSpan>"Gogogo now!"".match(/(go)+/ig) // "Gogogo"</CodeSpan> <br />
        <code>(go)+</code> means 'go', 'gogo', 'gogogo' and so on
      </>,
    },
    {
      val: <ul>
      <li>Search engine memorizes the content matched by parentheses</li>
      <li>Parentheses are numbered from left to right</li>
      <li>Can be retrieved from the array</li>
      <li>The zero index of result always holds the full match.</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      '<h1>Hello, world!</h1>'.match(/<.*?>/) 
      // ['<h1>', index: 0, input: '<h1>Hello, world!</h1>', groups: undefined]

      // with ()
      '<h1>Hello, world!</h1>'.match(/<(.*?)>/)
      // ['<h1>', 'h1', index: 0, input: '<h1>Hello, world!</h1>', groups: undefined]
      `,
    },
    {
      val: <>
        To include contents inside parentheses into the result wrap it into additional braces
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "1 turkey costs 30€".match(/\\d+(?=(€|kr))/) //  30, €
      `,
    },
    {
      val: <h3>Capturing groups & <CodeSpan>str.replace()</CodeSpan></h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "John Bull".replace(/(\\w+) (\\w+)/, '$2, $1') // Bull, John
      `,
    },
    {
      val: <h3>Named groups</h3>,
    },
    {
      val: <ul>
        <li>Remembering groups by their numbers is hard</li>
        <li>we can give names to parentheses</li>
        <li>That’s done by putting <code>{'?<name>'}</code> immediately after the opening brace</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
      let str = "2019-04-30"
      let groups = str.match(dateRegexp).groups
      groups.year // 2019
      groups.month // 04
      groups.day // 30
      `,
    },
    {
      val: <>Exclude group with <code>?:</code></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = "Gogogo John!"
      let regexp = /(?:go)+ (\\w+)/i // ?: excludes 'go' from capturing
      let result = str.match(regexp)
      result[0] // Gogogo John (full match)
      result[1] // John
      result.length // 2 (no more items in the array)
      `,
    },
    {
      val: <>Named groups & <CodeSpan>str.replace()</CodeSpan></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g
      let str = "2019-10-30, 2020-01-01"
      str.replace(regexp, '$<day>.$<month>.$<year>') // 30.10.2019, 01.01.2020
      `,
    },
    {
      val: <h3>Backreference <code>\1</code></h3>,
    },
    {
      val: <ul>
        <li>We can refer to capturing group</li>
        <li>Engine finds the first quote <code>()</code> and memorizes its content</li>
        <li> Further we can “find the same as in the first group” by <code>\1</code></li>
        <li><code>\2</code> would mean the contents of the second group</li>
        <li>If we use <code>?:</code> in the group, then we can’t reference it</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      \`He said: "She's the one!".\`.match(/(['"])(.*?)\\1/g) // ["She's the one!"]!
      `,
    },
    {
      val: <>Named groups can be used <code>{'\\k<name>'}</code></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      \`He said: "She's the one!".\`.match(/(?<quote>['"])(.*?)\\k<quote>/g) // ["She's the one!"]
      `,
    },
    {
      val: <h3>Lookahead <code>(?=smth)</code></h3>,
    },
    {
      val: <ul>
      <li><code>X(?=Y)</code> means look for "X", if "Y" is after it</li>
      <li>Contents of the parentheses (?=...) is not included in the result</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "1 turkey costs 30€".match(/\\d+(?=€)/)  // "30"
      // looks for a digit that is followed by a space and if there’s 30 somewhere after it 
      "1 turkey costs 30€".match(/\\d+(?=\\s)(?=.*30)/) // '1'
      `,
    },
    {
      val: <h3>Negative lookahead <code>(?!=smth)</code></h3>,
    },
    {
      val: <>
        <code>X(?!Y)</code> means "search X, but only if not followed by Y"
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "2 turkeys cost 60€".match(/\\d+\\b(?!€)/g) // "2"
      `,
    },
    {
      val: <h3>Lookbehind <code>{'(?<=Y)X'}</code></h3>,
    },
    {
      val: <><code>{'(?<=Y)X'}</code> matches X only if there’s Y before it</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "1 turkey costs $30".match(/(?<=\\$)\\d+/) // '30'
      `,
    },
    {
      val: <h3>Negative lookbehind <code>{'(?<!Y)X'}</code></h3>,
    },
    {
      val: <><code>{'(?<!Y)X'}</code> matches X if there’s no Y before it</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "2 turkeys cost $60".match(/(?<!\\$)\\b\\d+/g) // ["2"]
      // Find non-negative integers
      "0 12 -5 123 -18".match(/(?<!-)\\d+/g) // ["0", "12", "123", "8"]
      `,
    },
    {
      val: <h3>Search at position with 'y' flag <code>{'/.../y'}</code></h3>,
    },
    {
      val: <ul>
        <li>Flag 'y' allows to perform the search at the given position in the source string</li>
        <li><CodeSpan>regexp.exec(str)</CodeSpan> works like <CodeSpan>str.match(regexp)</CodeSpan></li>
        <li>With flag <code>g</code> it performs the search in str, starting from position stored in the <code>regexp.lastIndex</code> property</li>
        <li>If there is a match, then it sets <code>regexp.lastIndex</code> to the index</li>
        <li>Successive calls to <CodeSpan>regexp.exec(str)</CodeSpan> return matches one after another</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'let varName' // Let's find all words in this string
      let regexp = /\\w+/g
      regexp.lastIndex // 0 (initially lastIndex=0)
      let word1 = regexp.exec(str)
      word1[0] // let (1st word)
      regexp.lastIndex // 3 (position after the match)
      let word2 = regexp.exec(str)
      word2[0] // varName (2nd word)
      regexp.lastIndex // 11 (position after the match)
      let word3 = regexp.exec(str)
      word3 // null (no more matches)
      regexp.lastIndex // 0 (resets at search end)

      // we can get all matches in the loop:
      str = 'let varName'
      regexp = /\\w+/g
      let result
      while (result = regexp.exec(str)) {
        console.log( \`Found \${result[0]} at position \${result.index}\` )
        // Found let at position 0
        // Found varName at position 4
      }
      `,
    },
    {
      val: <>'y' flag makes <CodeSpan>regexp.exec()</CodeSpan> to search exactly at position <code>lastIndex</code></>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'let varName = "value"'
      let regexp = /\\w+/y

      regexp.lastIndex = 3
      regexp.exec(str) // null (there's a space at position 3, not a word)
      regexp.lastIndex = 4
      regexp.exec(str) // varName (word at position 4)
      `,
    },
    {
      val: <h3>RegExp methods</h3>,
    },
    {
      val: <ol>
        <li><CodeSpan>str.match(regexp)</CodeSpan> - finds all matches of 'regexp' in the string 'str', with 'g' flag returns an array</li>
        <li><CodeSpan>str.matchAll(regexp)</CodeSpan> - returns not an array, but an iterable object</li>
        <li><CodeSpan>str.split(regexp, limit)</CodeSpan> - Splits the string using the regexp (or a substring) as a delimiter</li>
        <li><CodeSpan>str.search(regexp)</CodeSpan> - returns the position of the first match or -1 if none found:</li>
        <li><CodeSpan>str.replace(regexp, replacement)</CodeSpan> - replaces matches found using regexp in string str with replacement</li>
        <li><CodeSpan>str.replaceAll(regexp, replacement)</CodeSpan> - same as str.replace With 'g' flag </li>
        <li><CodeSpan>regexp.exec(str) </CodeSpan> - works exactly like <CodeSpan>str.match(regexp)</CodeSpan></li>
        <li><CodeSpan>regexp.test(str)</CodeSpan> - looks for at least one match, if found, returns true, otherwise false</li>
      </ol>,
    },
    {
      val: <h5>str.match(regexp)</h5>,
    },
    {
      val: <ul>
        <li>Finds matches in a string</li>
        <li>If doesn’t have flag <code>g</code> array with capturing groups</li>
        <li>Wth <code>g</code> flag returns an array of all matches as strings</li>
        <li>If there are no matches null is returned</li>
        <li>To ensure a result to be an array put <CodeSpan>let result = str.match(regexp) || []</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // without flag g
      let result = "I love JavaScript".match(/Java(Script)/)
      // (2) ['JavaScript', 'Script', index: 7, input: 'I love JavaScript', groups: undefined]
      result[0] // JavaScript (full match)
      result[1] // Script (first capturing group)
      result.length // 2
      result.index // 7 (match position)
      result.input // I love JavaScript (source string)

      // with flag g
      result = "I love JavaScript".match(/Java(Script)/g)
      result[0] // JavaScript
      result.length // 1

      // no matches
      result = "I love JavaScript".match(/HTML/)
      result // null

      // more examples
      let str = "We will, we will rock you"
      str.match(/we/gi) // ["We", "we"]
      str.match(/we/i) // ["We", index: 0, input: "We will, we will rock you", groups: undefined]
      str.match(/hello/i) // null
      let matches = "JavaScript".match(/HTML/) || []
      if (!matches.length) alert("No matches")
      `,
    },
    {
      val: <h5>str.matchAll(regexp)</h5>,
    },
    {
      val: <ul>
        <li>Search for all matches with all groups</li>
        <li>Returns an iterable object with matches</li>
        <li>If there are no results, it returns an empty iterable object</li>
        <li>Every match is returned as an array with capturing groups (the same str.match w/o flag g)</li>
        <li>Can use for..of to loop over matchAll matches</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let matchAll = '<h1>Hello, world!</h1>'.matchAll(/<(.*?)>/g)
      matchAll // [object RegExp String Iterator], not array, but an iterable
      matchAll = Array.from(matchAll)
      let firstMatch = matchAll[0]
      firstMatch[0] // <h1>
      firstMatch[1] // h1
      firstMatch.index // 0
      firstMatch.input // <h1>Hello, world!</h1>
      `,
    },
    {
      val: <h5>str.split(regexp, limit)</h5>,
    },
    {
      val: <>Splits the string using the regexp (or a substring) as a delimiter</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      '12-34-56'.split('-') // ['12', '34', '56']
      '12, 34, 56'.split(/,\s*/) // ['12', '34', '56']
      `,
    },
    {
      val: <h5>str.search(regexp)</h5>,
    },
    {
      val: <ul>
        <li>Returns the position of the first match</li>
        <li>Returns -1 if none are found</li>
        <li>Search until the first match</li>
        <li>If we need positions of all matches, use <CodeSpan>str.matchAll(regexp)</CodeSpan></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      "A drop of ink may make a million think".search(/ink/i) // 10
      `,
    },
    {
      val: <h5>str.replace(str|regexp, str|func)</h5>,
    },
    {
      val: <ul>
        <li>Method for searching and replacing</li>
        <li>When the first argument is a string, it replaces the first match only</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      '12-34-56'.replace("-", ":") // 12:34-56
      '12-34-56'.replace( /-/g, ":" ) // 12:34:56
      "We will, we will".replace(/we/i, "I") // I will, we will // no flag g
      "We will, we will".replace(/we/ig, "I") // I will, I will // with flag g
      `,
    },
    {
      val: <ul>
        Accepts special characters at the replacement string argument (2nd)
        <li><code>$&</code> inserts the whole match</li>
        <li><code>$`</code> inserts a part of the string before the match</li>
        <li><code>$'</code> inserts a part of the string after the match</li>
        <li><code>$n</code> if n is a 1-2 digit number, inserts the contents of n-th capturing group</li>
        <li><code>{'$<name>'}</code> inserts the contents of the parentheses with the given name</li>
        <li><code>$$</code> inserts character $</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // swap first and last name
      "John Smith".replace(/(john) (smith)/i, '$2, $1') // Smith, John
      `,
    },
    {
      val: <ul>
        <li>Second argument can be a function for smart replacement</li>
        <li>It will be called for each match</li>
        <li>The returned value will be inserted as a replacement</li>
        <li><CodeSpan>replacementFunc(str, offset, input)</CodeSpan></li>
        <li>Read more about function at the <Lnk path="https://javascript.info/regexp-methods#str-replace-str-regexp-str-func">original source</Lnk></li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      // let’s uppercase all matches
      let str = "html and css";
      let result = str.replace(/html|css/gi, str => str.toUpperCase())
      result // HTML and CSS

      // Replace each match by its position in the string
      "Ho-Ho-ho".replace(/ho/gi, (match, offset) => offset) // 0-3-6
      `,
    },
    {
      val: <h5>str.replaceAll(str|regexp, str|func)</h5>,
    },
    {
      val: <ul>
      <li>Same as <CodeSpan>str.replace()</CodeSpan>, with two major differences</li>
      <li>If the first argument is a string, it replaces all occurrences</li>
      <li>If the first argument is a regular expression w/o the 'g' flag, there’ll be an error</li>
      <li>With 'g' flag, it works the same as <CodeSpan>str.replace()</CodeSpan></li>
      <li>The main use case for is replacing all occurrences of a string</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      '12-34-56'.replaceAll("-", ":") // 12:34:56
      `,
    },
    {
      val: <h5>regexp.exec(str)</h5>,
    },
    {
      val: <ul>
      <li>Returns a match for regexp in the string</li>
      <li>It’s called on a regexp, not on a string</li>
      <li>Behaves differently depending on whether the regexp has flag 'g'</li>
      <li>If no 'g', then returns the first match, same as <CodeSpan>str.match(regexp)</CodeSpan></li>
      <li>If there’s flag g, then returns the first match and saves its position in <code>regexp.lastIndex</code> property</li>
      <li>Next call starts the search from position <code>regexp.lastIndex</code>, returns the next match and saves the position after it in <code>regexp.lastIndex</code></li>
      <li>And so on...</li>
      <li>If there are no matches, <CodeSpan>regexp.exec()</CodeSpan> returns null and resets <code>regexp.lastIndex</code> to <code>0</code></li>
      <li> We can use regexp.exec to search from a given position by manually setting <code>lastIndex</code></li>
      <li>If the regexp has flag 'y', the search will be performed exactly at the position <code>regexp.lastIndex</code>. That’s convenient when need to “read” from the string by a regexp at the exact position.</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'More about JavaScript at https://javascript.info'
      let regexp = /javascript/ig
      let result
      while (result = regexp.exec(str)) {
        alert( \`Found \${result[0]} at position \${result.index}\` )
        // Found JavaScript at position 11, then
        // Found javascript at position 33
      }
      `,
    },
    {
      val: <>Search from a given position</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = 'Hello, world!'
      let regexp = /\\w+/g // w/o flag "g", lastIndex property is ignored
      regexp.lastIndex = 5 // search from 5th position (from the comma)
      regexp.exec(str) // world

      // or
      let str = 'Hello, world!'
      let regexp = /\\w+/y
      regexp.lastIndex = 5 // search exactly at position 5
      regexp.exec(str) // null
      `,
    },
    {
      val: <h5>regexp.test(str)</h5>,
    },
    {
      val: <ul>
        <li>Looks for a match and returns true/false whether it exists</li>
        <li>If the regexp has flag 'g', then looks from <code>regexp.lastIndex</code> property and updates this property, just like <CodeSpan>regexp.exec()</CodeSpan></li>
        <li>If we apply the same global regexp to different inputs, it may lead to wrong result, recommended to set regexp.lastIndex = 0 before each search</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = "I love JavaScript"
      /love/i.test(str) // true
      // same as
      str.search(/love/i) != -1 // true
      `,
    },
    {
      val: <>Search from a given position</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let regexp = /love/gi
      let str = "I love JavaScript"
      // start the search from position 10
      regexp.lastIndex = 10
      regexp.test(str) // false (no match)
      `,
    },
  ],
}
