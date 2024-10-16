import { Routes } from '@angular/router';
import {LayoutBasicComponent} from './layouts/layout-basic/layout-basic.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      { path:'', component: HomeComponent }
    ]
  },
  { path: '**', redirectTo: '' },
];
