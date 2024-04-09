const animalesModulo = (() => {
  const animalesArray = []

  function getAnimalData() {
    let baseUrl = "."
    let recurso = "/animales.json"

    return new Promise((resolve, reject) => {
      fetch(baseUrl + recurso)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  function renderAnimales() {
    // Define cartas como texto vacío
    let cards = ''

    // itera por cada animal para crear las cartas
    // hasta acá tiene el desafío con todos los requerimientos
    animalesArray.forEach((animal, idx) => {
      const card = `<div class="participante px-3 pb-2" id="animal-${idx}">
        <div>
          <img 
            src="./assets/imgs/${animal.img}" 
            height="200px" 
            data-toggle="modal" data-target="#exampleModal"
            width="100%"
          >
          <button class="btn btn-secondary w-100">
            <img 
              src="./assets/imgs/audio.svg" 
              height="30px"
            >
          </button>
        </div>
      </div>`

      cards += card;
    })

    document.getElementById("Animales").innerHTML = cards;

    modalEventListener()

  }

  function modalEventListener() {
    const imagenes = document.querySelectorAll(".participante > div > img")
    imagenes.forEach((img, idx) => {
      img.addEventListener("click", () => {
        updateModal(idx)
      })
    })
  }


  function updateModal(id) {
    const modal = document.querySelector(".modal-body")
    console.log(animalesArray[id])
    modal.innerHTML = `<p>${animalesArray[id].nombre}</p>
    <p>${animalesArray[id].edad}</p>
    <p>${animalesArray[id].comentarios}</p>
    `
  }

  // returned object

  return {
    getAnimalData: getAnimalData,
    animalesArray: animalesArray,
    renderAnimales: renderAnimales,
    updateModal: (id) => {updateModal(id)}
  }
})()

export { animalesModulo }