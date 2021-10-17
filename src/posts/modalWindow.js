import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CodeSpan } from '../components/post/CodeSpan';

function Parent() {
  const [showModalWindowState, setShowModalWindowState] = useState(false);
  return (
    <div>
      <div>Parent component</div>
      <button onClick={() => setShowModalWindowState(true)}>
        Show modal window
      </button>
      {showModalWindowState && (
        <Modal
          showModalWindowState={showModalWindowState}
          setShowModalWindowState={setShowModalWindowState}
        />
      )}
    </div>
  );
}

function Modal(props) {
  useEffect(() => {
    // save body width to avoid jumping when scroll bar get hidden
    const bodyWidth = window.getComputedStyle(document.body).width;
    document.body.style.overflowY = 'hidden';
    document.body.style.width = bodyWidth;

    // close modal window on Escape key
    function closeModalWindowOnEscape(e) {
      if (e.key === 'Escape') props.setShowModalWindowState(false);
    }
    document.addEventListener('keydown', closeModalWindowOnEscape);

    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.width = 'auto';
      document.removeEventListener('keydown', closeModalWindowOnEscape);
    };
  }, []);

  return (
    <ModalBkg onClick={() => props.setShowModalWindowState(false)}>
      <Container>
        Modal child component
        <CloseBtn onClick={() => props.setShowModalWindowState(false)} />
      </Container>
    </ModalBkg>
  );
}

const ModalBkg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000b5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div`
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 13px 2px #8b8b8b;
  border: 2px solid #494949;
  position: relative;
`;

const CloseBtn = styled.span`
  position: absolute;
  top: -48px;
  right: -10px;
  color: #c1c1c1;
  font-size: 34px;
  cursor: pointer;

  &:hover {
    transition: color 0.3s ease;
    color: white;
  }

  &:after {
    content: '×';
  }
`;

const toRender = <Parent />;

export const modalWindow = {
  title: 'Modal window',
  date: '2021.10.17',
  tagsArr: ['react', 'modal'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          In styled components let's make a gray transparent layer with fixed
          position which covers whole screen. Child will be centered with
          flexbox.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          In styled components let's make a gray transparent layer with fixed
          position covering whole screen.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'css',
      val: `
        const ModalBkg = styled.div\`
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: #000000b5;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        \`;
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Modal window has just a basic styling with absolutely positioned{' '}
          <span
            style={{
              fontSize: '30px',
              color: 'red',
              position: 'relative',
              top: '3px',
              cursor: 'pointer',
            }}
          >
            ×
          </span>{' '}
          close button as span in the right top corner.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'css',
      val: `
        const Container = styled.div\`
          background-color: #e2e2e2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 13px 2px #8b8b8b;
          border: 2px solid #494949;
          position: relative;
        \`;
      
        const CloseBtn = styled.span\`
          position: absolute;
          top: -48px;
          right: -10px;
          color: #c1c1c1;
          font-size: 34px;
          cursor: pointer;
        
          &:hover {
            transition: color 0.3s ease;
            color: white;
          }
        
          &:after {
            content: '×';
          }
        \`;
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Parent component has a button to show the modal window via state,
          which is passed to the modal component.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Parent() {
          const [showModalWindowState, setShowModalWindowState] = useState(false);
          return (
            <div>
              <div>Parent component</div>
              <button onClick={() => setShowModalWindowState(true)}>
                Show modal window
              </button>
              {showModalWindowState && (
                <Modal
                  showModalWindowState={showModalWindowState}
                  setShowModalWindowState={setShowModalWindowState}
                />
              )}
            </div>
          );
        }
      `,
    },
    {
      type: 'text',
      val: (
        <>
          In modal window component we can close it with onClick event on grey background layer  & on close button.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          On initial render with <CodeSpan>useEffect()</CodeSpan> we prevent scroll on body with its width fix to prevent jump due to srollbar disappear.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We also listen for a <kbd>Escape</kbd> keypress to close the modal window.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          On component unmount we clean our code brought by <i>useEffect</i>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Modal(props) {
          useEffect(() => {
            // save body width to avoid jumping when scroll bar get hidden
            const bodyWidth = window.getComputedStyle(document.body).width;
            document.body.style.overflowY = 'hidden';
            document.body.style.width = bodyWidth;
        
            // close modal window on Escape key
            function closeModalWindowOnEscape(e) {
              if (e.key === 'Escape') props.setShowModalWindowState(false);
            }
            document.addEventListener('keydown', closeModalWindowOnEscape);
        
            return () => {
              document.body.style.overflowY = 'auto';
              document.body.style.width = 'auto';
              document.removeEventListener('keydown', closeModalWindowOnEscape);
            };
          }, []);
        
          return (
            <ModalBkg onClick={() => props.setShowModalWindowState(false)}>
              <Container>
                Modal child component
                <CloseBtn onClick={() => props.setShowModalWindowState(false)} />
              </Container>
            </ModalBkg>
          );
        }
      `,
    },
    {
      type: 'text',
      val: 'Complete code.'
    },
    {
      type: 'code',
      val: `
        import React, { useEffect, useState } from 'react';
        import styled from 'styled-components';
        import { CodeSpan } from '../components/post/CodeSpan';
        
        function Parent() {
          const [showModalWindowState, setShowModalWindowState] = useState(false);
          return (
            <div>
              <div>Parent component</div>
              <button onClick={() => setShowModalWindowState(true)}>
                Show modal window
              </button>
              {showModalWindowState && (
                <Modal
                  showModalWindowState={showModalWindowState}
                  setShowModalWindowState={setShowModalWindowState}
                />
              )}
            </div>
          );
        }
        
        function Modal(props) {
          useEffect(() => {
            // save body width to avoid jumping when scroll bar get hidden
            const bodyWidth = window.getComputedStyle(document.body).width;
            document.body.style.overflowY = 'hidden';
            document.body.style.width = bodyWidth;
        
            // close modal window on Escape key
            function closeModalWindowOnEscape(e) {
              if (e.key === 'Escape') props.setShowModalWindowState(false);
            }
            document.addEventListener('keydown', closeModalWindowOnEscape);
        
            return () => {
              document.body.style.overflowY = 'auto';
              document.body.style.width = 'auto';
              document.removeEventListener('keydown', closeModalWindowOnEscape);
            };
          }, []);
        
          return (
            <ModalBkg onClick={() => props.setShowModalWindowState(false)}>
              <Container>
                Modal child component
                <CloseBtn onClick={() => props.setShowModalWindowState(false)} />
              </Container>
            </ModalBkg>
          );
        }
        
        const ModalBkg = styled.div\`
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: #000000b5;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        \`;
        
        const Container = styled.div\`
          background-color: #e2e2e2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 13px 2px #8b8b8b;
          border: 2px solid #494949;
          position: relative;
        \`;
        
        const CloseBtn = styled.span\`
          position: absolute;
          top: -48px;
          right: -10px;
          color: #c1c1c1;
          font-size: 34px;
          cursor: pointer;
        
          &:hover {
            transition: color 0.3s ease;
            color: white;
          }
        
          &:after {
            content: '×';
          }
        \`;
        
        const toRender = <Parent />;
      `
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
