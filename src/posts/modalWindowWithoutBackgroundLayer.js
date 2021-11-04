import React from 'react';
import { useModalWithoutBackground } from '../helpers/functions/useModalWindowWithoutBackgroundLayer';

function Parent() {
  const [showModalState, openModal, Modal] = useModalWithoutBackground();
  return (
    <div>
      <div>Parent component</div>
      <button onClick={openModal}>Show modal window</button>
      {showModalState && <Modal>Modal child component</Modal>}
    </div>
  );
}

const toRender = <Parent />;

export const modalWindowWithoutBackgroundLayer = {
  title: 'Modal window without background layer',
  date: '2021.10.29',
  tagsArr: ['react', 'modal'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Modal window has a basic styling with fixed position and {' '}
          <span style={{fontSize: '30px',color: 'red', position: 'relative', top: '3px', cursor: 'pointer'}} >
            ×
          </span> close button.
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
        import { useModalWithoutBackground } from '../helpers/functions/useModalWindowWithoutBackgroundLayer';

        function Parent() {
          const [showModalState, openModal, Modal] = useModalWithoutBackground();
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
          Modal window and its control comes from the custom hook.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // useModalWindowWithBackgroundLayer.js
        export function useModalWithoutBackground() {

          const [showModalState, setShowModalState] = useState(false);
          const modalRef = useRef();
          
          const openModal = () => setShowModalState(true);
          const closeModal = () => setShowModalState(false);
        
          function Modal(props) {
        
            useEffect(() => {
              function closeModalOnEscape(e) {
                if (e.key === 'Escape') closeModal();
              }
        
              function isClickedElOutsideThisEl(clickedEl, thisEl) {
                return thisEl.contains(clickedEl) ? false : true;
              }
        
              function closeModalOnClickOutside(e) {
                const modalWindow = modalRef.current;
                const clickedEl = e.target;
                if (!modalWindow) return;
                if (isClickedElOutsideThisEl(clickedEl, modalWindow)) closeModal();
              }
        
              document.addEventListener('click', closeModalOnClickOutside);
              document.addEventListener('keydown', closeModalOnEscape);
        
              return () => {
                document.removeEventListener('click', closeModalOnClickOutside);
                document.removeEventListener('keydown', closeModalOnEscape);
              };
        
            }, [showModalState]);
        
            return (
              <Box ref={modalRef}>
                <CloseBtn onClick={closeModal} />
                {props.children}
              </Box>
            );
          }
        
          return [showModalState, openModal, Modal];
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
          On the modal window mount we start listening for click events to close the window.
          We close modal if click event target element is outside of modal element. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We also close the window on <kbd>Esc</kbd> button.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          On component unmount we clean our code from event listeners.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
