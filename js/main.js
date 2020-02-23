class BinaryString {
    constructor (value) {
        this.value = value
    }

    ToDecimal() {
        return parseInt(this.value, 2).toString(10)
    }

    replaceAll(target, search, replacement) {
        return target.split(search).join(replacement)
    }

    isValid() {
        let excludeOnes = this.replaceAll(this.value, "1", "")
        let excludeOnesAndZeros = this.replaceAll(excludeOnes, "0", "")
        return excludeOnesAndZeros.length == 0
    }
}

const inputBinary = document.getElementById("input-binary")
const btnConvert = document.getElementById("btn-convert")

const error = document.getElementById("error")
const result = document.getElementById("result")

const defaultErrorMessage = error.textContent

btnConvert.onclick = function (e) {
    e.preventDefault()
    
    if (inputBinary.value.length === 0) {
        error.textContent = "Please type a binary number"
        error.style.display = "block"
        return
    }

    let binaryString = new BinaryString(inputBinary.value)
    
    if (binaryString.isValid()) {
        result.textContent = binaryString.ToDecimal()        
        error.style.display = "none"
    } else {
        error.textContent = defaultErrorMessage
        error.style.display = "block"
    }   
}