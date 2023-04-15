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
import { Ss5CountdownComponent } from './ss5_compenent_interaction/ss5-countdown/ss5-countdown.component';
import { StudentComponent } from './ss5_compenent_interaction/ss5_student/student/student.component';
import { StudentDetailComponent } from './ss5_compenent_interaction/ss5_student/student-detail/student-detail.component';
import { StudentCreateComponent } from './ss5_compenent_interaction/ss5_student/student-create/student-create.component';


@NgModule({
  declarations: [
    AppComponent,
    Ss3CalculatorComponent,
    Ss3ColorPickerComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent,
    Ss5CountdownComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentCreateComponent
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
