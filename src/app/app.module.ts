import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertForm } from './convertForm/convertForm.component';
import { NavBarComponent } from './navBar/navBar.component';
import { ApiService } from './service/ApiService.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConvertForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
