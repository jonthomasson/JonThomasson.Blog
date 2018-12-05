import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { Posts } from "./blog/posts.component";
import { PostDetail } from "./blog/postDetail.component";
import { PostsList } from "./blog/postsList.component";

import { DataService } from "./shared/dataService"

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

let routes = [
    { path: "", component: Posts },
    { path: "post/:id", component: PostDetail },
];

@NgModule({
  declarations: [
      AppComponent,
      Posts,
      PostsList,
      PostDetail
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
  providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
