import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Sources } from './pages/sources/sources';
import { Team } from './pages/team/team';
import { Equipment } from './pages/equipment/equipment';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'sources', component: Sources },
  { path: 'team', component: Team },
  { path: 'equipment', component: Equipment },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
