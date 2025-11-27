import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'introduccion',
        loadComponent: () => import('./page/introduccion/introduccion.component').then(m => m.IntroduccionComponent)
    },
    {
        path: 'objetivos',
        loadComponent: () => import('./page/objetivos/objetivos.component').then(m => m.ObjetivosComponent)
    },
    {
        path: 'objetivos',
        loadComponent: () => import('./page/objetivos/objetivos.component').then(m => m.ObjetivosComponent)
    },
    {
        path: 'contenido',
        loadComponent: () => import('./page/contenido/contenido.component').then(m => m.ContenidoComponent)
    },
    {
        path: 'actividad',
        loadComponent: () => import('./page/actividad/actividad.component').then(m => m.ActividadComponent)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
