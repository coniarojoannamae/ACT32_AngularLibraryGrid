import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {BookComponent} from "./components/book/book.component";



const routes: Routes = [
  { path: 'book', component: BookComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
      AppComponent,
      BookComponent,
  ],

  bootstrap: [
    AppComponent
  ]
  })
export class AppModule { }