export default function typedWords(state = [], action) {
  const nodes = document.querySelector('#input')?.childNodes;
  if (!nodes) return []
  let wordsArr = [];
  let strBetweenQuotationMarks;
  let data;

  nodes.forEach(function (el) {
    if(!el) return
    if (el.nodeType !== Node.TEXT_NODE) return
    data = el?.data
    if(!data) return
    // get text between quotation marks
    strBetweenQuotationMarks = data.match(/(?<=")(?:\\.|[^"\\])*(?=")/g)
    if (strBetweenQuotationMarks && strBetweenQuotationMarks.length) wordsArr.push(...strBetweenQuotationMarks);
    data = data.replaceAll(`"`, ``)
    
    // get all words separately
    wordsArr.push(...data.trim().toLowerCase().split(/\s+/));
  });
  wordsArr = [...new Set(wordsArr)].filter(el => el !== '');

  if (action.type === 'get words from input') return wordsArr;
  if (action.type === 'forget words from input') return [];
  return state;
}
