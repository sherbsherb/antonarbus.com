import React from 'react';
import { CodeSpan } from '../components/PostsFeed/components/CodeSpan';
import { useModalWithBackground } from '../helpers/functions/useModalWindowWithBackgroundLayer';

function Parent() {
  const [showModalState, openModal, Modal] = useModalWithBackground();
  return (
    <div>
      <div>Parent component</div>
      <button onClick={openModal}>Show modal window</button>
      {showModalState && <Modal>Modal child component</Modal>}
    </div>
  );
}

const toRender = <Parent />;

export const modalWindowWithBackgroundLayer = {
  title: 'Modal window with background layer',
  date: '2021.10.28',
  tagsArr: ['react', 'modal'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          In styled components let's make a gray transparent background layer with fixed
          position which covers whole screen. Content will be positioned 20hv from
          the top.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Modal window has just a basic styling with absolute positioned{' '}
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
          close button as a span in the right top corner.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Parent component has a button to show the modal window.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { useModalWithBackground } from '../helpers/functions/useModalWindowWithBackgroundLayer';

        function Parent() {
          const [showModalState, openModal, Modal] = useModalWithBackground();
          return (
            <div>
              <div>Parent component</div>
              <button onClick={openModal}>Show modal window</button>
              {showModalState && <Modal>Modal child component</Modal>}
            </div>
          );
        }
        const toRender = <Parent />;
      `,
    },
    {
      type: 'text',
      val: (
        <>
          Modal window and its control comes from custom hook.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // useModalWindowWithBackgroundLayer.js
        import React, { useEffect, useState } from 'react';
        import styled from 'styled-components';

        export function useModalWithBackground() {
          const [showModalState, setShowModalState] = useState(false);
          const openModal = () => setShowModalState(true)
          const closeModal = () => setShowModalState(false)

          function Modal(props) {
            // prevent body scroll & prevent jumping when scrollbar gets hidden
            document.body.style.width = window.getComputedStyle(document.body).width;
            document.body.style.overflowY = 'hidden';

            useEffect(() => {

              function closeModalOnEscape(e) {
                if (e.key === 'Escape') closeModal();
              }

              document.addEventListener('keydown', closeModalOnEscape);
              
              return () => {
                // on unmount put back scrolling & original width
                document.body.style.overflowY = 'auto';
                document.body.style.width = 'auto';
                // do not listen for Esc
                document.removeEventListener('keydown', closeModalOnEscape);
              };
          
            }, [showModalState]);
          
            return (
              <Bkg onClick={closeModal}>
                <Container onClick={e => e.stopPropagation()}>
                  <CloseBtn onClick={closeModal} />
                  {props.children}
                </Container>
              </Bkg>
            );
          }

          return [showModalState, openModal, Modal]
        }

        const Bkg = styled.div\`
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: #000000b5;
          display: flex;
          justify-content: center;
          /* align-items: center; */
          align-items: flex-start;
          padding-top: 20vh;
          z-index: 1000;
        \`;

        const Container = styled.div\`
          background-color: #e2e2e2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px 0px #8b8b8b;
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
          In modal window component we can close it with <i>onClick</i> event on
          the grey background layer & on the close button. <br />
          <br />
          To prevent <i>onClick</i> an event trigger on grey layer from bubbling we disable event propagation on modal window.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Before modal component renders we prevent body scroll and fix its width
          to avoid jumping due to scrollbar disappear.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          After initial render with <CodeSpan>useEffect()</CodeSpan> we launch
          listener for a <kbd>Esc</kbd> keypress to close the modal window.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          On component unmount we clean our code brought by <i>useEffect</i> and
          return auto body width.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
