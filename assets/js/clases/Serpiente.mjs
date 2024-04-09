import{animal} from "./animal.mjs";

class Serpiente extends animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    sissear() {
        return 'ssssss'
    }
}

export { Serpiente }