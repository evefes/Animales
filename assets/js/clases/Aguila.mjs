import{animal} from "./animal.mjs";

class Aguila extends animal {
    constructor(nombre,edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    chilla() {
        return 'chiiiiaaa!'
    }
}

export { Aguila }