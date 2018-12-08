import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { HeaderComponent } from "./shared/layout/header/header.component";

import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './blog/blog.module';

import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      AboutComponent,
      ContactComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,
      BlogModule
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
