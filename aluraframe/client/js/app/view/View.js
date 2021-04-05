class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O método _Template deve ser implementado');
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }

}