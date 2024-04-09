import {animal} from "./clases/animal.mjs";
import {Leon} from "./clases/Leon.mjs";
import {Lobo} from "./clases/Lobo.mjs";
import {Serpiente} from "./clases/Serpiente.mjs";
import {Aguila} from "./clases/Aguila.mjs";
import {Oso} from "./clases/Oso.mjs";
import {animalesModulo} from "./modulos/animalesModulo.mjs"

// Obtención de data utilizando animalesModulo
let animalData = '';
animalesModulo.getAnimalData()
    .then(data => animalData = data)
    .catch(err => {
    alert("Lo sentimos, no es posible cargar la data de los animales. Intente recargando la página")
    console.error(err)
    })

const constructoresAnimal = {
    Leon: Leon,
    Lobo: Lobo,
    Aguila: Aguila,
    Oso: Oso,
    Serpiente: Serpiente
}

// cambio de img de formulario

document.getElementById("animal").addEventListener("change", async function(){
    let baseUrl = " ."
    let recurso = "/animales.json"
    // obtenemos data del usuario y disponible
    let response = await fetch(baseUrl + recurso);
    let data = await response.json()

    const seleccion = this.value;
    const animalSeleccionado = data.animales.find(animal => animal.name == seleccion)
    // animalSeleccionado(name:string,img:string,sonido:string)

    console.log(animalSeleccionado.imagen)

    document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`
    })

    // envío del formulario
document.getElementById("btnRegistrar").addEventListener("click", function() {
    
    // Análisis formulario //
    const seleccion = document.getElementById("animal").value
    const edadAnimal = document.getElementById("edad").value
    const comentariosAnimal = document.getElementById("comentarios").value

    // si hay algún campo está vacío
    if ( !seleccion || !edadAnimal || !comentariosAnimal ) {
      // en caso de estar en blanco se envia un alert
      alert("Entregue más información para crear animal")
    } else {
      const dataAnimalSeleccionado = animalData.animales.find(animal => animal.name == seleccion)
  
      // instancia del animal
      let nuevoAnimal = new constructoresAnimal[seleccion](
        seleccion,
        edadAnimal,
        dataAnimalSeleccionado.imagen,
        comentariosAnimal,
        dataAnimalSeleccionado.sonido
      )
      
      // agrega el animal al array con animales
      animalesModulo.animalesArray.push(nuevoAnimal)
  
      // renderiza las cartas
      animalesModulo.renderAnimales()
  
      // limpiar datos del formulario
      document.getElementById("animal").selectedIndex = 0
      document.getElementById("edad").selectedIndex = 0;
      document.getElementById("comentarios").value = ''
      document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/lion.svg)`
  
    }
  })
