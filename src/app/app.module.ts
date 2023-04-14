import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './public/user/user.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { PaginainicioComponent } from './public/pages/paginainicio/paginainicio.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginainicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    SharedModule,
    PublicModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
