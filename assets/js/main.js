const meuform = document.querySelector('.form-adulto')


function getDados() {
    function enviarDadosForm(evt) {
        allClear()
        evt.preventDefault()
        
        const peso = document.querySelector('.peso').value
        const altura = document.querySelector('.altura').value

        if(peso && altura <= 0){
            alert('Campos não podem ser zerados!')
        } else {
            let imc = (peso/(altura**2))
            let resultado_avaliacao= avaliacao(imc)

            document.querySelector('.resultado-adulto').style.display = 'block'
            document.querySelector('.resultado-adulto').innerHTML += `
            <div class="imc-resultado">
            <div>De acordo com o resultado dos seus dados, o seu IMC é de: <strong>${imc.toFixed(2)}</strong></div>
            <div class="imc-figure">${resultado_avaliacao}</div>
            </div>`
        }
    }

    meuform.addEventListener('submit', enviarDadosForm)
    meuform.addEventListener('reset', allClear)
}

function allClear(){
    document.querySelector('.resultado-adulto').style.display = 'none'
    document.querySelector('.resultado-adulto').innerHTML = '' 
}

function avaliacao(massa) {
    switch (true) {
        case (massa < 18.5):
            document.querySelector('.resultado-adulto').style.background = '#00BFFF'
            return `<img src="./assets/img/homem-abaixo.png" alt="Peso Abaixo"><br/>Você está <strong>Abaixo do peso</strong>`
            break;

        case (massa >= 18.5 && massa <= 24.99 ):
            document.querySelector('.resultado-adulto').style.background = '#00FF7F'
            document.querySelector('.resultado-adulto').style.color = '#000'
            return `<img src="./assets/img/homem-normal.png" alt="Peso Normal"><br/>Você está com <strong>peso normal</strong>`
            break;

        case (massa >= 25.0 && massa <= 29.99 ):
            document.querySelector('.resultado-adulto').style.background = '#DAA520'
            return `<img src="./assets/img/homem-sobrepeso.png" alt="Sobrepeso"><br/>Você está com <strong>sobrepeso</strong>`
            break;

        case (massa >= 30.0 && massa <= 34.99 ):
            document.querySelector('.resultado-adulto').style.background = '#CD5C5C'
            document.querySelector('.resultado-adulto').style.color = '#FFF'
            return `<img src="./assets/img/homem-obeso_i.png" alt="Obeso I"><br/>Você está com <strong>Obesidade grau I</strong>`
            break;

        case (massa >= 35.0 && massa <= 39.99 ):
            document.querySelector('.resultado-adulto').style.background = '#FF0000'
            document.querySelector('.resultado-adulto').style.color = '#FFF'
            return `<img src="./assets/img/homem-obeso_ii.png" alt="Obeso II"><br/>Você está com <strong>Obesidade grau II</strong>`
            break;

        case (massa > 40.0):
            document.querySelector('.resultado-adulto').style.background = '#8B0000'
            document.querySelector('.resultado-adulto').style.color = '#ffff00'
            return `<img src="./assets/img/homem-obeso_iii.png" alt="Obeso III"><br/>Você está com <strong>Obesidade grau III</strong>`
            break;
    
        default:
            break;
    }
}

getDados()

// Códigos relativos a escolha de categorias Adulto/Infantil
const adulto_section = document.querySelector('.adulto-section')
const adulto_radio = document.querySelector('.adulto-radio')
const infantil_section = document.querySelector('.infantil-section')
const infantil_radio = document.querySelector('.infantil-radio')

adulto_radio.addEventListener('click', trocarParaAdulto)
infantil_radio.addEventListener('click', trocarParaInfantil)

function trocarParaAdulto() {
    adulto_section.style.display='block'
    infantil_section.style.display='none'
    adulto_radio.checked= true
    infantil_radio.checked= false
    
}

function trocarParaInfantil() {
    infantil_section.style.display='block'
    adulto_section.style.display='none'
    infantil_radio.checked= true
    adulto_radio.checked= false

    
}