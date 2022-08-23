import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    AcercaComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 
  NgCircleProgressModule.forRoot({
    // set defaults here
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300,
  }) 
]  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
