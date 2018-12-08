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
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
      AppComponent,
      PostsComponent,
      PostsListComponent,
      PostDetailComponent,
      Header,
      Footer,
      BlogComponent,
      AboutComponent,
      ContactComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [
      DataService,
      //{ provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
