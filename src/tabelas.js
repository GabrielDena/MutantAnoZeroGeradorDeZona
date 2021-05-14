// Tabelas

const ambienteDoSetor = [
    {d66: [11], Ambiente: "Campo Vitrificado", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [12], Ambiente: "Cratera Enorme", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [13, 14], Ambiente: "Deserto de Cinzas", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [15, 16, 21, 22], Ambiente: "Fábricas Abandonadas", Ruina: "Sim", Ameaca: "Sim", Artefatos: "Sim"},
    {d66: [23, 24], Ambiente: "Mata Densa", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [25, 26, 31], Ambiente: "Mata Morta", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [32, 33, 34], Ambiente: "Matagal", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [35, 36], Ambiente: "Pântano", Ruina: "Não", Ameaca: "Sim", Artefatos: "Não"},
    {d66: [41, 42], Ambiente: "Povoado", Ruina: " ", Ameaca: " ", Artefatos: " "},
    {d66: [43, 44, 45], Ambiente: "Ruinas Desabando", Ruina: "Sim", Ameaca: "Sim", Artefatos: "Sim"},
    {d66: [46, 51, 52, 53, 54], Ambiente: "Ruinas Deterioradas", Ruina: "Sim", Ameaca: "Sim", Artefatos: "Sim"},
    {d66: [55, 56, 61], Ambiente: "Ruinas Encobertas", Ruina: "Sim", Ameaca: "Sim", Artefatos: "Sim"},
    {d66: [62, 63, 64, 65, 66], Ambiente: "Ruinas Intactas", Ruina: "Sim", Ameaca: "Sim", Artefatos: "Sim"},
]

const ruinasNormais = [
    {d66: [11], Ruina: "Abrigo"},
    {d66: [12], Ruina: "Arranha-Céus"},
    {d66: [13], Ruina: "Avião Caído"},
    {d66: [14], Ruina: "Bairro Residencial"},
    {d66: [15], Ruina: "Campo de Batalha"},
    {d66: [16], Ruina: "Centro Esportivo"},
    {d66: [21], Ruina: "Cinema"},
    {d66: [22], Ruina: "Cratera"},
    {d66: [23], Ruina: "Delegacia de Polícia"},
    {d66: [24], Ruina: "Edifício de Escritórios"},
    {d66: [25], Ruina: "Escola"},
    {d66: [26], Ruina: "Estação de Metrô"},
    {d66: [31], Ruina: "Estação de Rádio"},
    {d66: [32], Ruina: "Estação de Trem"},
    {d66: [33], Ruina: "Estacionamento"},
    {d66: [34], Ruina: "Hospital"},
    {d66: [35], Ruina: "Igreja"},
    {d66: [36], Ruina: "Lanchonete Fast-Food"},
    {d66: [41], Ruina: "Loja de Caça"},
    {d66: [42], Ruina: "Mansão Arruinada"},
    {d66: [43], Ruina: "Marina"},
    {d66: [44], Ruina: "Museu"},
    {d66: [45], Ruina: "Parque de Diversões"},
    {d66: [46], Ruina: "Parque Encoberto"},
    {d66: [51], Ruina: "Piscina Pública"},
    {d66: [52], Ruina: "Playgroud"},
    {d66: [53], Ruina: "Ponte Arruinada"},
    {d66: [54], Ruina: "Posto de Gasolina"},
    {d66: [55], Ruina: "Rodovia"},
    {d66: [56], Ruina: "Rodoviária"},
    {d66: [61], Ruina: "Shopping"},
    {d66: [62], Ruina: "Subúrbio"},
    {d66: [63], Ruina: "Supermercado"},
    {d66: [64], Ruina: "Tanque"},
    {d66: [65], Ruina: "Teatro"},
    {d66: [66], Ruina: "Túnel"}
]

const ruinasIndustriais = [
    {d66: [11, 12, 13], Ruina: "Base Militar"},
    {d66: [14, 15, 16], Ruina: "Clube de Tiro"},
    {d66: [21, 22, 23], Ruina: "Estação Depuradora"},
    {d66: [24, 25, 26], Ruina: "Fábrica"},
    {d66: [31, 32, 33], Ruina: "Linha Elétrica"},
    {d66: [34, 35, 36], Ruina: "Lixão"},
    {d66: [41, 42, 43], Ruina: "Moinho de Vento"},
    {d66: [44, 45, 46], Ruina: "Navio Encalhado"},
    {d66: [51, 52, 53], Ruina: "Refinaria"},
    {d66: [54, 55, 56], Ruina: "Tamque de Petróleo"},
    {d66: [61, 62, 63], Ruina: "Torre de Rádio"},
    {d66: [64, 65, 66], Ruina: "Tubulação"},
]

const nivelPodridao = [
    {d66: [11, 12], nivel: 0, descricao: "Oásis de Podridão: Os PJs estão seguros da Podridão aqui." },
    {d66: [13, 14, 15, 16, 
        21, 22, 23, 24, 25, 26,
        31, 32, 33, 34, 35, 36,
        41, 42, 43, 44, 45, 46,
        51, 52, 53, 54, 55], nivel: 1, descricao: "Podridão Fraca. Os PJs sofrem um Ponto de Podridão por dia."},
    {d66: [56, 
        61, 62, 63, 64, 65, 66], nivel: 2, descricao: "Área de Podridão Forte. Os PJs sofrem um Ponto de Podridão por hora."}
]

const tiposDeAmeaca = [
    {d6: [1, 2], Tipo: "Humanoide"},
    {d6: [3, 4, 5], Tipo: "Monstro"},
    {d6: [6], Tipo: "Fenômeno"}
]

