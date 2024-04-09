// nombre, edad, image, comentario, sonido
// get nombre, get edad, get image, seet comentarios, getsonido

class animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido
    constructor(nombre,edad,img,comentarios,sonido) {
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    }

    get nombre() {
        return this.#nombre
    }

    get edad() {
        return this.#edad
    }

    get img() {
        return this.#img
    }

    set comentarios (comentario) {
        this.#comentarios = comentario
    }

    get sonido() {
        return this.#sonido
    }
}

export {animal}

