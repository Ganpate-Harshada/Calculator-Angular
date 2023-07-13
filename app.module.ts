import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipeComponent } from './pipe/mypipe/mypipe.component';
import { MycssComponent } from './css/mycss/mycss.component';
import { MycmpComponent } from './cmp/mycmp/mycmp.component';
import { CmpcssComponent } from './cmpcss/cmpcss.component';
import { USDINRPipe } from './pipes/usdinr.pipe';
import { HomeComponent } from './cmp/home/home.component';
import { AboutusComponent } from './cmp/aboutus/aboutus.component';
import { ContactComponent } from './cmp/contact/contact.component';
import { AboutusCompanyComponent } from './aboutus-company/aboutus-company.component';
import { AboutusMeComponent } from './aboutus-me/aboutus-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    MypipeComponent,
    MycssComponent,
    MycmpComponent,
    CmpcssComponent,
    USDINRPipe,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    AboutusCompanyComponent,
    AboutusMeComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
