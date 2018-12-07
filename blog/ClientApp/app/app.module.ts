import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { PostsComponent } from "./blog/posts/posts.component";
import { PostDetailComponent } from "./blog/post-detail/post-detail.component";
import { PostsListComponent } from "./blog/posts-list/posts-list.component";
import { Header } from "./shared/layout/header.component";
import { Footer } from "./shared/layout/footer.component";
import { BlogComponent } from "./blog/blog/blog.component";


import { DataService } from "./shared/dataService"

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './home/about/about.component';

let routes = [
    {
        path: "blog", component: BlogComponent, children: [
            { path: "", component: PostsListComponent },
            { path: "post/:id", component: PostDetailComponent }
        ]
    }
];

@NgModule({
  declarations: [
      AppComponent,
      PostsComponent,
      PostsListComponent,
      PostDetailComponent,
      Header,
      Footer,
      BlogComponent,
      AboutComponent
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
      DataService,
      //{ provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
