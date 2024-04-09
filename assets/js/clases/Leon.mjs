import{animal} from "./animal.mjs";

class Leon extends animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    rugir() {
        return 'rugiendo'
    }
}

export { Leon }
