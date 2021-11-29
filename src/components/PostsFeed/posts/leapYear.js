import React from 'react';
import styled from 'styled-components';

function LeapYearComponent() {
  const [inputValState, setInputValState] = React.useState('');
  const [yearState, setYearState] = React.useState(null);

  function isLeapYear(inputVal) {
    const year = Number(inputVal);
    // if string or zero
    if (isNaN(year) || year === 0) return setYearState(null);
    // if number is too big
    if (year > Number.MAX_SAFE_INTEGER) return setYearState('too large number');
    // if number is too small
    if (year < -4.543e9) return setYearState('too small number');
    // eliminate years divisible by 4000 as leap years
    if (year % 4000 === 0) return setYearState('not leap');
    // years divisible by 100 but not by 400 are NOT leap years
    if (year % 100 === 0 && year % 400 !== 0) return setYearState('not leap');
    // years not divisible by 4 are NOT leap years
    if (year % 4 !== 0) return setYearState('not leap');
    // years divisible by 400 ARE leap years
    if (year % 400 === 0) return setYearState('leap');
    // years divisible by 4 but not by 100 ARE leap years
    if (year % 4 === 0 && year % 100 !== 0) return setYearState('leap');
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
        {yearState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
        {yearState === 'leap' && <span style={{ color: 'green' }}>Yes</span>}
        {yearState === 'not leap' && <span style={{ color: 'red' }}>No</span>}
        {yearState === 'too large number' && <span style={{ color: 'blue' }}>The Earth doesn't exist anymore 😞</span>}
        {yearState === 'too small number' && <span style={{ color: 'blue' }}>The Earth is not formed yet 😞</span>}
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
        const [yearState, setYearState] = React.useState(null);
      
        function isLeapYear(inputVal) {
          const year = Number(inputVal);
          // if string or zero
          if (isNaN(year) || year === 0) return setYearState(null);
          if (year === 0) return setYearState(null);
          // if number is too big
          if (year > Number.MAX_SAFE_INTEGER) return setYearState('too large number');
          // if number is too small
          if (year < -4.543e9) return setYearState('too small number');
          // eliminate years divisible by 4000 as leap years
          if (year % 4000 === 0) return setYearState('not leap');
          // years divisible by 100 but not by 400 are NOT leap years
          if (year % 100 === 0 && year % 400 !== 0) return setYearState('not leap');
          // years not divisible by 4 are NOT leap years
          if (year % 4 !== 0) return setYearState('not leap');
          // years divisible by 400 ARE leap years
          if (year % 400 === 0) return setYearState('leap');
          // years divisible by 4 but not by 100 ARE leap years
          if (year % 4 === 0 && year % 100 !== 0) return setYearState('leap');
          // all others
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
              {yearState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
              {yearState === 'leap' && <span style={{ color: 'green' }}>Yes</span>}
              {yearState === 'not leap' && <span style={{ color: 'red' }}>No</span>}
              {yearState === 'too large number' && <span style={{ color: 'blue' }}>The Earth doesn't exist anymore 😞</span>}
              {yearState === 'too small number' && <span style={{ color: 'blue' }}>The Earth is not formed yet 😞</span>}
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
