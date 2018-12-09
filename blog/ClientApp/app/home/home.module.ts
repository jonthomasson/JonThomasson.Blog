import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AboutComponent } from "../home/about/about.component";
import { ContactComponent } from "../home/contact/contact.component";
import { HomeComponent } from "../home/home/home.component";
import { HomeRoutingModule } from "../home/home-routing.module";


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        AboutComponent,
        ContactComponent,
        HomeComponent
    ]
})
export class HomeModule { }
