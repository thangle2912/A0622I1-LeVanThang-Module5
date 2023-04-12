import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ss3CalculatorComponent } from './ss3_angular_overview/ss3-calculator/ss3-calculator.component';
import { Ss3ColorPickerComponent } from './ss3_angular_overview/ss3-color-picker/ss3-color-picker.component';
import {FormsModule} from '@angular/forms';
import { ArticleComponent } from './ss4_angular_component/components/article/article.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    Ss3CalculatorComponent,
    Ss3ColorPickerComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
