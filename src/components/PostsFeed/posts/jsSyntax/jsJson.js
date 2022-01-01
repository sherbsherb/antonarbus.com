import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'

export const jsJson = {
  title: 'JSON in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <h3>JSON.stringify()</h3>,
    },
    {
      val: <><CodeSpan>JSON.stringify()</CodeSpan> converts objects into JSON</>,
    },
    {
      val: <h5>Basics</h5>,
    },
    {
      val: <>
        <ul>
          <li>json string is named also a "JSON-encoded" OR "serialized" OR "stringified" OR "marshalled" object</li>
          <li>Strings use double quotes. No single quotes or backticks in JSON. 'John' becomes "John"</li>
          <li>Object property names are double-quoted. So <code>age:30</code> becomes <code>"age":30</code>.</li>
        </ul>

      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      JSON.stringify(1) // "1"
      JSON.stringify('test') // "test"
      JSON.stringify(true) // "true"
      JSON.stringify([1, 2, 3]) // "[1,2,3]"
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let student = {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        wife: null
      };
  
      JSON.stringify(student);
      // "{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}"
      `,
    },
    {
      val: <h5>Ignores methods, symbolics, properties with <code>undefined</code></h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let user = {
        sayHi() { alert("Hello") }, // ignored
        [Symbol("id")]: 123, // ignored
        something: undefined // ignored
      }
      JSON.stringify(user) // "{}" (empty object)
      `,
    },
    {
      val: <h5>Nested objects are supported</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let meetup = {
        title: "Conference",
        room: {
          number: 23,
          participants: ["john", "ann"]
        }
      }
      JSON.stringify(meetup) // "{"title":"Conference", "room":{"number":23,"participants":["john","ann"]},}"
      `,
    },
    {
      val: <h5>No circular references</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let room = { number: 23 }
      let meetup = { title: "Conference", participants: ["john", "ann"] }
      meetup.place = room; 
      room.occupiedBy = meetup; 
      JSON.stringify(meetup); // Error: Converting circular structure to JSON
      `,
    },
    {
      val: <h5>Optional parameters</h5>,
    },
    {
      val: <>
      <ul>
        <li><CodeSpan>{'JSON.stringify(value, [replacerFunction(key, value) {} || array, space])'}</CodeSpan></li>
        <li>value - A value to encode</li>
        <li>array of properties to encode OR a mapping function function(key, value). If we pass an array of properties to it, only these properties will be encoded.</li>
        <li>space - amount of space to use for formatting</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let room = {number: 23};
        let meetup = { title: "Conference", participants: [{name: "John"}, {name: "Alice"}], place: room};
        room.occupiedBy = meetup; // room references meetup
        JSON.stringify(meetup, ['title', 'participants']) // {"title":"Conference","participants":[{},{}]}
        JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) // "{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}"
      `,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let room = {number: 23};
        let meetup = { title: "Conference", participants: [{name: "John"}, {name: "Alice"}], place: room};
        room.occupiedBy = meetup; // room references meetup
        JSON.stringify(meetup, ['title', 'participants']) // {"title":"Conference","participants":[{},{}]}
        JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) // "{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}"
      `,
    },
    {
      val: <>
      <CodeSpan>{'function replacerFunction(key, value) {...}'}</CodeSpan>
      <ul>
        <li>return a value OR replaced value</li>
        <li>return undefined to exclude property / value </li>
        <li>value of "this" inside replacer is the object that contains the current property</li>
        <li>The first call is special</li>
        <li>the first (key, value) pair has an empty key, and the value is the target object as a whole</li>
      </ul>
      </>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7}
        function replacer(key, value) {
          // Filtering out properties
          if (typeof value === 'string') {
            return undefined;
          }
          return value;
        }
        JSON.stringify(foo, replacer) // "{\\"week\\":45,\\"month\\":7}"
      `,
    },
    {
      val: <h5><code>Space</code> used for nice-output purposes</h5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let user = {name: "John", age: 25, roles: { isAdmin: false, isEditor: true }}
      JSON.stringify(user, null, 4)

      "{
        "name": "John",
        "age": 25,
        "roles": {
            "isAdmin": false,
            "isEditor": true
        }
      }"
      `,
    },
    {
      val: <h3>JSON.parse()</h3>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
      JSON.parse(userData); // {name: "John", age: 35, isAdmin: false, friends: Array(4)}
      `,
    },
    {
      val: <h5>Incorrect JSON</h5>,
    },
    {
      val: <ul>
        <li>objects and arrays can be included, but they must obey the same JSON format</li>
        <li>comments </li>
        <li>trailing commas are not allowed</li>
        <li>single quotes are not allowed</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let json = \`{
        name: "John",                     // mistake: property name w/o quotes
        "surname": 'Smith',               // mistake: single quotes in value (must be double)
        'isAdmin': false                  // mistake: single quotes in key (must be double)
        "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
        "friends": [0,1,2,3]              // here all fine
      }\`;
      `,
    },
    {
      val: <h5>Reviver function</h5>,
    },
    {
      val: <ul>
        <li><CodeSpan>{'JSON.parse(text, function reviver(key, value) {})'}</CodeSpan></li>
        <li>returns a value OR replaced value</li>
        <li>returns undefined to exclude property / value </li>
        <li>value of "this" inside replacer is the object that contains the current property</li>
        <li>The first call is special. </li>
        <li>the first (key, value) pair has an empty key, and the value is the target object as a whole</li>
      </ul>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
      let meeting = JSON.parse(str);
      meeting.date.getDate(); // Error! because date value is not a Date object but the string

      meeting= JSON.parse(str, function(key, value) {
        if (key == 'date') return new Date(value);
        return value;
      });
      meeting.date.getDate() //30 // works!
      `,
    },
  ],
}
