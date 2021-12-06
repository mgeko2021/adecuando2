let btnNextBuild = document.querySelectorAll('body button.nextBtn')

// documentos 

let ready16 = false
let ready21 = false
let ready30 = false
let ready39 = false
let ready39a = false



// proof 30
var ref33 = new Audio();
ref33.src="./sonidos/Pagina17/pagina17.mp3";

// proof 30
var ref39 = new Audio();
ref39.src="./sonidos/Pagina22/pagina22.mp3";

// proof 39a
var ref39a = new Audio();
ref39a.src="./sonidos/Pagina23/pagina23.mp3";

// proof 39
var ref39b = new Audio();
ref39b.src="./sonidos/Pagina23/23b.mp3";




let build = (name, nextName, nextName2) =>{
    


    switch (name) {

        case "start":
            let medioProof0 = document.getElementById("medioProof0")
            let adelanteProof0 = document.getElementById("adelanteProof0")
        
            setTimeout(() => {
                medioProof0.style.display = "block"
                medioProof0.classList.add("animation-proof0")    
            }, 2000);
            adelanteProof0.classList.add("opacityanimate")
        
            containerProof34hidden.classList.add("opacityanimateinverse")
            setTimeout(() => {
                containerProof34hidden.style.display = "none"
                containerProof34show.style.display = "block"
                containerProof34show.classList.add("opacityanimate")
        
            }, 2000);

            break
        case "proof0":
            let atrasProof1 = document.getElementById("atrasProof1")
            let medioProof1 = document.getElementById("medioProof1")
            let adelanteProof1 = document.getElementById("adelanteProof1")


            atrasProof1.classList.add("top100animateOpacity")
            adelanteProof1.classList.add("opacityanimate")

            // setTimeout(() => {
            //     medioProof1.classList.add("topmenos100animate")
                
            // }, 1000);
            // setTimeout(() => {
            // }, 2000);

            let adelanteProof2 = document.getElementById("adelanteProof2")
            setTimeout(() => {
                adelanteProof2.classList.add("topmenos100animate")
            }, 5000);
            
            break;

        case "proof1":
            let obj1 = document.getElementById("obj1")
            let obj2 = document.getElementById("obj2")
          

    
        case "proof3":
            setTimeout(() => {
                let contagio3a = document.getElementById("contagio")
                let operativo3a = document.getElementById("operativo")
                contagio3a.classList.add("icons3")
                operativo3a.classList.add("icons4")
      
            setTimeout(() => {
                let reputacion3a = document.getElementById("reputacion")
                let corrupcion3a = document.getElementById("corrupcion")
                reputacion3a.classList.add("icons2")
                corrupcion3a.classList.add("icons5")

            }, 500);
            
            setTimeout(() => {
                let legal3a = document.getElementById("legal")
                let legal6a = document.getElementById("emergente")
                legal3a.classList.add("icons1")
                legal6a.classList.add("icons6")
  
            }, 1000);

            }, 500);
            
            
            break;

        case "proof3a":
            let adelanteProof4 = document.getElementById("adelanteProof4")
            adelanteProof4.classList.add("topmenos100animate")
            

            
            break;

        case "proof15":
            if(!ready16){
                ready16 = true
                setTimeout(() => {
                    let containerProof16 = document.querySelector(".containerProof16")
                    containerProof16.classList.add("next2")
                }, 12000);
    
            }
            

            
            break;

        // case "proof21":
        //     if(ready21  == false){
                
        //         let tituleProof24 = document.querySelector(".tituleProof24") 
        //         let containerProof24Text = document.querySelector(".containerProof24Text") 
            
        //         let tituleProof24B = document.querySelector(".tituleProof24B") 
        //         let containerProof24BText = document.querySelector(".containerProof24BText") 
            
        //         let subtituleProof24B = document.getElementById("subtituleProof24B")
            
            
        //         setTimeout(() => {
        //             ready21 == true
        //             containerProof24Text.classList.add("transicion24Left")
        //             containerProof24BText.classList.add("transicion24LeftReturn")
            
        //             tituleProof24.classList.add("transicion24Rigth")
        //             tituleProof24B.classList.add("transicion24RigthReturn")
        //             setTimeout(() => {
        //                 subtituleProof24B.classList.add("transicion24RigthReturn")
        //             }, 200);
                    
        //             document.getElementById(`paginaproof24`).style.display ="block"

                    
        //         }, 2000);
        //     }
        //     break;

        case "proof29":
                        
            if(!ready30){
                ready30 = true
                setTimeout(() => {
                    const containerProof30Text = document.querySelector(".containerProof30Text")
                    const containerProof30Text2 = document.querySelector(".containerProof30Text2")

                    let atrasProof30 = document.getElementById("atrasProof30") 
                    let adelanteProof30 = document.getElementById("adelanteProof30") 
        
                    containerProof30Text.classList.add("opacityanimateinverse")
                    setTimeout(() => {
                        containerProof30Text.style.display = "none"
                        containerProof30Text2.style.display = "block"
                        containerProof30Text2.classList.add("opacityanimate")

                        setTimeout(() => {
                            ref33.play()
                            document.getElementById(`proof33`).classList.remove('before');
                            document.getElementById(`proof33`).classList.remove('before2');
                            document.getElementById(`proof30`).classList.remove('next2UP');
                            document.getElementById(`proof30`).classList.add('nextUP');
                            document.getElementById(`proof33`).classList.add('next2');
                    
                        }, 22000);
                            
                    }, 1300);
                }, 27000);
            }

            break

        case "proof39":
            if(!ready39a){
                ref39a.play()
                ready39a = true
                setTimeout(() => {
                    document.querySelector(".move39dos").classList.add("next2")
                    ref39b.play()
                    setTimeout(() => {
                        document.getElementById(`paginaproof39a`).style.display ="block"
                    }, 63000);
                }, 17000);
            }

        break
    
        default:
            break;
    }

} 


btnNextBuild.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        build(event.target.name, btnNext[index+1].name , btnNext[index+2].name)
    })
})




// let proof34 = document.getElementById("proof34")

// let change34 = () =>{
//     const containerProof34hidden = document.querySelector(".containerProof34hidden")
//     const containerProof34show = document.querySelector(".containerProof34show")

//     let medioProof34 = document.getElementById("medioProof34") 
//     let fondo34 = document.getElementById("fondo34") 

//     medioProof34.classList.add("translatefastleft")
//     fondo34.classList.add("translatefastrigth")

//     containerProof34hidden.classList.add("opacityanimateinverse")
//     setTimeout(() => {
//         containerProof34hidden.style.display = "none"
//         containerProof34show.style.display = "block"
//         containerProof34show.classList.add("opacityanimate")

//     }, 2000);

// }

// proof34.addEventListener("click", change34)


// let proof39 = document.getElementById("proof39")

// let change39 = () =>{
//     const containerProof39TexUno = document.querySelector(".containerProof39TexUno")
//     const containerProof39TexDos = document.querySelector(".containerProof39TexDos")

//     let medio39 = document.getElementById("medio39") 
//     let adelante39 = document.getElementById("adelante39") 
//     let fondo39 = document.getElementById("fondo39") 

//     medio39.classList.add("translatefastleft39")
//     fondo39.classList.add("translatefastrigth39")
//     adelante39.classList.add("translatefasfront39")

//     containerProof39TexUno.classList.add("opacityanimateinverse")
//     setTimeout(() => {
//         containerProof39TexUno.style.display = "none"
//         containerProof39TexDos.style.display = "block"
//         containerProof39TexDos.classList.add("opacityanimate")

//     }, 2000);

// }

// proof39.addEventListener("click", change39)
