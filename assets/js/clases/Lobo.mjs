import{animal} from "./animal.mjs";

class Lobo extends animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    aullar() {
        return 'auuuu!!!'
    }
}

export { Lobo }