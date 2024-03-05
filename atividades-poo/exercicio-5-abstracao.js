//  Crie uma classe abstrata Animal com um método abstrato emitirSom. 
//  Em seguida, crie classes Cachorro e Gato que herdam de Animal e implementam o método emitirSom.

class Animal {
    emitirSom() {
        throw new Error("Método 'emitirSom' deve ser implementado");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        return "Au au!";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }
}

let cachorro1 = new Cachorro();
console.log(cachorro1.emitirSom());

let gato1 = new Gato();
console.log(gato1.emitirSom());
  