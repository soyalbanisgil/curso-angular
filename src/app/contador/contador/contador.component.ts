// este componente fue creado manualmente
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <!-- los eventos son definidos con parentesis -->
    <button (click)="number = number + 1">+ 1</button>

    <span>{{ number }}</span>

    <button (click)="number = number - 1">- 1</button>

    <!-- no se aconseja que la logica se escriba en este template, se recomienda hacerlo en el compnent.ts -->
    <br />
    <br />

    <!-- Vamos a utilizar el metodo que se encuentra en app.component.ts -->
    <button (click)="sumar()">+ 1</button>

    <span>{{ secondNumber }}</span>

    <button (click)="restar()">- 1</button>

    <br />
    <br />

    <!-- Ahora usando el metodo acumular -->
    <button (click)="acumular(1)">+ 1</button>

    <span>{{ thirdNumber }}</span>

    <button (click)="acumular(-1)">- 1</button>

    <br />
    <br />

    <!-- tarea -->
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumulador()">+ {{ base }}</button>
    <span>{{ numberTarea }}</span>
    <button (click)="acumulador(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'App Contador';
  // ocupamos una variable o propiedad para manipular el contador
  number: number = 10;
  secondNumber: number = 5;
  thirdNumber: number = 1;

  numberTarea: number = 10;
  base: number = 5;

  // vamos a crear un metodo para manipular los botones
  sumar() {
    this.secondNumber += 1;
  }
  restar() {
    this.secondNumber -= 1;
  }

  // para tener ambos metodos en un solo metodo
  acumular(valor: number) {
    this.thirdNumber += valor;
  }

  // acumulador 5 en 5
  acumulador(numeroValor: number = this.base) {
    this.numberTarea += numeroValor;
  }
}