const ameacaHumanoide = [
    {d66: [11], Ameaca: "Amnésica"},
    {d66: [12, 13, 14], Ameaca: "Canibais"},
    {d66: [15, 16, 21, 22], Ameaca: "Carniçais da Zona"},
    {d66: [23, 24, 25, 26], Ameaca: "Cultistas da Perdição"},
    {d66: [31, 32], Ameaca: "Demolidores"},
    {d66: [33, 34, 35], Ameaca: "Expedição de outra Arca"},
    {d66: [36, 41], Ameaca: "Feras Mutantes"},
    {d66: [42, 43, 44], Ameaca: "Helldrivers"},
    {d66: [45, 46], Ameaca: "Mercador de Água"},
    {d66: [51, 52, 53], Ameaca: "Morlocks"},
    {d66: [54, 55, 56], Ameaca: "Mutantes Exilados"},
    {d66: [61, 62], Ameaca: "Nômades"},
    {d66: [63, 64], Ameaca: "Oráculo de Sucata"},
    {d66: [65, 66], Ameaca: "Patrulha da Arca"}
]

const ameacaMonstruosa = [
    {d66: [11, 12], Ameaca: "Aranha da Zona"},
    {d66: [13], Ameaca: "Árvore Assassina"},
    {d66: [14], Ameaca: "Autômato"},
    {d66: [15, 16], Ameaca: "Bestamargas"},
    {d66: [21, 23], Ameaca: "Cães da Zona"},
    {d66: [24], Ameaca: "Caravela Área"},
    {d66: [25, 26], Ameaca: "Corvos Sucateiros"},
    {d66: [31, 32], Ameaca: "Devorador"},
    {d66: [33], Ameaca: "Enxames de Vermes"},
    {d66: [34], Ameaca: "Flores-Pesadelo"},
    {d66: [35, 36], Ameaca: "Formigas da Podridão"},
    {d66: [41], Ameaca: "Fungo Parasita"},
    {d66: [42], Ameaca: "Gavião do Lixo"},
    {d66: [43, 44], Ameaca: "Grama Ácida"},
    {d66: [45], Ameaca: "Javardo"},
    {d66: [46], Ameaca: "Mosquitos Mentais"},
    {d66: [51], Ameaca: "Pastejadores"},
    {d66: [52], Ameaca: "Peixe da Podridão"},
    {d66: [53], Ameaca: "Peixe-Tripa (água infectada)"},
    {d66: [54, 55, 56], Ameaca: "Ratos da Zona"},
    {d66: [61, 62], Ameaca: "Sanguessugas da Zona"},
    {d66: [63, 64], Ameaca: "Verme Mortal"},
    {d66: [65, 66], Ameaca: "Vespas da Zona"}
]

const ameacaFenomeno = [
    {d66: [11, 12], Ameaca: "Armas Não-Deflagradas"},
    {d66: [13], Ameaca: "Campo de Inércia"},
    {d66: [14, 15], Ameaca: "Campo Magnético"},
    {d66: [16, 21, 22], Ameaca: "Chuva Ácida"},
    {d66: [23, 24], Ameaca: "Cratera Súbita"},
    {d66: [25, 26, 31], Ameaca: "Foco de Podridão"},
    {d66: [32], Ameaca: "Fogo Fátuo"},
    {d66: [33, 34], Ameaca: "Luzes Noturnas"},
    {d66: [35], Ameaca: "Miragem"},
    {d66: [36], Ameaca: "Obelisco"},
    {d66: [41, 42], Ameaca: "Pilares de Luz"},
    {d66: [43, 44], Ameaca: "Poças de Lama"},
    {d66: [45, 46], Ameaca: "Queda de Temperatura/Onde de Calor"},
    {d66: [51, 52, 53], Ameaca: "Smog da Zona"},
    {d66: [54, 55], Ameaca: "Tempestade de Cinzas"},
    {d66: [56, 61], Ameaca: "Tempestade Elétrica"},
    {d66: [62, 63], Ameaca: "Tornado de Poeira"},
    {d66: [64], Ameaca: "Vácuo"},
    {d66: [65, 66], Ameaca: "Vento Podre"}
]

const artefatos = [
    "Analgésicos", "Antidepressivos", "Arco e Flecha", "Automóvel", "Bateria", "Besta", "Bicicleta",
    "Binóculos", "Bomba de Fumaça", "Bombona", "Bússola", "Câmera de Vídeo (Metatrama)", "Canoa",
    "Capacete de Hóquei", "Cartão de Identificação (Metatrama)", "Chave Inglesa", "Colchão de Ar",
    "Colete de Kevlar", "Comprimidos Energéticos", "Diário", "Equipamento de Mergulho", "Escopeta",
    "Estimulantes", "Frasco de Perfume", "Fuzil de Assalto", "Gerador", "Gibi", "Granada de Mão",
    "Guarda-Chuva", "Katana", "Lancha", "Lanterna", "Lata de Refrigerante", "Mapa da Zona", 
    "Máscara de Gás", "Motoneta", "Óculos Escuros", "Pistola Semi-Automática", "Quadro",
    "REGEN", "Revista", "Revólver", "Rifle de Caça", "Serra Elétrica", "Sinalizador", 
    "Smoking", "Toca Fitas (Metatrama)", "Traje de Proteção", "Vestido", "Violão"
]

module.exports = {
    ambienteDoSetor: ambienteDoSetor,
    ruinasNormais: ruinasNormais,
    ruinasIndustriais: ruinasIndustriais,
    nivelPodridao: nivelPodridao,
    tiposDeAmeaca: tiposDeAmeaca,
    ameacaHumanoide: ameacaHumanoide,
    ameacaMonstruosa: ameacaMonstruosa,
    ameacaFenomeno: ameacaFenomeno,
    artefatos: artefatos
}