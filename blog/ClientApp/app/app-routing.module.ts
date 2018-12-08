import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from "./blog/post-detail/post-detail.component";
import { PostsListComponent } from "./blog/posts-list/posts-list.component";
import { BlogComponent } from "./blog/blog/blog.component";
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

const appRoutes: Routes = [
    {
        path: "blog", component: BlogComponent, children: [
            { path: "", component: PostsListComponent },
            { path: "post/:id", component: PostDetailComponent }
        ]
    },
    { path: "contact", component: ContactComponent },
    { path: "about", component: AboutComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                useHash: true,
                enableTracing: false // for Debugging of the Routes
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
