

const form = document.querySelector("form")
const title = document.querySelector("#title")
const artist = document.querySelector("#artist")
const lyrics = document.querySelector("#lyrics")

form.onsubmit =  async (event) => {
    event.preventDefault()

    if(  artist.value === "" || title.value === ""){
        alert("Digite algo")
    }
    
    else{

        let nameArtist = artist.value
        let musicName = title.value
        lyrics.innerHTML = '<div class = "spinner-grow"></div>'

        try {
            const response = await fetch(`https://api.lyrics.ovh/v1/${nameArtist}/${musicName}`)
            const data = await response.json()
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