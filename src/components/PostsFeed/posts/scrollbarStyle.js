import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

export const scrollbarStyle = {
  title: 'Scrollbar style',
  date: '2021.11.18',
  tagsArr: ['css', 'style'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Custom scrollbar can be done with css.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Here are the scrollbar styles of this page.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'css',
      val: `
      html {
        /* puts scrollbar on top of content, prevents container moving left when scrollbar pops up */}
        overflow: overlay;

        &::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
    
        &::-webkit-scrollbar-thumb {
          background: rgb(0 0 0 / 12%);
          border-radius: 5px;
          box-shadow: inset 0 0 6px rgb(0 0 0 / 10%);
    
          &:hover {
            background: rgb(0 0 0 / 20%);
          }
        }
    
        &::-webkit-scrollbar-track {
          background: rgb(0 0 0 / 5%);
        }
      }
      `
    },
  ],
}
