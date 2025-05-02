import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Sistema de Inventario',
      description: 'Aplicación web con Angular y Firebase.',
      link: 'https://github.com/tuusuario/inventario'
    },
    {
      title: 'API de clima',
      description: 'Backend RESTful en Node.js que consume OpenWeather API.',
      link: 'https://github.com/tuusuario/api-clima'
    }
  ];


}
