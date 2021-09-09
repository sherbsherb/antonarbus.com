import './App.css';

import {NavBar} from './components/nav/NavBar.js';
import {NavItem} from './components/nav/NavItem.js';
import {DropdownMenu} from './components/nav/DropdownMenu.js';
import {DropdownItem} from './components/nav/DropdownItem.js';
import {SubDropdownMenu} from './components/nav/SubDropdownMenu.js';

import { ReactComponent as PlusIcon } from './components/nav/icons/plus.svg';
import { ReactComponent as CogIcon } from './components/nav/icons/cog.svg';
import { ReactComponent as ChevronIcon } from './components/nav/icons/chevron.svg';
// import { ReactComponent as BellIcon } from './components/nav/icons/bell.svg';
// import { ReactComponent as MessengerIcon } from './components/nav/icons/messenger.svg';
// import { ReactComponent as CaretIcon } from './components/nav/icons/caret.svg';
// import { ReactComponent as ArrowIcon } from './components/nav/icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './components/nav/icons/bolt.svg';

import { useState } from "react"

function App() {
  const [showElemWithId, setShowElemWithId] = useState([])
  return (
    <div
      className="App"
      onClick={(e) => {
        setShowElemWithId([]);
      }}
    >
      <NavBar>
        <NavItem
          icon={<PlusIcon />}
          forMenuId={'id1'}
          showElemWithId={showElemWithId}
          setShowElemWithId={setShowElemWithId}
        >
          <DropdownMenu menuId={'id1'} showElemWithId={showElemWithId}>
            <DropdownItem text={'text1'} />
            <DropdownItem leftIcon={'😆'} text={'text2'} />
            <DropdownItem leftIcon={<CogIcon />} text={'text3'} />
            <DropdownItem leftIcon={<CogIcon />} text={'text4'} />
            <DropdownItem leftIcon={<CogIcon />} text={'text5'} />
            <DropdownItem
              leftIcon={<CogIcon />}
              text={'sub-menu'}
              rightIcon={<ChevronIcon />}
              forSubMenuId={'id2'}
              showElemWithId={showElemWithId}
              setShowElemWithId={setShowElemWithId}
            >
              <SubDropdownMenu
                subMenuId={'id2'}
                showElemWithId={showElemWithId}
                setShowElemWithId={setShowElemWithId}
              >
                <DropdownItem leftIcon={'😆'} text={'text6'} />
                <DropdownItem leftIcon={'😆'} text={'text7'} />
                <DropdownItem
                  leftIcon={<CogIcon />}
                  text={'sub-menu'}
                  rightIcon={<ChevronIcon />}
                  forSubMenuId={'id3'}
                  showElemWithId={showElemWithId}
                  setShowElemWithId={setShowElemWithId}
                >
                  <SubDropdownMenu
                    subMenuId={'id3'}
                    showElemWithId={showElemWithId}
                    setShowElemWithId={setShowElemWithId}
                  >
                    <DropdownItem leftIcon={'😆'} text={'text7'} />
                    <DropdownItem leftIcon={'😆'} text={'text8'} />
                  </SubDropdownMenu>
                </DropdownItem>
              </SubDropdownMenu>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem icon="😀"></NavItem>
        <NavItem icon="😡"></NavItem>
        <NavItem icon="😇"></NavItem>
      </NavBar>

      <main>
        <p>First React website for Anton</p>
      </main>
    </div>
  );
}

export default App;