/////////// setTimeout ///////////

// SetTimeout Simples
// const mostraAlerta = () => {
//   alert("Set Timeout");
// };
// setTimeout(mostraAlerta, 2000);

// SetTimeout com parâmetros
// const mostraAlerta = (nome) => {
//   alert("Set Timeout - " + nome);
// };
// setTimeout(mostraAlerta, 2000, "Eduardo"); //Para cada parametro, acrescenta-se após uma virgula setTimeout(mostraAlerta, 2000, 'Eduardo', a, b, c);

// SetTimeout como cancelar
// const mostraAlerta = (nome) => {
//   alert("Set Timeout - " + nome);
// };
// const timeout = setTimeout(mostraAlerta, 3500, "Eduardo");

// setTimeout(() => {
//   clearTimeout(timeout); //Função de que cancela o setTimeout passado como parametro
// }, 1500);

/////////// SetInterval ///////////
// const interval = setInterval(() => {
//   console.log("teste");
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

/////////// requestAnimationFrame ///////////
let contador = 0;
function animation() {
  contador += 1;
  console.log(contador);
  loop = requestAnimationFrame(animation); // chamada recursiva
}

var loop = requestAnimationFrame(animation); //Primeira chamada

setTimeout(() => {
  cancelAnimationFrame(loop);
}, 5000);
