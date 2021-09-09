import './nav.css';

export function NavItem(props) {
  return (
    <li 
      className="nav-item" 
      onClick={(e) => {
        e.stopPropagation()
        if(!props.forMenuId) return
        if(props.showElemWithId.length) {
          props.setShowElemWithId([])
          return 
        }
        props.setShowElemWithId([...props.showElemWithId, props.forMenuId])
      }}
    >
      <a href="#1" className="icon-button">{props.icon}</a>
      {props.children}
    </li>
  )
}