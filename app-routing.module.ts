import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cmp/home/home.component';
import { AboutusComponent } from './cmp/aboutus/aboutus.component';
import { ContactComponent } from './cmp/contact/contact.component';
import { AboutusCompanyComponent } from './aboutus-company/aboutus-company.component';
import { AboutusMeComponent } from './aboutus-me/aboutus-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact/:id',component:ContactComponent},
  
  {path:'aboutus',
     component:AboutusComponent,
    children:[
      {path:'company',component:AboutusCompanyComponent},
      {path:'me',component:AboutusMeComponent},
     ]
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
