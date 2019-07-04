import { Routes } from '@angular/router';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { ContactAuthorComponent } from './contact-author/contact-author.component';
import { GuardService } from './services/guard.service';

export const ROUTES: Routes = [
  {
    path: 'home',
    component: ListViewComponent
  },
  {
    path: 'dynamicform',
    component: FormViewComponent,
    outlet: 'sidebar'
  },
  {
    path: 'form',
    component: FormViewComponent,
    canActivate: [GuardService]
  },
  {
    path: 'contact',
    component: ContactViewComponent,
    children:  [
      {
        path: 'admin',
        component: ContactAdminComponent,
        pathMatch: 'full'
      },
      {
        path: 'author/:name',
        component: ContactAuthorComponent,
        pathMatch: 'full'
      }
    ]
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
