document.getElementById('roll').addEventListener('click', exalted)
const resultInput = document.getElementById('result')
const logsInput = document.getElementById('logBox')
const diceInput = document.getElementById('diceInput')


  const log = []
function exaltedD10(){
  const d10 = Math.floor(Math.random()*10 + 1)
  let result = ''
  if(d10 == 10){
    const print = 2
    resultInput.style.backgroundColor = '#ff0f'
    result = 'Two Successes'
    console.log(d10 + ' | ' + result)
    log.unshift(print)
  }else if(d10 >= 7){
    resultInput.style.backgroundColor = '#1b0f'
    const print = 1
    result = 'Success'
    console.log(d10 + ' | ' + result)
    log.unshift(print)
  }else{
    resultInput.style.backgroundColor = '#ff0000'
    const print = 0
    result = 'Fail'
    console.log(d10 + ' | ' + result)
    log.unshift(print)
  }
  logsInput.value = log
  resultInput.value = d10
  return d10 
  
}

function exalted(){
for(let i = 1; i <= diceInput.value; i++){
  exaltedD10()
}

}
