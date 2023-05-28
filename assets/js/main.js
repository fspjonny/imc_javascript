const meuform = document.querySelector('.formulario')

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

            document.querySelector('.resultado').style.display = 'block'
            document.querySelector('.resultado').innerHTML += `
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
    document.querySelector('.resultado').style.display = 'none'
    document.querySelector('.resultado').innerHTML = '' 
}

function avaliacao(massa) {
    switch (true) {
        case (massa < 18.50):
            document.querySelector('.resultado').style.background = '#00BFFF'
            return `<img src="/tree/main/assets/img/homem-abaixo.png" alt="Peso Abaixo"><br/>Você está <strong>Abaixo do peso</strong>`
            
            break;

        case (massa >= 18.50 && massa <= 24.90 ):
            document.querySelector('.resultado').style.background = '#00FF7F'
            document.querySelector('.resultado').style.color = '#000'
            return `<img src="/tree/main/assets/img/homem-normal.png" alt="Peso Normal"><br/>Você está com <strong>peso normal</strong>`
            break;

        case (massa >= 25.00 && massa <= 29.90 ):
            document.querySelector('.resultado').style.background = '#DAA520'
            return `<img src="/tree/main/assets/img/homem-sobrepeso.png" alt="Sobrepeso"><br/>Você está com <strong>sobrepeso</strong>`
            break;

        case (massa >= 30.00 && massa <= 34.90 ):
            document.querySelector('.resultado').style.background = '#CD5C5C'
            document.querySelector('.resultado').style.color = '#FFF'
            return `<img src="/tree/main/assets/img/homem-obeso_i.png" alt="Obeso I"><br/>Você está com <strong>Obesidade grau I</strong>`
            break;

        case (massa >= 35.00 && massa <= 39.90 ):
            document.querySelector('.resultado').style.background = '#FF0000'
            document.querySelector('.resultado').style.color = '#FFF'
            return `<img src="/tree/main/assets/img/homem-obeso_ii.png" alt="Obeso II"><br/>Você está com <strong>Obesidade grau II</strong>`
            break;

        case (massa > 40.00):
            document.querySelector('.resultado').style.background = '#8B0000'
            document.querySelector('.resultado').style.color = '#ffff00'
            return `<img src="/tree/main/assets/img/homem-obeso_iii.png" alt="Obeso III"><br/>Você está com <strong>Obesidade grau III</strong>`
            break;
    
        default:
            break;
    }
}

getDados()