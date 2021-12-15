// Cartas do Super Trunfo 

let cartas = [
    (ak = {
        nome: "AK-47",
        imagem: "https://i.ibb.co/1RXBddJ/Sem-t-tulo.png",
        atributos: {
            Dano: 36,
            "Reload Time": "2.5s",
            "Fire Rate": "600 RPM",
            Penetração: "77.5%"
        }
    }),
    (awp = {
        nome: "AWP",
        imagem: "https://i.ibb.co/DpFQQKy/awp.png",
        atributos: {
            Dano: 115,
            "Reload Time": "3.7s",
            "Fire Rate": "41 RPM",
            Penetração: "97.5%"
        }
    }),
    (galil = {
        nome: "Galil AR",
        imagem: "https://i.ibb.co/R7X1SSq/galil.png",
        atributos: {
            Dano: 30,
            "Reload Time": "3.0s",
            "Fire Rate": "666 RPM",
            Penetração: "77.5%"
        }
    }),
    (m4a4 = {
        nome: "M4A4",
        imagem: "https://i.ibb.co/h9tBTYL/m4a4.png",
        atributos: {
            Dano: 33,
            "Reload Time": "3.1s",
            "Fire Rate": "666 RPM",
            Penetração: "70.0%"
        }
    }),
    (m4a1 = {
        nome: "M4A1-S",
        imagem: "https://i.ibb.co/LhMXtb8/m4a1.png",
        atributos: {
            Dano: 33,
            "Reload Time": "3.1s",
            "Fire Rate": "600 RPM",
            Penetração: "70.0%"
        }
    }),
    (famas = {
        nome: "Famas",
        imagem: "https://i.ibb.co/wNwqNBV/famas.png",
        atributos: {
            Dano: 30,
            "Reload Time": "3.3s",
            "Fire Rate": "666 RPM",
            Penetração: "70.0%"
        }
    }),
    (sg553 = {
        nome: "SG 553",
        imagem: "https://i.ibb.co/PcPwWHq/sg553.png",
        atributos: {
            Dano: 30,
            "Reload Time": "2.8s",
            "Fire Rate": "666 RPM",
            Penetração: "100.0%"
        }
    }),
    (aug = {
        nome: "AUG",
        imagem: "https://i.ibb.co/P513m5t/aug.png",
        atributos: {
            Dano: 28,
            "Reload Time": "3.8s",
            "Fire Rate": "666 RPM",
            Penetração: "90.0%"
        }
    }),
    (scout = {
        nome: "SSG 08",
        imagem: "https://i.ibb.co/M7f6R9m/scout.png",
        atributos: {
            Dano: 88,
            "Reload Time": "3.7s",
            "Fire Rate": "48 RPM",
            Penetração: "85.0%"
        }
    }),
    (deagle = {
        nome: "Desert Eagle",
        imagem: "https://i.ibb.co/BC37CpX/eagle.png",
        atributos: {
            Dano: 63,
            "Reload Time": "2.2s",
            "Fire Rate": "267 RPM",
            Penetração: "93.2%"
        }
    }),
    (scar20 = {
        nome: "SCAR-20",
        imagem: "https://i.ibb.co/yfrfy65/scar.png",
        atributos: {
            Dano: 80,
            "Reload Time": "3.1s",
            "Fire Rate": "240 RPM",
            Penetração: "82.5%"
        }
    }),
    (g3sg1 = {
        nome: "G3SG1",
        imagem: "https://i.ibb.co/Y8x6364/g3sg1.png",
        atributos: {
            Dano: 80,
            "Reload Time": "4.7s",
            "Fire Rate": "240 RPM",
            Penetração: "82.5%"
        }
    }),
    (p2000 = {
        nome: "P2000",
        imagem: "https://i.ibb.co/nbmDt2c/p2000.png",
        atributos: {
            Dano: 35,
            "Reload Time": "2.2s",
            "Fire Rate": "352 RPM",
            Penetração: "50.5%"
        }
    }),
    (usp = {
        nome: "USP-S",
        imagem: "https://i.ibb.co/2j9LDV2/usp.png",
        atributos: {
            Dano: 35,
            "Reload Time": "2.2s",
            "Fire Rate": "352 RPM",
            Penetração: "50.5%"
        }
    }),
    (glock = {
        nome: "Glock-18",
        imagem: "https://i.ibb.co/fdvLtMZ/glock.png",
        atributos: {
            Dano: 30,
            "Reload Time": "2.2s",
            "Fire Rate": "400 RPM",
            Penetração: "47.5%"
        }
    }),
    (cz = {
        nome: "CZ75-Auto",
        imagem: "https://i.ibb.co/qr1fs8s/cz.png",
        atributos: {
            Dano: 31,
            "Reload Time": "2.7s",
            "Fire Rate": "600 RPM",
            Penetração: "77.65%"
        }
    }),
    (p250 = {
        nome: "P250",
        imagem: "https://i.ibb.co/RYJkrf4/p250.png",
        atributos: {
            Dano: 38,
            "Reload Time": "2.2s",
            "Fire Rate": "400 RPM",
            Penetração: "64.0%"
        }
    }),
    (five7 = {
        nome: "Five-Seven",
        imagem: "https://i.ibb.co/nrmVqmK/f7.png",
        atributos: {
            Dano: 32,
            "Reload Time": "2.2s",
            "Fire Rate": "400 RPM",
            Penetração: "91.5%"
        }
    }),
    (tec9 = {
        nome: "Tec-9",
        imagem: "https://i.ibb.co/j6yJXB6/tec.png",
        atributos: {
            Dano: 33,
            "Reload Time": "2.5s",
            "Fire Rate": "500 RPM",
            Penetração: "90.15%"
        }
    }),
    (berettas = {
        nome: "Dual Berettas",
        imagem: "https://i.ibb.co/crdwLmz/berretas.png",
        atributos: {
            Dano: 38,
            "Reload Time": "3.8s",
            "Fire Rate": "500 RPM",
            Penetração: "57.5%"
        }
    }),
    (ump = {
        nome: "UMP-45",
        imagem: "https://i.ibb.co/zXbVcbW/ump.png",
        atributos: {
            Dano: 35,
            "Reload Time": "3.5s",
            "Fire Rate": "666 RPM",
            Penetração: "65.0%"
        }
    }),
    (mp7 = {
        nome: "MP7",
        imagem: "https://i.ibb.co/23wTQNc/mp7.png",
        atributos: {
            Dano: 29,
            "Reload Time": "3.1s",
            "Fire Rate": "750 RPM",
            Penetração: "62.5%"
        }
    }),
    (mac10 = {
        nome: "MAC-10",
        imagem: "https://i.ibb.co/jVyWzsS/mac10.png",
        atributos: {
            Dano: 29,
            "Reload Time": "32.6s",
            "Fire Rate": "800 RPM",
            Penetração: "57.5%"
        }
    }),
    (mp9 = {
        nome: "MP9",
        imagem: "https://i.ibb.co/f4D0n8J/mp9.png",
        atributos: {
            Dano: 26,
            "Reload Time": "2.1s",
            "Fire Rate": "857 RPM",
            Penetração: "60.0%"
        }
    }),
    (p90 = {
        nome: "P90",
        imagem: "https://i.ibb.co/9Vt0FXD/p90.png",
        atributos: {
            Dano: 26,
            "Reload Time": "3.3s",
            "Fire Rate": "857 RPM",
            Penetração: "69.0%"
        }
    }),
    (ppbizon = {
        nome: "PP-Bizon",
        imagem: "https://i.ibb.co/0qLBQRj/pp.png",
        atributos: {
            Dano: 27,
            "Reload Time": "2.4s",
            "Fire Rate": "750 RPM",
            Penetração: "57.5%"
        }
    }),
    (xm1014 = {
        nome: "XM1014",
        imagem: "https://i.ibb.co/pP9MqCk/xm.png",
        atributos: {
            Dano: 120,
            "Reload Time": "2.8s",
            "Fire Rate": "240 RPM",
            Penetração: "80.0%"
        }
    }),
    (mag7 = {
        nome: "MAG-7",
        imagem: "https://i.ibb.co/h7f9tZ7/mag.png",
        atributos: {
            Dano: 240,
            "Reload Time": "2.4s",
            "Fire Rate": "71 RPM",
            Penetração: "75.0%"
        }
    }),
    (nova = {
        nome: "Nova",
        imagem: "https://i.ibb.co/hVpVwS8/nova.png",
        atributos: {
            Dano: 243,
            "Reload Time": "3.2s",
            "Fire Rate": "68 RPM",
            Penetração: "50.0%"
        }
    }),
    (m249 = {
        nome: "M249",
        imagem: "https://i.ibb.co/MP0TwwK/m249.png",
        atributos: {
            Dano: 32,
            "Reload Time": "5.7s",
            "Fire Rate": "750 RPM",
            Penetração: "80.0%"
        }
    }),
    (negev = {
        nome: "Negev",
        imagem: "https://i.ibb.co/m5tmGSB/negev.png",
        atributos: {
            Dano: 35,
            "Reload Time": "5.7s",
            "Fire Rate": "800 RPM",
            Penetração: "71.0%"
        }
    })
]

