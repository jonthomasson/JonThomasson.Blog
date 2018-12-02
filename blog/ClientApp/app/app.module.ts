import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { Posts } from "./blog/posts.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

let routes = [
    { path: "", component: Posts },
];

@NgModule({
  declarations: [
      AppComponent,
      Posts
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
