import React from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';

export const expressServerForReact = {
  title: 'Express with React app',
  date: '2021.10.26',
  tagsArr: [
    'react',
    'express',
  ],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Basic Express server configuration for React application.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'js',
        val: `
          const express = require('express');
          const path = require('path');
          const app = express();
          const PORT = 3010; // process.env.PORT || 80;
          
          // static files are in 'build' folder
          app.use(express.static(path.join(__dirname, '..', 'build')));
          
          // root goes to index.html
          app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
          });
          
          // all other routes go via React routes to index.html
          app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
          })
          
          app.listen(PORT, () => console.log(\`Server started on port \${PORT}\`));
        `,
    },
  ],
};
