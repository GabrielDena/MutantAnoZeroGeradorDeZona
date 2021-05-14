const _ = require('lodash')

// Dados
const dadoD6 = () => {
    const d = _.random(1,6)
    return Math.floor(d)
}

const dadoD66 = () => {
    let d1 = dadoD6().toString()
    let d2 = dadoD6().toString()
    let dado = d1 + d2
    return dado
}

const dadoD666 = () =>{
    let d1 = dadoD6().toString()
    let d2 = dadoD6().toString()
    let d3 = dadoD6().toString()
    let dado = d1 + d2 + d3
    return dado
}

module.exports = { dadoD6, dadoD66, dadoD666 }