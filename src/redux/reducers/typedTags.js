export default function typedTags(state = [], action) {

  const nodes = document.querySelector('#input')?.childNodes;
  if (!nodes) return []
  let tagsArr = [];

  nodes.forEach(function (el) {
    if (el.nodeType === Node.ELEMENT_NODE)
      tagsArr.push(el.innerText.toLowerCase());
  });
  tagsArr = [...new Set(tagsArr)]

  if (action.type === 'store tags from input') return tagsArr;
  return state;
}
