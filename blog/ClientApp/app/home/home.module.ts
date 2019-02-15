import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "../home/about/about.component";
import { ContactComponent } from "../home/contact/contact.component";
import { HomeComponent } from "../home/home/home.component";
import { HomeRoutingModule } from "../home/home-routing.module";
import { HomeDataService } from "../home/shared/home-data.service"


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule
    ],
    declarations: [
        AboutComponent,
        ContactComponent,
        HomeComponent
    ],
    providers: [
        HomeDataService
    ],
})
export class HomeModule { }
