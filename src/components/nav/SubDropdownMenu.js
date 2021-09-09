import './nav.css'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'

export function SubDropdownMenu(props) {
  if (!props.subMenuId) return
  if (!props.showElemWithId.includes(props.subMenuId)) return null
  return (
    <div className="sub-dropdown">
      <div 
        className="menu-item" 
        onClick={(e) => {
          e.stopPropagation()
          props.setShowElemWithId(props.showElemWithId.filter(id => id !== props.subMenuId))
        }}
      >
        <span className="icon-button"><ArrowIcon /></span>
        <span>Back</span>
      </div>
      {props.children}
    </div>
  )
}