// Fim das cartas do Super Trunfo 

let cartaMaquina
let cartaJogador

// Função para sortear as cartas
function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    let mensagemAtributo = document.getElementById("atributo")
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    mensagemAtributo.innerHTML = "Escolha o seu atributo"

    exibirCartaJogador()
}

// Função para obter o atributo escolhido pelo jogador
function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo")

    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado()
    let elementoResultado = document.getElementById("resultado")
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    let mensagemAtributo = document.getElementById("atributo")

    if(valorCartaJogador == null){
        elementoResultado.innerHTML = '<p class="resultado-final">Selecione uma opção</p>'
    } else if(valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = '<p class="resultado-final">Amassou!</p>'
        document.getElementById("btnSortear").disabled = true
        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()
        document.getElementById("btnReiniciar").disabled = false
        mensagemAtributo.innerHTML = "Ótima escolha!"
        ganhou()
    } else if(valorCartaJogador < valorCartaMaquina){
        elementoResultado.innerHTML = '<p class="resultado-final">Foi Amassado!</p>'
        document.getElementById("btnSortear").disabled = true
        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()
        document.getElementById("btnReiniciar").disabled = false
        mensagemAtributo.innerHTML = "Mais sorte na próxima!"
        perdeu()
    } else if(valorCartaJogador == valorCartaMaquina){
        elementoResultado.innerHTML = '<p class="resultado-final">Houve um empate!</p>'
        document.getElementById("btnSortear").disabled = true
        document.getElementById("btnJogar").disabled = true
        exibirCartaMaquina()
        document.getElementById("btnReiniciar").disabled = false
        mensagemAtributo.innerHTML = ""
    }
}


