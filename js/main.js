// comando carrossel de imagens
$(document).ready(function () {
  $("#carousel-images").slick({
    autoplay: true, // imagens do carrossel alternar sozinho
  });

  // comando para ao clicar no menu hamburguer, aparecer o menu
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  // comando para aplicar máscara no formulário telefone
  $("#telefone").mask("(00) 00000-0000");

  // aplicando validação do formulário
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },
    // mensagem de campo obrigatório
    messages: {
      nome: "Por favor, insira seu nome",
      telefone: "Este campo é obrigatório",
      email: "Este campo é obrigatório",
      // veiculoDeInteresse: "Este campo é obrigatório",
    },
    // mensagem caso tenha algo errado ao clicar no botão 'enviar'
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      alert(`Existem ${camposIncorretos} campos incorretos!`);
    },
  });
  //   função para quando clicar no veículo de interesse, rolar para o formulário
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");

    // função para preencher o campo de interesse com o carro desejado
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
