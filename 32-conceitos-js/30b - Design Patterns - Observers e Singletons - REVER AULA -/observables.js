////// Observables //////
class Subject {
  constructor() {
    this.observadores = [];
  }

  assinarObservavel(observador) {
    this.observadores.push(observador);
  }

  notificarObservador(observador) {
    const index = this.observadores.indexOf(observador);
    if (index > -1) {
      this.observadores[index].notificar(index);
    } else {
      console.log("Esse observador não existe");
    }
  }

  notifiarTodosObservadores() {
    this.observadores.forEach((observador, index) =>
      observador.notificar(index)
    );
  }
}

class Observer {
  notificar(index) {
    console.log(`Observador ${index} foi notificado!`);
  }
}

const subject = new Subject();
const observador0 = new Observer();
const observador1 = new Observer();
const observador2 = new Observer();
const observador3 = new Observer();

subject.assinarObservavel(observador0);
subject.assinarObservavel(observador1);
subject.assinarObservavel(observador2);
subject.assinarObservavel(observador3);

subject.notificarObservador(observador1);
subject.notifiarTodosObservadores();
