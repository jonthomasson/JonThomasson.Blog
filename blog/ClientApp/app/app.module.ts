import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
  ],
    bootstrap: [AppComponent]
    //providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
