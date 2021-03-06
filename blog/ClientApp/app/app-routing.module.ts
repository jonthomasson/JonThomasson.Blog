﻿import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

const appRoutes: Routes = [
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }
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
