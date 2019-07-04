import { Component, OnInit } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private service: ArticleService) {
  }

  ngOnInit() {
    this.service.initialize();
  }
}
