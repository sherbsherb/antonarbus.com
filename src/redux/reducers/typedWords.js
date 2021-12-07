export default function typedWords(state = [], action) {
  const nodes = document.querySelector('#input')?.childNodes
  if (!nodes) return []
  let wordsArr = []
  let textInQuotesArr
  let str

  nodes.forEach(function(el) {
    if (el.nodeType !== Node.TEXT_NODE) return
    str = el.data
    // get text between quotation marks
    textInQuotesArr = str.match(/(['"])(?:(?!\1|\\).|\\.)*\1/g)
    if (textInQuotesArr && textInQuotesArr.length) {
      // clean from quotes
      textInQuotesArr = textInQuotesArr.map(el => el.replace(/["']/g, ''))
      wordsArr.push(...textInQuotesArr)
    }

    // get all words separately
    wordsArr.push(...str.replace(/["']/g, '').trim().toLowerCase().split(/\s+/))
  })

  wordsArr = [...new Set(wordsArr)].filter(el => el !== '')

  if (action.type === 'get words from input') return wordsArr
  if (action.type === 'forget words from input') return []
  return state
}
