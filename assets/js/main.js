const formAdulto = document.querySelector('.form-adulto')
const formInfantil = document.querySelector('.form-infantil')


function getDados() {
    function enviarDadosFormAdulto(evt) {
        allClear()
        evt.preventDefault()
        
        const peso = document.querySelector('.peso-adulto').value
        const altura = document.querySelector('.altura-adulto').value

        if(peso && altura <= 0){
            alert('Campos não podem ser zerados!')
        } else {
            let imc = (peso/(altura**2))
            let resultado_avaliacao= avaliacaoAdulto(imc)

            document.querySelector('.resultado-adulto').style.display = 'block'
            document.querySelector('.resultado-adulto').innerHTML += `
            <div class="imc-resultado">
            <div>De acordo com o resultado dos seus dados, o seu IMC é de: <strong>${imc.toFixed(2)}</strong></div>
            <div class="imc-figure">${resultado_avaliacao}</div>
            </div>`
        }
    }

    function enviarDadosFormInfantil(evt) {
        allClear()
        evt.preventDefault()
        
        const sexo = document.querySelector('.sexo-select').value
        const idade = document.querySelector('.idade-select').value
        const peso = document.querySelector('.peso-infantil').value
        const altura = document.querySelector('.altura-infantil').value
        
        if(sexo === "") {
            alert('Selecione o sexo da criança!')
        } else {
            if(idade === ""){
                alert('Selecione o idade da criança!')
            } else {
                if(peso && altura <= 0){
                    alert('Campos não podem ser zerados!')
                } else {
                    let imc = (peso/(altura**2))
                    let resultado_avaliacao= avaliacaoInfantil(sexo, idade, imc)
        
                    document.querySelector('.resultado-infantil').style.display = 'block'
                    document.querySelector('.resultado-infantil').innerHTML += `
                    <div class="imc-resultado">
                    <div>De acordo com os dados informados, o IMC é de: <strong>${imc.toFixed(2)}</strong></div>
                    <div class="child">${resultado_avaliacao}</div>
                    </div>`
                }
            }
        }

    }

    formAdulto.addEventListener('submit', enviarDadosFormAdulto)
    formAdulto.addEventListener('reset', allClear)

    formInfantil.addEventListener('submit', enviarDadosFormInfantil)
    formInfantil.addEventListener('reset', allClear)
}

function allClear(){
    document.querySelector('.resultado-adulto').style.display = 'none'
    document.querySelector('.resultado-adulto').innerHTML = '' 

    document.querySelector('.resultado-infantil').style.display = 'none'
    document.querySelector('.resultado-infantil').innerHTML = '' 
}

function avaliacaoAdulto(massa) {
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

function avaliacaoInfantil(sexo, idade, massa) {
    switch (true) {
// faixa de 6 anos meninos        
        case (sexo == "1" && idade == 6 && massa <= 14.49):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 6 && massa >= 14.50 && massa <= 16.59):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 6 && massa >= 16.60 && massa <= 17.99):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 6 && massa >= 18.00):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 7 anos meninos        
        case (sexo == "1" && idade == 7 && massa <= 14.99):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 7 && massa >= 15.00 && massa <= 17.29):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 7 && massa >= 17.30 && massa <= 19.09):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 7 && massa >= 19.10):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 8 anos meninos        
        case (sexo == "1" && idade == 8 && massa <= 15.59):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 8 && massa >= 15.60 && massa <= 16.69):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 8 && massa >= 16.70 && massa <= 20.29):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 8 && massa >= 20.30):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 9 anos meninos
        case (sexo == "1" && idade == 9 && massa <= 16.09):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 9 && massa >= 16.10 && massa <= 18.79):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 9 && massa >= 18.80 && massa <= 21.39):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 9 && massa >= 21.40):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 10 anos meninos
        case (sexo == "1" && idade == 10 && massa <= 16.69):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 10 && massa >= 16.70 && massa <= 19.59):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 10 && massa >= 19.60 && massa <= 22.49):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 10 && massa >= 22.50):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 11 anos meninos
        case (sexo == "1" && idade == 11 && massa <= 17.19):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 11 && massa >= 17.20 && massa <= 20.29):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 11 && massa >= 20.30 && massa <= 23.69):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 11 && massa >= 23.70):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 12 anos meninos
        case (sexo == "1" && idade == 12 && massa <= 17.79):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 12 && massa >= 17.80 && massa <= 21.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 12 && massa >= 21.10 && massa <= 24.79):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 12 && massa >= 24.80):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 13 anos meninos
        case (sexo == "1" && idade == 13 && massa <= 18.49):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 13 && massa >= 18.50 && massa <= 21.89):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 13 && massa >= 21.90 && massa <= 25.89):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 13 && massa >= 25.90):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 14 anos meninos
        case (sexo == "1" && idade == 14 && massa <= 19.19):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 14 && massa >= 19.20 && massa <= 22.69):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 14 && massa >= 22.70 && massa <= 26.89):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 14 && massa >= 26.90):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 15 anos meninos
        case (sexo == "1" && idade == 15 && massa <= 19.89):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "1" && idade == 15 && massa >= 19.90 && massa <= 23.59):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "1" && idade == 15 && massa >= 23.60 && massa <= 27.69):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menino-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "1" && idade == 15 && massa >= 27.70):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menino-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;

