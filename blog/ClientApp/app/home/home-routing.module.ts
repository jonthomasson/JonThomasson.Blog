import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "../home/about/about.component";
import { ContactComponent } from "../home/contact/contact.component";
import { HomeComponent } from "../home/home/home.component";


const homeRoutes: Routes = [
    {
        path: "", component: HomeComponent, children: [
            { path: 'contact', component: ContactComponent },
            { path: 'about', component: AboutComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
