
let parentezco = document.getElementById("parentezco")
let btn26 = document.getElementById("btn26")
let btn26a = document.getElementById("btn26a")
let btn26b = document.getElementById("btn26b")
let btn26dos = document.getElementById("btn26dos")

let recorrio = false

let grado = document.getElementById("grado")


let transition26uno = () =>{
    let consanguinidad26 = document.getElementById("consanguinidad26")
    consanguinidad26.classList.add("next2")
}

parentezco.addEventListener("click", transition26uno)

let transition26unoa = () =>{
   

    let consanguinidad26 = document.getElementById("consanguinidad26")
    let consanguinidad26a = document.getElementById("consanguinidad26a")

    consanguinidad26.classList.remove("next2")
    consanguinidad26.classList.add("next")
    consanguinidad26a.classList.add("next2")
}

btn26.addEventListener("click", transition26unoa)

let transition26unob = () =>{


    let consanguinidad26a = document.getElementById("consanguinidad26a")
    let consanguinidad26b = document.getElementById("consanguinidad26b")

    consanguinidad26a.classList.remove("next2")
    consanguinidad26a.classList.add("next")
    consanguinidad26b.classList.add("next2")
}

btn26a.addEventListener("click", transition26unob)


let transition26unobClose = ()=>{
    grado.disabled = false
    grado.classList.add("grado")

    parentezco.classList.remove("clasegover")
    parentezco.disabled = true

    let consanguinidad26b = document.getElementById("consanguinidad26b")

    consanguinidad26b.classList.remove("next2")
    consanguinidad26b.classList.add("next")

    
}

btn26b.addEventListener("click", transition26unobClose)


let transition26dos = () =>{
    let consanguinidad26 = document.getElementById("consanguinidad26dos")
    consanguinidad26.classList.add("next2")
}

grado.addEventListener("click", transition26dos)



let transition26NextDos = () =>{
    let consanguinidad26dos = document.getElementById("consanguinidad26dos")

    parentezco.classList.add("clasegover")
    parentezco.disabled = false

    consanguinidad26dos.classList.remove("next2")
    consanguinidad26dos.classList.add("next")

    if (recorrio == false) {

        setTimeout(() => {
            recorrio = true
            document.getElementById(`proof26`).classList.remove('beforeUP');
            document.getElementById(`proof29`).classList.remove('before');
            document.getElementById(`proof29`).classList.remove('before2');
            document.getElementById(`proof26`).classList.remove('next2UP');
            document.getElementById(`proof26`).classList.add('nextUP');
            document.getElementById(`proof29`).classList.add('next2');
    
            document.getElementById(`paginaproof29`).style.display ="block"


        }, 1000);
    }
        


}

btn26dos.addEventListener("click", transition26NextDos)





