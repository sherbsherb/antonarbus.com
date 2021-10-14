export default function typedWords(state = [], action) {
  const nodes = document.querySelector('#input')?.childNodes;
  if (!nodes) return []
  let wordsArr = [];

  nodes.forEach(function (el) {
    if (el.nodeType === Node.TEXT_NODE)
      wordsArr.push(...el.data.trim().toLowerCase().split(/\s+/));
  });
  wordsArr = [...new Set(wordsArr)].filter(el => el !== '');

  if (action.type === 'store words from input') return wordsArr;
  return state;
}
