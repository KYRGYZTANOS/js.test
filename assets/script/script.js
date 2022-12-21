

const btn = document.getElementById('calc')
const resultParagraph = document.getElementById('result')

btn.addEventListener('click',() => {
  const kgz = document.getElementsByTagName('input')[0].value
  const dollar = document.getElementsByTagName('input')[1].value
  const result = Number(kgz) / Number(dollar)
  resultParagraph.innerText = result.toFixed(2)
})

