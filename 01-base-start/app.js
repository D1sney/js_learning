const result = document.getElementById('result')
const input1 = document.getElementById('input-first')
const input2 = document.getElementById('input-second')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

function zeroCheck (sum) {
    result.style.fontSize = '10em'
    if (sum < 0) {
        result.style.color = 'red'
    } else if (sum == 7){
        result.style.color = 'blue'
    } else {
        result.style.color = 'green'
    }
}

plus.onclick = function () {
    result.textContent = Number(input1.value) + Number(input2.value)
    zeroCheck(result.textContent)
}

minus.onclick = function () {
    result.textContent = Number(input1.value) - Number(input2.value)
    zeroCheck(result.textContent)
    // console.log('hi')
    // window.alert('hi')
}