import React from 'react';
import { CodeSpan } from '../components/PostsFeed/components/CodeSpan';
import { Lnk } from '../components/PostsFeed/components/Lnk';


export const disableEslintWarning = {
  title: 'Disable ESLint warnings',
  date: '2021.11.04',
  tagsArr: ['react', 'ESLint'],
  postParts: [
    {
      val: (
        <>
          To disable ESLint warnings we may type
          <ul>
            <li><CodeSpan>{'/* eslint-disable */'}</CodeSpan> at the top of the file</li>
            <li><CodeSpan>{'// eslint-disable-line'}</CodeSpan> on the same line</li>
            <li><CodeSpan>{'/* eslint-disable-next-line */'}</CodeSpan> or <CodeSpan>{'// eslint-disable-next-line'}</CodeSpan> before the line</li>
          </ul>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          More information can be found on the <Lnk path="https://eslint.org/docs/user-guide/configuring/rules#disabling-rules">https://eslint.org</Lnk> page.
        </>
      ),
    }

  ],
};
