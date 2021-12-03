let btnNextSonidos = document.querySelectorAll('body button.nextBtn')
let btnBeforeSonidos = document.querySelectorAll('body button.beforeBtn')


let nivelesZindex = document.querySelector(".logo")

//pagina start
var ref0 = new Audio();
ref0.src="./sonidos/Pagina1/pagina1.mp3";

// proof 0
var ref1 = new Audio();
ref1.src="./sonidos/Pagina2/pagina2.mp3";



// proof 3
var ref3 = new Audio();
ref3.src="./sonidos/Pagina4/pagina4.mp3";

// proof 5
var ref5 = new Audio();
ref5.src="./sonidos/Pagina5/pagina5.mp3";

// proof 13
var ref8 = new Audio();
ref8.src="./sonidos/Pagina8/pagina8.mp3";

// proof 15
var ref9 = new Audio();
ref9.src="./sonidos/Pagina9/pagina9.mp3";


// proof 16
var ref16 = new Audio();
ref16.src="./sonidos/Pagina10/pagina10.mp3";

// proof 16
var ref17 = new Audio();
ref17.src="./sonidos/Pagina11/pagina11.mp3";

// proof 21
var ref21 = new Audio();
ref21.src="./sonidos/Pagina13/pagina13.mp3";

// proof 24
var ref24 = new Audio();
ref24.src="./sonidos/Pagina15/15b.mp3";


// proof 30
var ref30 = new Audio();
ref30.src="./sonidos/Pagina16/pagina16.mp3";



// //sonidos 13
// var ref13_1 = new Audio();
// ref13_1.src="./sonidos/Referencia 12-13-14-15/REF 13-1.mp3";

// var ref13_2 = new Audio();
// ref13_2.src="./sonidos/Referencia 12-13-14-15/REF 13-2.mp3";


let startbool = false
let proof0bool = false
let proof1bool = false
let proof2bool = false
let proof3abool = false
let proof4bool = false
let proof6bool = false
let proof8bool = false

let proof5bool =false


let proof7bool = false

let proof9bool = false

let proof11bool = false
let proof13bool = false
let proof17bool = false
let proof18bool = false
let proof21bool = false
let proof24bool = false
let proof29bool = false
let proof30bool = false

let proof36bool = false

let proof37bool = false

let proof39bool = false

let proof41bool = false

let proof42bool = false

let proof43bool = false


//juegos bool
let juego8 = false

//derechos medalla a medalla
let medallas16 = false //derechos
let medallas17 = false //deberes


// psita salto bool
let medallas20 = false

//velocidad bool
let velocidad25 = false

//velocidad bool
let pruebaAgilidad32 = false

//pista olimpica bool
let pistaOlimpica32 = false

// sanciones bool
let sanciones38 = false

//principios prientadores
let prinOrientadores = false

// sanciones bool
let canalAtencion42 = false

//derechos y deberes
let derYDeb = false

//logica escritorio
let escritorio = false

//logica cuadro arrastre
let agilidadbool = false


let auto3 = false


// console.log(btnNextSonidos)
let sonidoNext = (name, nextName,nextName2) => {
  console.log(name)
    switch (name) {
        
        case "start": // de start a prof1
            if(!startbool){
                ref0.play()  // subir lucho

                setTimeout(() => {
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    startbool = true
                }, 12000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }
            break

        case "proof0": // de start a prof1
            if(!proof0bool){
                ref1.play()
                proof0bool = true

            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
                }
            break


        case "proof2": // subir lucho
        if(!proof2bool){
            ref3.play()
            proof2bool = true
                setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                }, 51000);

        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            }
        break

        case "proof3": //automatica vertical
            if(!auto3){
                // setTimeout(() => {
                    ref5.play()
                    document.getElementById(`pagina${nextName}`).style.display ="none"
                    auto3 = true

            // }, 5000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        

        case "proof3a":
            if(!proof3abool){
            // setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="none"
                proof3abool = true
            // }, 14000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;

        case "proof4":
            if(!proof4bool){
            // setTimeout(() => {
                
                document.getElementById(`pagina${nextName}`).style.display ="block"
                proof4bool = true
            // }, 53000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;


        case "proof6": // subir lucho NO SE PUEDE QUITAR
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="block"
        break;

        
        case "proof8":
            if(!proof8bool){
            // setTimeout(() => {
                ref8.play()
            //     document.getElementById(`pagina${nextName}`).style.display ="block"
            //     proof8bool = true
            // }, 53000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;
        
        case "proof13":
            if(!proof13bool){
                ref9.play()
                setTimeout(() => {
                    document.getElementById(`pagina${nextName}`).style.display ="block"
                    proof13bool = true
                }, 50000);
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }

            break;

        case "proof15": // este cambia
            if(!derYDeb){
                ref16.play()
                derYDeb = true

            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"
            }
            break;
        
        case "proof16": //NO SE MODIFICAN
        if(!proof17bool){
            ref17.play()
            setTimeout(() => {
                document.getElementById(`pagina${nextName}`).style.display ="block"    
            }, 17000);
            proof17bool = true

        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
        }
        break;
    
        case "proof17": 
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
        break;
        
        
        case "proof18": //pista nivles vistos
        if(!proof18bool){
                 ref21.play()
                document.getElementById(`pagina${nextName}`).style.display ="none"
                document.getElementById(`pagina${nextName2}`).style.display ="none"
                proof18bool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
            }
            break;
        
            
        case "proof24": // ele juego de arratrar
        if(!proof24bool){
            ref24.play()
            proof24bool == true
            document.getElementById(`pagina${nextName}`).style.display ="none"
            
            document.getElementById("parentezco").disabled = true
            document.getElementById("parentezco").classList.remove("clasegover")
            setTimeout(() => {
                document.getElementById("parentezco").disabled = false
                document.getElementById("parentezco").classList.add("clasegover")
            }, 11000);

            
        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
        }
            break;

        case "proof29":  //modificar
            if(!proof29bool){
                ref30.play()
                document.getElementById(`pagina${nextName}`).style.display ="none"
                document.getElementById(`pagina${nextName2}`).style.display ="none"
                proof29bool = true
            } else {
                document.getElementById(`pagina${nextName}`).style.display ="block"
                document.getElementById(`pagina${name}`).style.display ="none"            }
            break;            

        // case "proof30":
        //     if(!proof30bool){
        //         document.getElementById(`pagina${nextName}`).style.display ="none"
        //         document.getElementById(`pagina${nextName2}`).style.display ="none"
        //         proof30bool = true
        //     } else {
        //         document.getElementById(`pagina${nextName}`).style.display ="block"
        //     }
        //     break;


        case "proof32": // listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;
        
        case "proof33": 
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof34":
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break;

        case "proof36": //listo
                document.getElementById(`pagina${nextName}`).style.display ="block"
            break;

        case "proof37": // listo
        if(!proof37bool){
            document.getElementById(`pagina${nextName}`).style.display ="none"
            proof37bool = true
        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
        }
        break;           

        case "proof39": // listo
        if(!proof39bool){
            document.getElementById(`pagina${nextName}`).style.display ="none"
            proof39bool = true
        } else {
            document.getElementById(`pagina${nextName}`).style.display ="block"
        }
        break;           

 
        default:
            document.getElementById(`pagina${nextName}`).style.display ="block"
            document.getElementById(`pagina${name}`).style.display ="none"
            break;
    }

    document.getElementById(`pagina${name}`).style.display ="none"

}

btnNextSonidos.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        sonidoNext(event.target.name, btnNextSonidos[index+1].name, btnNextSonidos[index+2].name)
    })
})










