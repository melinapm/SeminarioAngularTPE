import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HouseCalendarComponent } from './components/house-calendar/house-calendar.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent},
  { path: 'houses', component: HouseCalendarComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
