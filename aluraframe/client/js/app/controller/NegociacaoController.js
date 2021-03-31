class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
        event.preventDefault();
        let dateHelper = new DateHelper();

        let data = new Date(dateHelper.textoParaData(this._inputData.value));
        let diaMesAno = dateHelper.dataParaTexto(data);

        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

        console.log(diaMesAno);
        console.log(negociacao);

    }

}