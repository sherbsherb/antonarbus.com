import './nav.css';

export function NavItem(props) {
  return (
    <li 
      className="nav-item" 
      onClick={(e) => {
        e.stopPropagation()

    
        const navItemWithoutMenu = !props.forMenuId
        if(navItemWithoutMenu) return


        // ! menu not closing on adjacent navItem click
        const menuIsOpened = props.showElemWithId.length
        if(menuIsOpened) {
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