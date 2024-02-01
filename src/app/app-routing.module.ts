import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './profile/header/header.component';
import { HomeComponent } from './profile/home/home.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { AboutComponent } from './profile/about/about.component';
import { ExperienceComponent } from './profile/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: "Home | Jeciel Benerayan" },
  { path: 'header', component: HeaderComponent, title: "Header | Jeciel Benerayan" },
  { path: 'projects', component: ProjectsComponent, title: "Projects | Jeciel Benerayan" },
  { path: 'about', component: AboutComponent, title: "About | Jeciel Benerayan" },
  { path: 'experience', component: ExperienceComponent, title: "Experience | Jeciel Benerayan" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
