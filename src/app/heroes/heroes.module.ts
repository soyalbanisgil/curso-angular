import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // que componentes contiene este modulo
  declarations: [HeroeComponent, ListadoComponent],
  // que cosas quiero que sean visibles fuera de este modulo
  exports: [ListadoComponent],
  // modulos
  imports: [
    // este ofrece directivas y modulos que trae por defecto angular
    CommonModule,
  ],
})
export class HeroesModule {}
