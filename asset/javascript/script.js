function cacularJuros() {
  const valorInicial = document.getElementById("valorInicial").value;
  const taxaJuros = document.getElementById("taxaJuros").value;
  const periodo = document.getElementById("periodo").value;
  const tempoInvestido = document.getElementById("tempoInvestido").value;

  let porcentagem = taxaJuros / 100;

  let calculoJuros =
    valorInicial * Math.pow(1 + porcentagem, tempoInvestido) - valorInicial;
  let valorFinal = parseFloat(valorInicial) + parseFloat(calculoJuros);
  let resultadoTotal = document.getElementById("resultadoTotal");
  let resultadoJuros = document.getElementById("resultadoJuros");

  for (let i = 1; i <= tempoInvestido; i++) {
    let juros = valorInicial * Math.pow(1 + porcentagem, i) - valorInicial;
    let valorTotal = parseFloat(valorInicial) + parseFloat(juros);
    console.log(
      `Após ${i} meses, o valor total é de R$${valorTotal.toFixed(2, 0)}`
    );
    resultadoJuros.innerHTML += `Após ${i} ${periodo}, o valor total é de R$${valorTotal.toFixed(
      2,
      0
    )}</p>`;

    document.querySelector("#resultado").classList.add("visualizar");
  }

  resultadoTotal.innerHTML = `O valor total após ${tempoInvestido} em ${periodo} é de R$${valorFinal.toFixed(
    2,
    0
  )}`;
}
