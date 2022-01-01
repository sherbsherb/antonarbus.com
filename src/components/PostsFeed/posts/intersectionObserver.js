import React from 'react'
import { Lnk } from '../components/Lnk'

function Component() {
  const ref = React.useRef(null)
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    const target = ref.current
    const options = {
      // element that is used as the viewport for checking visibility of the target
      // default is the browser viewport
      root: document.documentElement,
      // margin around the root, grow or shrink bounding box before computing intersections
      // default 0
      rootMargin: '0px',
      // observer triggers at 70% of targets visibility
      // default 0 - means as soon as target gets visible
      threshold: 0.7,
    }

    function callback(entries, observer) {
      // entries - target elements
      // cb is triggered when el goes in & out of the view
      // ignore going out & trigger cb only when div comes into the view
      if (!entries[0].isIntersecting) return
      console.log('intersected')
      setState(prev => prev + 1)
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(target)

    return () => {
      // Stop watching for intersection events on a specific target Element.
      observer.unobserve(target)
      // Stop observing threshold events on all target elements.
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div style={{ height: '200px', width: '300px' }}>
        <div style={{ height: '250px', background: 'grey' }}>Scroll me</div>
        <div style={{ background: 'OldLace' }}>Observer intersected x{state} times</div>
        <div style={{ height: '100px', background: 'LightPink ' }} ref={ref}>Target element</div>
      </div>
    </>
  )
}

const toRender = <Component />

export const intersectionObserver = {
  title: <>Intersection observer</>,
  date: '2021.11.10',
  tagsArr: ['JavaScript', 'vanilla'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
            Intersection observer
          </Lnk>{' '}
          allows to call a function when an element intersects specified parent element.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { Lnk } from '../components/Post/Lnk';

        function Component() {
          const ref = React.useRef(null);
          const [state, setState] = React.useState(0)

          React.useEffect(() => {
            const target = ref.current;
            const options = {
              // element that is used as the viewport for checking visibility of the target 
              // default is the browser viewport
              root: document.documentElement, 
              // margin around the root, grow or shrink bounding box before computing intersections 
              // default 0
              rootMargin: '0px', 
              // observer triggers at 70% of targets visibility 
              // default 0 - means as soon as target gets visible
              threshold: .7, 
            };

            function callback(entries, observer) {
              // entries - target elements
              // cb is triggered when el goes in & out of the view
              // ignore going out & trigger cb only when div comes into the view
              if (!entries[0].isIntersecting) return 
              console.log('intersected');
              setState(prev => prev + 1)
            }

            const observer = new IntersectionObserver(callback, options);
            observer.observe(target);

            return () => {
              // Stop watching for intersection events
              observer.unobserve(target);
              // Stop observing
              observer.disconnect();
            }
          }, []);

          return (
            <>
              <div style={{ height: '200px', width: "300px" }}>
                <div style={{ height: '250px', background: 'grey' }}>Scroll me</div>
                <div style={{ background: 'OldLace' }}>Observer intersected x{state} times</div>
                <div style={{ height: '100px', background: 'LightPink ' }} ref={ref}>Target element</div>
              </div>
            </>
          );
        }

        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
