let btnLetter = document.querySelectorAll('.letterShoot')
let terminadoJuego38 = false

let letterShot = (id) => { 

    let puntos38 = document.getElementById("puntos38ID")
    let nopuntos38 = document.getElementById("noPuntos38ID")
    if(terminadoJuego38 == false){

    if(id == "letterShoot4") {
        document.getElementById(id).style.color = "#00a135"
        document.getElementById(id).style.borderColor = "#00a135"
        terminadoJuego38 = true


        puntos38.classList.remove("emergentesreturn");
        puntos38.classList.add("emergentes"); 
        setTimeout(function(){ 
            puntos38.classList.remove("emergentes");
            puntos38.classList.add("emergentesreturn");

      
        }, 4000);

        setTimeout(() => {
            ref37.pause()
            document.getElementById(`proof38`).classList.remove('beforeUP');
            document.getElementById(`proof39`).classList.remove('beforeUP');
            document.getElementById(`proof39`).classList.remove('before2UP');
            document.getElementById(`proof38`).classList.remove('next2UP');
            document.getElementById(`proof38`).style.left = "0%"
            document.getElementById(`proof38`).classList.add('nextUP');
            document.getElementById(`proof39`).classList.add('next2UP');

            document.getElementById(`paginaproof39`).style.display ="block"

        }, 6000);

        } else {
            document.getElementById(id).style.color = "red"
            document.getElementById(id).style.borderColor = "red"

            
            nopuntos38.classList.remove("emergentesreturn");
            nopuntos38.classList.add("emergentes"); 
            setTimeout(function(){ 
                nopuntos38.classList.remove("emergentes");
                nopuntos38.classList.add("emergentesreturn");

        
            }, 3000);
        }
    }

}



btnLetter.forEach((letter) => {
    letter.addEventListener('click', (event) => {
            letterShot(event.target.id)
    })
})
