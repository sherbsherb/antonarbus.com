// https://www.youtube.com/watch?v=IF6k0uZuypA

import './nav.css';

export function DropdownItem(props) {
  return (
    <a href="#1" className="menu-item" onClick={(e) => {
      e.stopPropagation()
      if (!props.forSubMenuId) return
      props.setShowElemWithId([...props.showElemWithId, props.forSubMenuId])
    }}>
      <span className="icon-button">{props.leftIcon}</span>
      {props.text}
      <span className="icon-button icon-right">{props.rightIcon}</span>
      {props.children}
    </a>
  )
}