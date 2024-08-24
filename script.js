
//Inicio

//Inicializando as variaveis globais
const form = document.querySelector("form")
const title = document.querySelector("#title")
const artist = document.querySelector("#artist")
const lyrics = document.querySelector("#lyrics")

///Iniciando o envio do formulario
form.onsubmit =  async (event) => {
    event.preventDefault()
    //verificando se os inputs estão com algum valor
    if(  artist.value === "" || title.value === ""){
        alert("Digite algo")
    }
    
    else{

        //Iniciando as variaveis e adicionando uma resposta visual de carregamento

        let nameArtist = artist.value
        let musicName = title.value
        lyrics.innerHTML = '<div class = "spinner-grow"></div>'

        try {

            //Pegando a resposta da API

            const response = await fetch(`https://api.lyrics.ovh/v1/${nameArtist}/${musicName}`)

            //Transformando ela em JSON e passando para outra variavel
            const data = await response.json()
            //Verificando se existe as letras dessa música
            if(data.lyrics){
                
                lyrics.innerHTML = data.lyrics
            }
            else{
                alert("Letra não encontrada")
                lyrics.innerHTML = "Letra não encontrada"
            }
        } catch (error) {
            console.log(error)
        }

    }
    
    console.log("Finalizou")
}
//Fim