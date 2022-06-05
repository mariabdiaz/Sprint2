let papa = document.getElementById("papa");
let pricehtml = document.getElementById("pricehtml").value;
let names = new Array();
let prices = new Array();

function agregar() {
  let name = document.getElementById("namehtml").value;
  let price = document.getElementById("pricehtml").value;
  if (name.length == 0 || price == 0) {
    return false;
  } else {
    names.push(name);
    prices.push(price);
    crearElementoLi();
  }
}
function crearElementoLi() {
  const texto = document.createElement("li");
  texto.className = "list-names";
  texto.innerText = names[names.length - 1]+" : $ "+prices[prices.length - 1];
  papa.append(texto);
  suma();
}
function suma() {
  let fcsuma = 0;
  parseInt(fcsuma);
  for (let x = 0; x < prices.length; x++) {
    fcsuma = fcsuma + parseInt(prices[x]);
    console.log(fcsuma);
  }
  document.getElementById("total").innerText = "Monto Total $" + fcsuma;
  dividir();
}
function dividir() {
  let fcsuma = 0;
  parseInt(fcsuma);
  for (let x = 0; x < prices.length; x++) {
    fcsuma = fcsuma + parseInt(prices[x]);
  }
  fcsuma = fcsuma / prices.length;
  fcsuma = fcsuma.toFixed(2);
  document.getElementById("xperson").innerText =
    "Monto per capita" + fcsuma;
}