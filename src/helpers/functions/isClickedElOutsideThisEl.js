export function isClickedElOutsideThisEl(clickedEl, thisEl) {
  if (!thisEl) return 
  return thisEl.contains(clickedEl) ? false : true
}