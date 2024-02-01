import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { HeaderComponent } from './profile/header/header.component';
import { HomeComponent } from './profile/home/home.component';
import { FooterComponent } from './profile/footer/footer.component';
import { AboutComponent } from './profile/about/about.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { ContactsComponent } from './profile/contacts/contacts.component';

//Services
import { ThemeService } from './services/theme.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Materials
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
