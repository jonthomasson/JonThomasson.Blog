import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PostsComponent } from "../blog/posts/posts.component";
import { PostDetailComponent } from "../blog/post-detail/post-detail.component";
import { PostsListComponent } from "../blog/posts-list/posts-list.component";
import { BlogComponent } from "../blog/blog/blog.component";
import { BlogRoutingModule } from "../blog/blog-routing.module";
import { DataService } from "../blog/shared/data-service"


@NgModule({
  imports: [
      CommonModule,
      BlogRoutingModule
  ],
    declarations: [
        PostsComponent,
        PostsListComponent,
        PostDetailComponent,
        BlogComponent
    ],
    providers: [
        DataService,
        //{ provide: APP_BASE_HREF, useValue: '/' }
    ],
})
export class BlogModule { }
