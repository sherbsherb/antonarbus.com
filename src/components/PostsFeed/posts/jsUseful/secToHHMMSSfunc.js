function secToHHMMSS(sec = 0) {
  const hours = Math.floor(sec / (60 * 60))
  const remainingSec = sec % (60 * 60)
  const minutes = Math.floor(remainingSec / 60)
  const seconds = remainingSec % 60
  const addZeroToNum = (num) => num.toString().length === 1 ? `0${num}` : num
  const HH = addZeroToNum(hours)
  const MM = addZeroToNum(minutes)
  const SS = addZeroToNum(seconds)
  return `${HH}:${MM}:${SS}`
}

function Component() {
  return (
    <>
      <div>No sec is <b>{secToHHMMSS()}</b></div>
      <div>9 sec is <b>{secToHHMMSS(9)}</b></div>
      <div>57 sec is <b>{secToHHMMSS(57)}</b></div>
      <div>65 sec is <b>{secToHHMMSS(65)}</b></div>
      <div>3988 sec is <b>{secToHHMMSS(3988)}</b></div>
    </>
  )
}

const toRender = <Component />

export const secToHHMMSSfunc = {
  title: <>Seconds to human format</>,
  date: '2021.10.21',
  tagsArr: ['function', 'vanilla', 'JavaScript', 'time', 'mine'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Represent seconds in hours + minutes + seconds
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';

        function secToHHMMSS(sec) {
          const hours = Math.floor(sec / (60 * 60))
          const remainingSec = sec % (60 * 60)
          const minutes = Math.floor(remainingSec / 60)
          const seconds = remainingSec % 60
          const addZeroToNum = (num) => num.toString().length === 1 ? '0'+ num : num
          const HH = addZeroToNum(hours)
          const MM = addZeroToNum(minutes)
          const SS = addZeroToNum(seconds)
          return \`\${HH}:\${MM}:\${SS}\`
        }
        
        function Component() {
          return (
            <>
              <div>No sec is <b>{secToHHMMSS()}</b></div>
              <div>9 sec is <b>{secToHHMMSS(9)}</b></div>
              <div>57 sec is <b>{secToHHMMSS(57)}</b></div>
              <div>65 sec is <b>{secToHHMMSS(65)}</b></div>
              <div>3988 sec is <b>{secToHHMMSS(3988)}</b></div>
            </>
          );
        }
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
