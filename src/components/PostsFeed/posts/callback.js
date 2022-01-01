function Cmpt() {
  function func(cb) {
    alert('in 1 sec callback func will be triggered')
    setTimeout(() => cb(), 1000)
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
  tagsArr: ['JavaScript', 'vanilla'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          A callback function is passed into another function as an argument and will be called back later.
        </>
      ),
    },
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
        alert('in 1 sec callback func will be triggered')
        setTimeout(() => cb(), 1000)
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
}
