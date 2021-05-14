const porta = 3003

const dados = require("./dados")
const tabelas = require("./tabelas")
const _ = require("lodash")
const express = require("express")
const app = express()

app.use(express.urlencoded({extended: true}))

// Geral

let filtrarTabelas = (tabelaEscolhida, dadoEscolhido) => {
    let dadoFiltrado = tabelaEscolhida.reduce((acumulador, atual) => acumulador.d66
    .filter(dado => dado == dadoEscolhido) == dadoEscolhido ? acumulador = acumulador : acumulador = atual)
    return dadoFiltrado
}

// // Escolhe quantidade de ameaças e artefatos

const erroCritico = (valor) => valor === 1
const acertoCritico = (valor) => valor === 6

let quantidades = null

const nivelAmeacas = (nivel = 0) => {
    let dadosAmeacas = [ ]
    for (i = 0; i < nivel; i++){
        dadosAmeacas.push(dados.dadoD6())
    }

    let qtdAmeacas = dadosAmeacas.filter(erroCritico)
    let qtdArtefatos = dadosAmeacas.filter(acertoCritico)
    return quantidades = {Ameacas: qtdAmeacas.length, Artefatos: qtdArtefatos.length} 
}


// Escolhe Ameaças 

const escolherAmeacaZona = quantidadeDeAmeacas => {
    let ameacasNaZona = []
    if (quantidadeDeAmeacas === 0){
        ameacasNaZona.push("Não há nenhuma ameaça nesta área.")
    } else {
        for (let i = 0; i < quantidadeDeAmeacas; i++) {
            let dadoTipoAmeaca = dados.dadoD6()
            let tipoDaAmeaca = tabelas.tiposDeAmeaca.reduce((acumulador, atual) => acumulador.d6
            .filter(dado => dado == dadoTipoAmeaca) == dadoTipoAmeaca ? acumulador = acumulador : acumulador = atual)
            let dadoAmeaca = dados.dadoD66()
            if (tipoDaAmeaca.Tipo == "Humanoide") {
                let ameacaHumanoide = filtrarTabelas(tabelas.ameacaHumanoide, dadoAmeaca)
                ameacasNaZona.push({Tipo: tipoDaAmeaca.Tipo, Ameaca: ameacaHumanoide.Ameaca})
            } else if (tipoDaAmeaca.Tipo == "Fenômeno") {
                let ameacaFenomeno = filtrarTabelas(tabelas.ameacaFenomeno, dadoAmeaca)
                ameacasNaZona.push({Tipo: tipoDaAmeaca.Tipo, Ameaca: ameacaFenomeno.Ameaca})
            } else if (tipoDaAmeaca.Tipo == "Monstro") {
                let ameacaMonstruosa = filtrarTabelas(tabelas.ameacaMonstruosa, dadoAmeaca)
                ameacasNaZona.push({Tipo: tipoDaAmeaca.Tipo, Ameaca: ameacaMonstruosa.Ameaca})
            } else {
                ameacasNaZona.push(`${tipoDaAmeaca} ERRO!`)
            }
        }
    }
    return ameacasNaZona
}

// Escolhe os artefatos

const gerarIndiceArtefato = () => d = _.random(1, 50)

const escolherArtefatos = quantidadeDeArtefatos => {
    let artefatosEscolhidos = []
    if (quantidadeDeArtefatos === 0){
        artefatosEscolhidos.push("Nenhum artefato nesta área.")
    } else {
        for (let i = 0; i < quantidadeDeArtefatos; i++){
            let indiceDeArtefato = gerarIndiceArtefato()
            artefatosEscolhidos.push(tabelas.artefatos.filter((elemento, i) => i === indiceDeArtefato))
        }
    }
    return artefatosEscolhidos
}


function gerarZona() {
    // Gera Ambiente
    let dadoAmbiente = dados.dadoD66()
    let ambienteEscolhido = filtrarTabelas(tabelas.ambienteDoSetor, dadoAmbiente)

    // Gera Ruína
    let dadoRuina = dados.dadoD66()
    let ruinaNormal = filtrarTabelas(tabelas.ruinasNormais, dadoRuina)
    let ruinaIndustrial = filtrarTabelas(tabelas.ruinasIndustriais, dadoRuina)

    // Gera Podridão
    let dadoPodridao = dados.dadoD66
    let nivelDePodridao = filtrarTabelas(tabelas.nivelPodridao, dadoPodridao)

    const frases = []
    frases.push(`Ambiente: ${ambienteEscolhido.Ambiente}. \nRuína: ${ambienteEscolhido.Ruina}.`)
    if (ambienteEscolhido.Ruina === "Sim") {
        frases.push(`Ruína Normal: ${ruinaNormal.Ruina}. \nRuína Idustrial: ${ruinaIndustrial.Ruina}`)
    }

    frases.push(`O nível de podridão é: ${nivelDePodridao.nivel}. \nSignifica: ${nivelDePodridao.descricao}`)
    
    frases.push(`Nesta zona há ${quantidades.Ameacas} ameaças. \nNesta zona há ${quantidades.Artefatos} artefatos.`)
   
    if (!!quantidades.Ameacas){
        frases.push((`\nAmeaças: \n${escolherAmeacaZona(quantidades.Ameacas)
            .map((objeto, i) => `${i+1}) ${objeto.Tipo} - ${objeto.Ameaca}`)}`).replace(/,/gi, "\n"))
    } else {
        frases.push((`\nAmeaças: \n${escolherAmeacaZona(quantidades.Ameacas)
            .map((objeto, i) => `${i+1}) ${objeto}`)}`).replace(/,/gi, "\n"))
    } 

    frases.push((`\nArtefatos: \n${escolherArtefatos(quantidades.Artefatos)
        .map((elemento, i) => `${i+1}) ${elemento.toString()}`)}`).replace(/,/gi, "\n"))

    return frases.toString().replace(/,/gi, "\n")
}

// API

app.post('/zona', (req, res, next) => {
    nivelAmeacas(req.body.nivel)
    gerarZona()
    res.send(gerarZona())
})

app.get('/zona', (req, res, next) => {
    const zona = gerarZona()
    res.send(zona)
})

app.listen(porta, () => console.log(`Servidor executando na porta ${porta}`))