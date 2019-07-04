import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../article';
import { ListAction } from '../list/list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  articles: Array<Article>;

  constructor(private service: ArticleService, private router: Router) {
    this.articles = [];
   }

  ngOnInit() {
    this.service.readAll().subscribe(
      (list) => this.articles = list
    );
  }

  listAction(action: ListAction) {
    switch (action.type) {
      case 'DELETE':
        this.service.delete(action.payload);
        break;
      case 'EDIT':
        // this.editArticle = JSON.parse(JSON.stringify(this.service.read(action.payload)));
        this.router.navigate(['form'], {
          queryParams: {
            articleId: action.payload
          }
        });
        // TODO redirect List
        break;
    }
  }
}
