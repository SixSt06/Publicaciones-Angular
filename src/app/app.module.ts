import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatExpansionModule} from '@angular/material/expansion'
import{ HttpClientModule} from  '@angular/common/http';
import {MatProgressSpinnerModule} from'@angular/material/progress-spinner';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { postCreateComponent } from './publicaciones/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {Headercomponet} from './header/header.component';
import { PostlistComponent } from './publicaciones/post-create/post-list/post-list.component';
import { PostService } from './publicaciones/post.service';


@NgModule({
  declarations: [
    AppComponent,
    postCreateComponent,
    Headercomponet,
    PostlistComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
