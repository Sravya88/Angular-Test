import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsComponent } from './regions/regions.component';


const routes: Routes = [
  {path: '', component: RegionsComponent},
  {path: 'regions', component: RegionsComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
