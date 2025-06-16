import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio';
import { ServiciosComponent } from './pages/servicios/servicios';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento';
import { UbicacionComponent } from './pages/ubicacion/ubicacion';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'seguimiento', component: SeguimientoComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];
