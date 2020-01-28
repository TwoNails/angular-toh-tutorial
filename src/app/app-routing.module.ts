import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
      { path: 'heroes', component: HeroesComponent }
                        ]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule  // Je ne suis pas sûr de comprendre la différence entre importer RouterModule depuis Angular et importer RouterModule depuis ce composant.

    // RouterModule tel qu'exporté depuis ce composant contient les routes qui lui ont été attribuées à l'initialisation (voir imports:[])
  ],
  declarations: []
})
export class AppRoutingModule { }