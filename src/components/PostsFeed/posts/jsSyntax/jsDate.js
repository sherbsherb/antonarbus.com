import { Lnk } from '../../components/Lnk'
import { CodeOutput } from '../../components/CodeOutput'
import { CodeSpan } from '../../components/CodeSpan'
// import imgFile from './img.jpg'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const jsDate = {
  title: 'Date in JavaScript',
  date: '2021.12.22',
  tagsArr: ['JavaScript', 'basics'],
  postParts: [
    {
      val: <H5>Create</H5>,
    },
    {
      val: <><CodeSpan>new Date([timestamp])</CodeSpan> - create a Date object with timestamp (milliseconds passed after the Jan 1st of 1970 UTC+0)</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let now = new Date() // Mon May 17 2021 02:47:33 GMT+0300 (Eastern European Summer Time)
      new Date(0) // 0 means 01.01.1970 UTC+0
      new Date(24 * 60 * 60 * 1000) // add 24 hours, get 02.01.1970 UTC+0
      new Date(-24 * 3600 * 1000) // 31 Dec 1969
      `,
    },
    {
      val: <><CodeSpan>new Date(dateString)</CodeSpan> - if single argument & string, then it is parsed automatically (same as Date.parse)</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      new Date("2017-01-26") // Thu Jan 26 2017 02:00:00 GMT+0200 (Eastern European Standard Time)
      `,
    },
    {
      val: <></>,
    },
    {
      val: <>
        <CodeSpan>new Date(year, month, [date, hours, minutes, seconds, ms])</CodeSpan> - create the date with the given components in the local time zone
        <ul>
        <li>year = 4 digits</li>
        <li>month = 0 (Jan) ... 11 (Dec)</li>
        <li>date = day of month, if absent then 1 is assumed</li>
        <li>If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.</li>
        </ul>
      </>
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      new Date(2011, 0, 1, 0, 0, 0, 0) // 1 Jan 2011, 00:00:00
      new Date(2011, 0, 1) // the same, hours etc are 0 by default
      new Date(2011, 0, 1, 2, 3, 4, 567) // 1.01.2011, 02:03:04.567
      `,
    },
    {
      val: <H5>Get</H5>,
    },
    {
      val: <>Local time zone</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let now = new Date() // Sat Dec 25 2021 17:05:39 GMT+0200 (Eastern European Standard Time)
      now.getFullYear() // 2021
      now.getMonth() // 11 // month, 0 ... 11.
      now.getDate() // 25
      now.getHours() // 17
      now.getMinutes() // 5
      now.getSeconds() // 39
      now.getMilliseconds() // 553
      now.getDay() // 6 // Mon // Sunday - Saturday : 0 ... 6
      now.getTimezoneOffset() // -120  // time-zone offset, in minutes, from the date based on current host //  GMT+02

      now.getTime() // 1640444739553 // timestamp // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
      +now // 1640444739553 // timestamp // same as now.getTime()
      
      Date.now() // 1640444940013 // current timestamp // same as new Date().getTime() // it’s faster
      `,
    },
    {
      val: <>UTC-counterparts methods for the time zone UTC+0</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      now.getUTCFullYear() 
      now.getUTCMonth() 
      now.getUTCDate() 
      now.getUTCHours() 
      now.getUTCMinutes() 
      now.getUTCSeconds() 
      now.getUTCMilliseconds() 
      now.getUTCDay()
      `,
    },
    {
      val: <H5>Set</H5>,
    },
    {
      val: <>Local time zone</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let now = new Date()
      now.setFullYear(1997) // setFullYear(year, [month], [date])
      now.setMonth(6) // setMonth(month, [date])
      now.setDate(24)
      now.setHours(20) // setHours(hour, [min], [sec], [ms])
      now.setMinutes(45) // setMinutes(min, [sec], [ms])
      now.setSeconds(42) // setSeconds(sec, [ms])
      now.setMilliseconds(456)

      now.setTime(1621212694110) // sets the whole date by milliseconds since 01.01.1970 UTC
      const event1 = new Date('July 1, 1999')
      const event2 = new Date()
      event2.setTime(event1.getTime())
      event1 // Thu Jul 01 1999 00:00:00 GMT+0300 (Eastern European Summer Time
      event2 // Thu Jul 01 1999 00:00:00 GMT+0300 (Eastern European Summer Time)
      `,
    },
    {
      val: <>Time zone UTC+0</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      setUTCFullYear()
      setUTCMonth()
      setUTCDate()
      setUTCHours()
      setUTCMinutes()
      setUTCSeconds()
      setUTCMilliseconds()
      `,
    },
    {
      val: <H5>Date correction</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let date = new Date(2016, 1, 28)
      date.setDate(date.getDate() + 2) // 1 Mar 2016

      let date = new Date(2016, 0, 2) // 2 Jan 2016
      date.setDate(0) // 31 Dec 2015

      let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!? // ...is 1st Feb 2013!
      `,
    },
    {
      val: <H5>Time difference in ms</H5>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      let start = Date.now()
      for (let i = 0; i < 100000000; i++) {
        let doSomething = i * i * i
      }
      let end = Date.now()
      alert( \`The loop took \${end - start} ms\` ) // The loop took 127 ms
      `,
    },
    {
      val: <H5>Parse</H5>,
    },
    {
      val: <ul>
        <li>Parses the string and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0)</li>
        <li>If the format is invalid, returns NaN</li>
        <li>YYYY-MM-DD – year-month-day.</li>
        <li>The character "T" is used as the delimiter.</li>
        <li>HH:mm:ss.sss – time: hours, minutes, seconds and milliseconds.</li>
        <li>'Z' is the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.</li>
      </ul>
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      Date.parse('2012-01-26T13:51:50.417-07:00') // 1327611110417
      new Date(Date.parse('2012-01-26T13:51:50.417-07:00')) // Thu Jan 26 2012 22:51:50 GMT+0200 (Eastern European Standard Time)
      Date.parse("2019-01-01") // 1546300800000
      Date.parse("2019-01-01T00:00:00.000Z") // 1546300800000
      Date.parse("2019-01-01T00:00:00.000+00:00") // 1546300800000
      Date.parse('Aug 9, 1995') // 807915600000
      Date.parse('Wed, 09 Aug 1995 00:00:00 GMT') // 807926400000
      Date.parse('Wed, 09 Aug 1995 00:00:00') // 807915600000
      Date.parse('Thu, 01 Jan 1970 00:00:00 GMT-0400')  //14400000
      `,
    },
    {
      val: <H5>performance.now()</H5>,
    },
    {
      val: <>Gives the number of milliseconds from the start of page loading with microsecond precision</>,
    },
    {
      type: 'code',
      lang: 'js',
      val: `
      alert(\`Loading started \${performance.now()}ms ago\`)
      `,
    },
  ],
}
