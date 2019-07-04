import { Routes } from '@angular/router';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { FormViewComponent } from './form-view/form-view.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    component: ListViewComponent
  },
  {
    path: 'form',
    component: FormViewComponent
  },
  {
    path: 'contact',
    component: ContactViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'forbidden',
    component: NotFoundViewComponent,
    data: {
      imgUrl: 'https://i.chzbgr.com/full/1475826432/h670525A6/'
    }
  },
  {
    path: '**',
    component: NotFoundViewComponent,
    data: {
      imgUrl: 'https://www.hostinger.nl/assets/images/404-3a53e76ef1.png'
    }
  }
];
