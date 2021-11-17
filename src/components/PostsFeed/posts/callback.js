import React from 'react';

function Cmpt() {
  function func(cb) {
    setTimeout(() => { 
      alert('1 sec has passed')
      cb() 
    }, 1000)
  }
  const msg = () => alert('callback func is triggered')

  return (
    <div>
      <button onClick={() => func(msg)}>Click</button>
    </div>
  )
}
const toRender = <Cmpt />

export const callback = {
  title: 'Callback',
  date: '2021.11.16',
  tagsArr: ['javascript', 'vanilla', 'js'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Simple callback function example. 
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      function func(cb) {
        setTimeout(() => { 
          alert('1 sec has passed')
          cb() 
        }, 1000)
      }

      const msg = () => alert('callback func is triggered')
      
      func(msg)
      `,
    },
    {
      type: 'output',
      val: toRender
    }
    
  ],
};