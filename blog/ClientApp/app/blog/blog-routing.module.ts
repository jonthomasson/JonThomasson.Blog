import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from "../blog/post-detail/post-detail.component";
import { PostsListComponent } from "../blog/posts-list/posts-list.component";
import { BlogComponent } from "../blog/blog/blog.component";


const blogRoutes: Routes = [
    {
        path: "", component: BlogComponent, children: [
            { path: "", component: PostsListComponent },
            { path: "post/:id", component: PostDetailComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(blogRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { }
