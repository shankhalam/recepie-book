import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recepies',
    pathMatch: 'full'
  },
  {
    path:'recepies',
    component: RecepiesComponent
  },
  {
    path: 'recepies/:recepieId',
    component: RecepieDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
