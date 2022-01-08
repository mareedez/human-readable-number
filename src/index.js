const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tenners = ['', 'ten', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '
];


module.exports = function toReadable (number) {

    if (number < 100) {
        return tenner(number)
    } else {
        return hundreds(number) + tenner(number % 100)
    }
}

function tenner(value) {
    if (value < 20) {
        return numbers[value]
    } else {
      let tenner = Math.floor(value/10)
      return tenners[tenner] + numbers[value % 10]
    }  
}

function hundreds(value) {
    let hundreds = Math.floor(value/100)
    return `${numbers[hundreds]} hundred `
}