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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // RouterModule,
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
