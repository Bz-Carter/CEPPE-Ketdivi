import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialInterceptor } from './interceptors/credential.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ServiceListeComponent } from './components/service-liste/service-liste.component';
import { LevelListeComponent } from './components/level-liste/level-liste.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FicheFloat1Component } from './components/fiche-float1/fiche-float1.component';
import { NewsComponent } from './components/news/news.component';
import { WriteUsComponent } from './components/write-us/write-us.component';
import { NewslettersComponent } from './components/newsletters/newsletters.component';
import { PregistrationComponent } from './pages/pregistration/pregistration.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { Grid2Component } from './components/grid2/grid2.component';
import { OtherTabPostComponent } from './components/other-tab-post/other-tab-post.component';
import { PortfolioCarouselComponent } from './components/portfolio-carousel/portfolio-carousel.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ProgramComponent } from './pages/program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    ServiceListeComponent,
    LevelListeComponent,
    TestimonialComponent,
    FicheFloat1Component,
    NewsComponent,
    WriteUsComponent,
    NewslettersComponent,
    PregistrationComponent,
    ThankYouComponent,
    Grid2Component,
    OtherTabPostComponent,
    PortfolioCarouselComponent,
    PageTitleComponent,
    TagListComponent,
    CategoryListComponent,
    BlogComponent,
    SidebarComponent,
    Error404Component,
    Error500Component,
    ProgramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
