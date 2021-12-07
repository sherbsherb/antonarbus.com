export function isClickedElInsideThisEl(clickedEl, thisEl) {
  if (!thisEl) return
  return !!thisEl.contains(clickedEl)
}
