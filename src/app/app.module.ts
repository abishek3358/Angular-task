import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptorInterceptor } from './login-interceptor.interceptor';
import { JobpageComponent } from './home/jobpage/jobpage.component';
import { NewjobComponent } from './home/newjob/newjob.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JobpageComponent,
    NewjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [
    
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoginInterceptorInterceptor,
        multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
