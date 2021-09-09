import './nav.css';

export function DropdownMenu(props) {
  if (!props.showElemWithId.includes(props.menuId)) return null
  return (
    <div className="dropdown">
      {props.children}
    </div>
  )
}