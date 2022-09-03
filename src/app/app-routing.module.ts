import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PregistrationComponent } from './pages/pregistration/pregistration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'nous-contacter', component: ContactComponent },
  { path: 'preinscription', component: PregistrationComponent },
  { path: 'blog', component: BlogComponent },

    //Route Path For The Error Page:
    { path: 'error-404', component: Error404Component },
    { path: 'error-500', component: Error500Component },
    { path: '**', pathMatch: 'full', redirectTo: 'error-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
