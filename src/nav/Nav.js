import './Nav.css';
import { v4 as uuidv4 } from 'uuid';

const navItems = [
  {
    name: 'main',
    items: 'main',
  },
  {
    name: 'about',
    items: 'about',
  },
  {
    name: 'search',
    items: 'search',
  },
  {
    name: 'nested menu',
    items: [
      {
        name: 'item1',
        items: 'item1',
      },
      {
        name: 'item2',
        items: 'item2',
      },
      {
        name: 'item3',
        items: 'item3',
      },
    ],
  },
];

function liClickHandler(e) {
  console.log(e.target.innerText);
}

export default function Nav() {
  return (
    <nav>
      <div className="logo">Logo</div>
      <div className="main">
      <div className="cm-e-menu">
            <ul>
                <li className="topmenu">
                    <a>file</a>
                    <ul className="submenu">
                        <li><a>browse</a></li>
                        <li><a>new file</a></li>
                        <li><a>new folder</a></li>
                        <li className="divider"></li>
                        <li><a>save</a></li>
                        <li><a>save as</a></li>
                        <li><a>save all</a></li>
                        <li className="divider"></li>
                        <li><a>rename</a></li>
                        <li><a>delete</a></li>
                        <li className="divider"></li>
                        <li>
                            <a>close</a>
                            <ul className="submenu">
                                <li><a>current file</a></li>
                                <li className="divider"></li>
                                <li><a>files to the right</a></li>
                                <li><a>files to the left</a></li>
                                <li className="divider"></li>
                                <li>
                                    <a>all open files</a>
                                    <ul className="submenu">
                                        <li><a>current file</a></li>
                                        <li className="divider"></li>
                                        <li><a>files to the right</a></li>
                                        <li><a>files to the left</a></li>
                                        <li className="divider"></li>
                                        <li>
                                            <a>all open files</a>
                                            <ul className="submenu">
                                                <li><a>current file</a></li>
                                                <li className="divider"></li>
                                                <li><a>files to the right</a></li>
                                                <li><a>files to the left</a></li>
                                                <li className="divider"></li>
                                                <li><a>all open files</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>download</a>
                            <ul className="submenu">
                                <li><a>all files</a></li>
                                <li><a>current file</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="topmenu">
                    <a>edit</a>
                    <ul className="submenu">
                        <li><a>undo</a></li>
                        <li><a>redo</a></li>
                        <li className="divider"></li>
                        <li><a>copy</a></li>
                        <li><a>cut</a></li>
                        <li><a>paste</a></li>
                        <li className="divider"></li>
                        <li><a>select all</a></li>
                        <li><a>select line</a></li>
                    </ul>
                </li>
                <li className="topmenu">
                    <a>view</a>
                    <ul className="submenu">
                        <li><a>hide tabs</a></li>
                        <li><a>hide menu</a></li>
                        <li className="divider"></li>
                        <li><a>wordwrap</a></li>
                        <li><a>line numbers</a></li>
                        <li><a>fullscreen</a></li>
                        <li className="divider"></li>
                        <li><a>highlight active line</a></li>
                        <li>
                            <a>sidebar</a>
                            <ul className="submenu">
                                <li><a>hide sidebar</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="topmenu"><a>find</a></li>
                <li className="topmenu">
                    <a>help</a>
                    <ul className="submenu">
                        <li><a>support</a></li>
                        <li><a>documentation</a></li>
                        <li className="divider"></li>
                        <li><a>bug report</a></li>
                    </ul>
                </li>
                <li className="topmenu">
                    <a>settings</a>
                    <ul className="submenu">
                        <li>
                            <a>font</a>
                            <ul className="submenu">
                                <li><a>larger</a></li>
                                <li><a>smaller</a></li>
                                <li className="divider"></li>
                                <li><a>default</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>indentation</a>
                            <ul className="submenu">
                                <li><a>+1 space</a></li>
                                <li><a>-1 space</a></li>
                                <li className="divider"></li>
                                <li><a>default</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
      </div>
      <div className="hamburger"></div>
    </nav>
  );
}
