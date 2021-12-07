import { useRef } from 'react'
const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px' }

function Parent() {
  const ref = useRef()

  function isClickedElInsideThisEl(clickedEl, thisEl) {
    if (!thisEl) return
    return !!thisEl.contains(clickedEl)
  }

  function listenForClick() {
    document.addEventListener('click', e => {
      const clickedEl = e.target
      const cBox = ref.current
      const clickedInside = isClickedElInsideThisEl(clickedEl, cBox)
      clickedEl.style.background = clickedInside ? 'lightgreen' : 'lightpink'
      setTimeout(() => { clickedEl.style.background = '' }, 1000)
    })
  }

  return (
    <>
      <button onClick={listenForClick}>
        Start monitoring if we click in/out of C element
      </button>

      <div style={style}>
        A
        <div style={style}>
          B
          <div style={style} ref={ref}>
            C
            <div style={style}>
              D
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const toRender = <Parent />

export const clickedInsideOutside = {
  title: 'Clicked inside or outside element',
  date: '2021.10.29',
  tagsArr: ['javascript', 'JS', 'vanilla', 'function'],
  postParts: [
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px' };

        function Parent() {
          const ref = useRef();
        
          function isClickedElInsideThisEl(clickedEl, thisEl) {
            if (!thisEl) return;
            return thisEl.contains(clickedEl) ? true : false;
          }
        
          function listenForClick() {
            document.addEventListener('click', e => {
              const clickedEl = e.target;
              const cBox = ref.current;
              const clickedInside = isClickedElInsideThisEl(clickedEl, cBox)
              clickedEl.style.background = clickedInside ? 'lightgreen' : 'lightpink'
              setTimeout(() => clickedEl.style.background = '', 1000);
            });
          }
        
          return (
            <>
              <button onClick={listenForClick}>
                Start monitoring if we click in/out of C element
              </button>
        
              <div style={style}>
                A
                <div style={style}>
                  B
                  <div style={style} ref={ref}>
                    C
                    <div style={style}>
                      D
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
        
        const toRender = <Parent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
