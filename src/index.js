const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tenners = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];


module.exports = function toReadable (number) {

    if (number < 100) {
        return tenner(number)
    } else {
        return hundreds(number)
    }
}

function tenner(value) {
    if (value < 20) {
        return numbers[value]
    }
    else if (value % 10 === 0) {
        return tenners[value / 10]
    } else {
      let tenner = Math.floor(value/10)
      return tenners[tenner] + ' ' + numbers[value % 10]
    }  
}

function hundreds(value) {
    if (value % 100 === 0) {
        return `${numbers[value / 100]} hundred`
    } else {
    let hundreds = Math.floor(value/100)
    return `${numbers[hundreds]} hundred ` + tenner(value % 100)
    }
}