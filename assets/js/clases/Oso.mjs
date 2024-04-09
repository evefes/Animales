import{animal} from "./animal.mjs";

class Oso extends animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    grunir() {
        return 'gggrrrr'
    }
}

export { Oso }