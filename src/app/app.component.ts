import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editing: boolean;
  articles: Array<Article>;

  constructor(private service: ArticleService) {
    this.editing = false;
  }

  swapEditing() {
    this.editing = !this.editing;
  }

  ngOnInit(): void {
    this.service.initialize().subscribe(
      (list: Array<any>) => this.articles = list,
      (error) => console.error(error)
    );
  }

  addArticle(article: any) {
    this.service.create(article.title, article.content);
  }
}
