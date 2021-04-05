class MensagemView extends View{

    _template(modelo) {
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : `<p></p>`;
    }

}