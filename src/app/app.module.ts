import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ArticleService } from './services/article.service';
import { ROUTES } from './routes';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { ContactAuthorComponent } from './contact-author/contact-author.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    FormComponent,
    NotFoundViewComponent,
    ListViewComponent,
    FormViewComponent,
    ContactViewComponent,
    ContactAdminComponent,
    ContactAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
