import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan', 'IronMan', 'Hawkeye'];
  heroeBorradoValue: string = '';

  borrarHeroe() {
    const heroeBorrado = this.heroes.pop() || '';
    console.log(heroeBorrado);
    this.heroeBorradoValue = heroeBorrado;
  }
}
