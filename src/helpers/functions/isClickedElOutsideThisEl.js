export function isClickedElOutsideThisEl(clickedEl, thisEl) {
  return thisEl.contains(clickedEl) ? false : true
}