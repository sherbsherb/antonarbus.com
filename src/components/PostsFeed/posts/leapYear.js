import React from 'react';
import styled from 'styled-components';

function LeapYearComponent() {
  const [inputValState, setInputValState] = React.useState('');
  const [leapYearState, setLeapYearState] = React.useState(null);

  function isLeapYear(inputVal) {
    const year = Number(inputVal);
    // if string and zero
    if (isNaN(year)) return setLeapYearState(null);
    if (year === 0) return setLeapYearState(null);
    // if number is too big
    if (year > Number.MAX_SAFE_INTEGER) return setLeapYearState('too large number');
    // eliminate years divisible by 4000 as leap years
    if (year % 4000 === 0) return setLeapYearState('not leap');
    // years divisible by 100 but not by 400 are NOT leap years
    if (year % 100 === 0 && year % 400 !== 0) return setLeapYearState('not leap');
    // years not divisible by 4 are NOT leap years
    if (year % 4 !== 0) return setLeapYearState('not leap');
    // years divisible by 400 ARE leap years
    if (year % 400 === 0) return setLeapYearState('leap');
    // years divisible by 4 but not by 100 ARE leap years
    if (year % 4 === 0 && year % 100 !== 0) return setLeapYearState('leap');
    // all other
    return 'not leap';
  }

  return (
    <Div>
      <h3>Is a leap year?</h3>
      <input
        type="number"
        placeholder="Year"
        value={inputValState}
        onChange={e => {
          const val = e.target.value;
          setInputValState(val);
          isLeapYear(val);
        }}
      />
      <div>
        {leapYearState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
        {leapYearState === 'leap' && <span style={{ color: 'green' }}>Yes</span>}
        {leapYearState === 'not leap' && <span style={{ color: 'red' }}>No</span>}
        {leapYearState === 'too large number' && <span style={{ color: 'blue' }}>World doesn't exist anymore 😞</span>}
      </div>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 130px;
  font-size: 1.3rem;
  input {
    padding: 10px;
    min-width: 200px;
    font-size: inherit;
  }
`;
const toRender = <LeapYearComponent />;

export const leapYear = {
  title: 'Leap year',
  date: '2021.11.26',
  tagsArr: ['interview', 'js'],
  postParts: [
    {
      type: 'text',
      val: <></>,
    },
    {
      val: (
        <>
          Acceptance criteria:
          <ol>
            <li>years divisible by 400 ARE leap years</li>
            <li>years divisible by 100 but not by 400 are NOT leap years</li>
            <li>years divisible by 4 but not by 100 ARE leap years</li>
            <li>years not divisible by 4 are NOT leap years</li>
            <li>eliminate years divisible by 4000 as leap years</li>
          </ol>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import styled from 'styled-components';
        
        function LeapYearComponent() {
          const [inputValState, setInputValState] = React.useState('');
          const [leapYearState, setLeapYearState] = React.useState(null);
        
          function isLeapYear(inputVal) {
            const year = Number(inputVal);
            // if string and zero
            if (isNaN(year)) return setLeapYearState(null);
            if (year === 0) return setLeapYearState(null);
            // if number is too big
            if (year > Number.MAX_SAFE_INTEGER) return setLeapYearState('too large number');
            // eliminate years divisible by 4000 as leap years
            if (year % 4000 === 0) return setLeapYearState('not leap');
            // years divisible by 100 but not by 400 are NOT leap years
            if (year % 100 === 0 && year % 400 !== 0) return setLeapYearState('not leap');
            // years not divisible by 4 are NOT leap years
            if (year % 4 !== 0) return setLeapYearState('not leap');
            // years divisible by 400 ARE leap years
            if (year % 400 === 0) return setLeapYearState('leap');
            // years divisible by 4 but not by 100 ARE leap years
            if (year % 4 === 0 && year % 100 !== 0) return setLeapYearState('leap');
            // all other
            return 'not leap';
          }
        
          return (
            <Div>
              <h3>Is a leap year?</h3>
              <input
                type="number"
                placeholder="Year"
                value={inputValState}
                onChange={e => {
                  const val = e.target.value;
                  setInputValState(val);
                  isLeapYear(val);
                }}
              />
              <div>
                {leapYearState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
                {leapYearState === 'leap' && <span style={{ color: 'green' }}>Yes</span>}
                {leapYearState === 'not leap' && <span style={{ color: 'red' }}>No</span>}
                {leapYearState === 'too large number' && <span style={{ color: 'blue' }}>World doesn't exist anymore 😞</span>}
              </div>
            </Div>
          );
        }
        const Div = styled.div\`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 130px;
          font-size: 1.3rem;
          input {
            padding: 10px;
            min-width: 200px;
            font-size: inherit;
          }
        \`;
        const toRender = <LeapYearComponent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
