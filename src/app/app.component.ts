import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { MenuNavComponent } from '@components/menu-nav/menu-nav.component';
import { IntroduccionComponent } from '@components/introduccion/introduccion.component';
import {  ObjetivosComponent } from '@components/objetivos/objetivos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MenuNavComponent, IntroduccionComponent,  ObjetivosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ovas-virtuales';
}
