export function isClickedElInsideThisEl(clickedEl, thisEl) {
  return thisEl.contains(clickedEl) ? true : false
}