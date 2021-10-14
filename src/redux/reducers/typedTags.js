export default function typedTags(state = [], action) {

  const nodes = document.querySelector('#input')?.childNodes;
  if (!nodes) return []
  let tagsArr = [];

  nodes.forEach(function (el) {
    if (el.nodeType === Node.ELEMENT_NODE)
      tagsArr.push(el.innerText.toLowerCase());
  });
  tagsArr = [...new Set(tagsArr)]

  if (action.type === 'get tags from input') return tagsArr;
  if (action.type === 'forget tags from input') return [];
  return state;
}
