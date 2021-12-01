import { Main } from './Main';
import img from './tests.png';
const toRender = <Main />;

export const leapYear = {
  title: 'Leap year',
  date: '2021.11.30',
  tagsArr: ['interview', 'js'],
  postParts: [
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
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: 'Main component',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // Main.js
        import React from 'react';
        import styled from 'styled-components';
        import { Input } from './Input';
        import { Output} from './Output';

        export function Main() {
          const [yearTypeState, setYearTypeState] = React.useState(null);

          return (
            <DivStyled data-testid="cmpt">
              <h3>Is a leap year?</h3>
              <Input setYearTypeState={setYearTypeState} />
              <Output yearTypeState={yearTypeState} />
            </DivStyled>
          );
        }

        const DivStyled = styled.div\`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 130px;
          font-size: 1.3rem;
        \`;
      `,
    },
    {
      type: 'text',
      val: 'Input component',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // Input.js
        import styled from 'styled-components';
        import React from 'react';
        import { isLeapYear } from './isLeapYear';

        export function Input(props) {
          const [inputValState, setInputValState] = React.useState('');

          return (
            <InputStyled
              type="number"
              placeholder="Year"
              value={inputValState}
              onChange={e => {
                const val = e.target.value;
                setInputValState(val);
                props.setYearTypeState(isLeapYear(val));
              }}
            />
          );
        }

        const InputStyled = styled.input\`
          padding: 10px;
          min-width: 200px;
          font-size: inherit;
        \`;
      `
    },
    {
      type: 'text',
      val: 'Output component',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // Output.js
        export function Output({yearTypeState}) {
          return (
            <div data-testid="output">
              {yearTypeState === null && <span style={{ color: 'grey' }}>Year is not provided</span>}
              {yearTypeState === 'leap' && <span style={{ color: 'green' }}>Yes</span>}
              {yearTypeState === 'not leap' && <span style={{ color: 'red' }}>No</span>}
              {yearTypeState === 'too large number' && <span style={{ color: 'blue' }}>The Earth doesn't exist anymore 😞</span>}
              {yearTypeState === 'too small number' && <span style={{ color: 'blue' }}>The Earth is not formed yet 😞</span>}
            </div>
          )
        }
      `
    },
    {
      type: 'text',
      val: 'Function that checks if a year value is a leap year',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // isLeapYear.js
        export function isLeapYear(inputVal) {
          const year = Number(inputVal);
          // if string or zero
          if (isNaN(year) || year === 0) return null;
          // if number is too big
          if (year > Number.MAX_SAFE_INTEGER) return 'too large number';
          // if number is too small
          if (year < -4.543e9) return 'too small number';
          // eliminate years divisible by 4000 as leap years
          if (year % 4000 === 0) return 'not leap';
          // years divisible by 100 but not by 400 are NOT leap years
          if (year % 100 === 0 && year % 400 !== 0) return 'not leap';
          // years not divisible by 4 are NOT leap years
          if (year % 4 !== 0) return 'not leap';
          // years divisible by 400 ARE leap years
          if (year % 400 === 0) return 'leap';
          // years divisible by 4 but not by 100 ARE leap years
          if (year % 4 === 0 && year % 100 !== 0) return 'leap';
          // all others
          return 'not leap';
        }
      `,
    },
    {
      type: 'text',
      val: 'Jest unit tests',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // isLeapYear.test.js
        import {isLeapYear} from './isLeapYear.js'

        test('is a leap year', () => {
          expect(isLeapYear('abc')).toEqual(null)
          expect(isLeapYear(0)).toEqual(null)
          expect(isLeapYear(undefined)).toEqual(null)
          expect(isLeapYear(null)).toEqual(null)
          expect(isLeapYear('')).toEqual(null)
          expect(isLeapYear()).toEqual(null)
          expect(isLeapYear(-12345678910)).toEqual('too small number')
          expect(isLeapYear(9007199254740991 + 1)).toEqual('too large number')
          expect(isLeapYear(4000)).toEqual('not leap')
          expect(isLeapYear(8000)).toEqual('not leap')
          expect(isLeapYear(100)).toEqual('not leap')
          expect(isLeapYear(200)).toEqual('not leap')
          expect(isLeapYear(400)).toEqual('leap')
          expect(isLeapYear(1200)).toEqual('leap')
          expect(isLeapYear(5)).toEqual('not leap')
          expect(isLeapYear(4)).toEqual('leap')
          expect(isLeapYear(2024)).toEqual('leap')
          // from the task
          expect(isLeapYear(2000)).toEqual('leap')
          expect(isLeapYear(1700)).toEqual('not leap')
          expect(isLeapYear(1800)).toEqual('not leap')
          expect(isLeapYear(1900)).toEqual('not leap')
          expect(isLeapYear(2100)).toEqual('not leap')
          expect(isLeapYear(2008)).toEqual('leap')
          expect(isLeapYear(2012)).toEqual('leap')
          expect(isLeapYear(2016)).toEqual('leap')
          expect(isLeapYear(2017)).toEqual('not leap')
          expect(isLeapYear(2018)).toEqual('not leap')
          expect(isLeapYear(2019)).toEqual('not leap')
        })
      `,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // Output.test.js
        import { render, screen, cleanup } from '@testing-library/react';
        import '@testing-library/jest-dom'
        import { Output} from './Output';
        import { isLeapYear } from './isLeapYear';
        
        test('Output component exists', () => {
          render(<Output/>);
          const cmpt = screen.getByTestId('output');
          expect(cmpt).toBeInTheDocument();
        });
        
        test('Year is not provided', () => {
          render(<Output yearTypeState={null}/>);
          const cmpt = screen.getByTestId('output');
          expect(cmpt).toHaveTextContent('Year is not provided');
        });
        
        test('Yes', () => {
          render(<Output yearTypeState={isLeapYear(2000)}/>);
          const cmpt = screen.getByTestId('output');
          expect(cmpt).toHaveTextContent('Yes');
        });
        
        test('No', () => {
          render(<Output yearTypeState={isLeapYear(1700)}/>);
          const cmpt = screen.getByTestId('output');
          expect(cmpt).toHaveTextContent('No');
        });
        
        test(\`The Earth doesn't exist anymore 😞\`, () => {
          render(<Output yearTypeState={isLeapYear(9007199254740991 + 1)}/>);
          const cmpt = screen.getByTestId('output');
          expect(cmpt).toHaveTextContent(\`The Earth doesn't exist anymore 😞\`);
        });
        
        test(\`The Earth is not formed yet 😞\`, () => {
          render(<Output yearTypeState={isLeapYear(-12345678910)}/>);
          const cmpt = screen.getByTestId('output');
          expect(cmpt).toHaveTextContent(\`The Earth is not formed yet 😞\`);
        });
      `,
    },
    {
      type: 'text',
      val: 'Test results in console',
    },
    {
      type: 'img',
      path: img,
      alt: 'jest test results',
    },
  ],
};
