var ref16_a = new Audio();
ref16_a.src="./sonidos/Pagina10/10a.mp3";

var ref16_b = new Audio();
ref16_b.src="./sonidos/Pagina10/10b.mp3";

var ref16_c = new Audio();
ref16_c.src="./sonidos/Pagina10/10c.mp3";


const productServSon16 = document.querySelectorAll("body img.audios16")

let click16a = false
let click16b = false
let click16c = false

var ref16 = new Audio();
ref16.src="./sonidos/Pagina10/pagina10.mp3";


console.log(productServSon16)

const sonidoproductServSon16 = (name) =>{
    console.log(name)

    switch (name) {
        case "sol16a":
            ref16_a.play()
            click16a = true

            ref16_b.pause()
            ref16_c.pause()
            ref16.pause()
            break;


    
        case "sol16b":
            click16b = true
            ref16_b.play()

            ref16_a.pause()
            ref16_c.pause()
            ref16.pause()
            break;
   
        case "sol16c":
            click16c = true
            ref16_c.play()

            ref16_a.pause()
            ref16_b.pause()
            ref16.pause()
            break;
   
    }

    if(click16a && click16b && click16c  ){
        document.getElementById(`paginaproof16`).style.display = "block"
    }
}


productServSon16.forEach((productServSonImg, index) => {
    productServSonImg.addEventListener('click', (event) => {
        sonidoproductServSon16(event.target.name)
    })
})



let silenciarPagina16 = ()=>{
    ref16_a.pause()
    ref16_b.pause()
    ref16_c.pause()
}


document.getElementById(`paginaproof16`).addEventListener("click",silenciarPagina16)