// faixa de 6 anos meninas        
        case (sexo == "2" && idade == 6 && massa <= 14.29):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 6 && massa >= 14.30 && massa <= 16.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 6 && massa >= 16.10 && massa <= 17.39):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 6 && massa >= 17.40):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 7 anos meninas        
        case (sexo == "2" && idade == 7 && massa <= 14.89):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 7 && massa >= 14.90 && massa <= 17.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 7 && massa >= 17.10 && massa <= 18.89):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 7 && massa >= 18.90):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 8 anos meninas        
        case (sexo == "2" && idade == 8 && massa <= 15.59):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 8 && massa >= 15.60 && massa <= 18.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 8 && massa >= 18.10 && massa <= 20.29):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 8 && massa >= 20.30):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 9 anos meninas
        case (sexo == "2" && idade == 9 && massa <= 16.29):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 9 && massa >= 16.30 && massa <= 19.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 9 && massa >= 19.10 && massa <= 21.69):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 9 && massa >= 21.70):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 10 anos meninas
        case (sexo == "2" && idade == 10 && massa <= 16.99):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 10 && massa >= 17.00 && massa <= 20.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 10 && massa >= 20.10 && massa <= 23.19):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 10 && massa >= 23.20):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 11 anos meninas
        case (sexo == "2" && idade == 11 && massa <= 17.69):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 11 && massa >= 17.60 && massa <= 21.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 11 && massa >= 21.10 && massa <= 24.49):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 11 && massa >= 24.50):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 12 anos meninas
        case (sexo == "2" && idade == 12 && massa <= 18.29):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 12 && massa >= 18.30 && massa <= 22.09):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 12 && massa >= 22.10 && massa <= 25.89):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 12 && massa >= 25.90):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 13 anos meninas
        case (sexo == "2" && idade == 13 && massa <= 18.89):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 13 && massa >= 18.90 && massa <= 22.99):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 13 && massa >= 23.00 && massa <= 27.69):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 13 && massa >= 27.70):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 14 anos meninas
        case (sexo == "2" && idade == 14 && massa <= 19.29):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 14 && massa >= 19.30 && massa <= 23.79):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 14 && massa >= 23.80 && massa <= 27.89):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 14 && massa >= 27.90):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;
// faixa de 15 anos meninas
        case (sexo == "2" && idade == 15 && massa <= 19.59):
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-abaixo.png" alt="Peso Abaixo"><br/>Está <strong>abaixo do peso.</strong>`
            break;

        case (sexo == "2" && idade == 15 && massa >= 19.60 && massa <= 24.19):
            document.querySelector('.resultado-infantil').style.background = '#00FF7F'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-normal.png" alt="Peso Normal"><br/>Está <strong>no peso normal</strong>`
            break;

        case (sexo == "2" && idade == 15 && massa >= 24.20 && massa <= 28.79):
            document.querySelector('.resultado-infantil').style.background = '#DAA520'
            document.querySelector('.resultado-infantil').style.color = '#000'
            return `<img class="child" src="./assets/img/menina-sobrepeso.png" alt="Sobrepeso"><br/>Está <strong>com sobrepeso</strong>`
            break;

        case (sexo == "2" && idade == 15 && massa >= 28.80):
            document.querySelector('.resultado-infantil').style.background = '#8B0000'
            document.querySelector('.resultado-infantil').style.color = '#ffff00'
            return `<img class="child" src="./assets/img/menina-obeso.png" alt="Obesidade"><br/>Está <strong>com obesidade</strong>`
            break;

    
        default:
            document.querySelector('.resultado-infantil').style.background = '#00BFFF'
            return "<h4>Dados não correspondentes com os dados da tabela de IMC infantil.</h4>"
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
    infantil_section.style.display='inline-flex'
    adulto_section.style.display='none'
    infantil_radio.checked= true
    adulto_radio.checked= false

    
}