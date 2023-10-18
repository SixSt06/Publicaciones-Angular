import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { postCreateComponent } from './publicaciones/post-create/post-create.component';
import { PostlistComponent } from './publicaciones/post-create/post-list/post-list.component';

const routes: Routes = [
  {path: '', component:PostlistComponent},
  {path:'create', component:postCreateComponent},
  {path: 'edit/:postId', component:postCreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
