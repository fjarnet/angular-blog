import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './services/article.service';
import { ListAction } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editing: boolean;
  articles: Array<Article>;
  editArticle: Article;

  constructor(private service: ArticleService) {
    this.editing = false;
    this.editArticle = new Article();
  }

  swapEditing() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.editArticle = new Article();
    }
  }

  ngOnInit(): void {
    this.service.initialize().subscribe(
      (list: Array<any>) => this.articles = list
    );
  }

  addArticle(article: any) {
    this.service.create(article.title, article.content);
    this.swapEditing();
  }

  updateArticle(article: Article) {
    this.service.update(article);
    this.swapEditing();
  }

  listAction(action: ListAction) {
    switch (action.type) {
      case 'DELETE':
        this.service.delete(action.payload);
        break;
      case 'EDIT':
        this.editArticle = JSON.parse(JSON.stringify(this.service.read(action.payload)));
        this.swapEditing();
        break;
    }
  }
}