// Função para exibir a carta do jogador no HTML
function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    let moldura = '<img src="https://cdn.discordapp.com/attachments/835870529612546060/890296612121878589/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    let opcoesTexto = ""

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>"
    }
    let html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    let moldura = '<img src="https://cdn.discordapp.com/attachments/835870529612546060/890296612121878589/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    let opcoesTexto = ""

    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>"
    }
    let html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
}

// Função para reiniciar o jogo
function reiniciar(){
    divCartaJogador = document.getElementById("carta-jogador")
    divCartaMaquina = document.getElementById("carta-maquina")

    divCartaJogador.setAttribute("class", "carta")
    divCartaMaquina.setAttribute("class", "carta")
    divCartaJogador.innerHTML = '<div id="carta-jogador" class="carta"><img src="https://i.ibb.co/pLc1pst/57.png" style=" width: inherit; height: inherit; position: absolute;"></div>'
    divCartaJogador.style.backgroundImage = 'url("")'
    divCartaMaquina.innerHTML = '<div id="carta-jogador" class="carta"><img src="https://i.ibb.co/pLc1pst/57.png" style=" width: inherit; height: inherit; position: absolute;"></div>'
    divCartaMaquina.style.backgroundImage = 'url("")'

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnReiniciar").disabled = true;

    let divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
    let mensagemAtributo = document.getElementById("atributo")
    mensagemAtributo.innerHTML = ""
}

function ganhou(){
    let divCartaJogador = document.getElementById("carta-jogador")
    let divCartaMaquina = document.getElementById("carta-maquina")

    divCartaJogador.setAttribute("class", "jogadorganhou")
    divCartaMaquina.setAttribute("class", "maquinaperdeu")
}

function perdeu(){
    let divCartaJogador = document.getElementById("carta-jogador")
    let divCartaMaquina = document.getElementById("carta-maquina")

    divCartaJogador.setAttribute("class", "maquinaganhou")
    divCartaMaquina.setAttribute("class", "jogadorperdeu")
}