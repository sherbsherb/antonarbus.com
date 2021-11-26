import React from 'react';
import styled from 'styled-components';

function LeapYearComponent() {
  const [inputValState, setInputValState] = React.useState('');
  const [isLeapYearState, setIsLeapYearState] = React.useState(null);

  function isLeapYear(inputVal) {
    const year = parseInt(inputVal);
    // if string and zero
    if (isNaN(year)) return setIsLeapYearState(null);
    if (year === 0) return setIsLeapYearState(null);
    // eliminate years divisible by 4000 as leap years
    if (year % 4000 === 0) return setIsLeapYearState(false);
    // years divisible by 100 but not by 400 are NOT leap years
    if (year % 100 === 0 && year % 400 !== 0) return setIsLeapYearState(false);
    // years not divisible by 4 are NOT leap years
    if (year % 4 !== 0) return setIsLeapYearState(false);
    // years divisible by 400 ARE leap years
    if (year % 400 === 0) return setIsLeapYearState(true);
    // years divisible by 4 but not by 100 ARE leap years
    if (year % 4 === 0 && year % 100 !== 0) return setIsLeapYearState(true);
    // all other
    return false;
  }

  return (
    <Div>
      <h3>Is a leap year?</h3>
      <input
        type="number"
        min="1"
        max="9999999"
        step="1"
        placeholder="Year"
        value={inputValState}
        onChange={e => {
          const val = e.target.value;
          setInputValState(val);
          isLeapYear(val);
        }}
      />
      <div>
        {isLeapYearState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
        {isLeapYearState === true && <span style={{ color: 'green' }}>Yes</span>}
        {isLeapYearState === false && <span style={{ color: 'red' }}>No</span>}
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
          const [isLeapYearState, setIsLeapYearState] = React.useState(null);
        
          function isLeapYear(inputVal) {
            const year = parseInt(inputVal);
            // if string and zero
            if (isNaN(year)) return setIsLeapYearState(null);
            if (year === 0) return setIsLeapYearState(null);
            // eliminate years divisible by 4000 as leap years
            if (year % 4000 === 0) return setIsLeapYearState(false);
            // years divisible by 100 but not by 400 are NOT leap years
            if (year % 100 === 0 && year % 400 !== 0) return setIsLeapYearState(false);
            // years not divisible by 4 are NOT leap years
            if (year % 4 !== 0) return setIsLeapYearState(false);
            // years divisible by 400 ARE leap years
            if (year % 400 === 0) return setIsLeapYearState(true);
            // years divisible by 4 but not by 100 ARE leap years
            if (year % 4 === 0 && year % 100 !== 0) return setIsLeapYearState(true);
            // all other
            return false;
          }
        
          return (
            <Div>
              <h3>Is a leap year?</h3>
              <input
                type="number"
                min="1"
                max="9999999"
                step="1"
                placeholder="Year"
                value={inputValState}
                onChange={e => {
                  const val = e.target.value;
                  setInputValState(val);
                  isLeapYear(val);
                }}
              />
              <div>
                {isLeapYearState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
                {isLeapYearState === true && <span style={{ color: 'green' }}>Yes</span>}
                {isLeapYearState === false && <span style={{ color: 'red' }}>No</span>}
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
