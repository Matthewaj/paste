import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PasteComponent} from './paste/paste.component';


const routes: Routes = [
  { path: ":id", component: PasteComponent},
  { path: "", component: PasteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
