import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Article } from '../article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() article: Article;
  @Output() onCreate: EventEmitter<any>;
  @Output() onUpdate: EventEmitter<Article>;

  constructor() {
    this.article = new Article();
    this.onCreate = new EventEmitter();
    this.onUpdate = new EventEmitter();
  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    if (this.article.id != null) {
      this.onUpdate.next({
        ...this.article
      });
    } else {
      this.onCreate.next({
        title: this.article.title,
        content: this.article.content
      });
    }

    form.resetForm(new Article());
    this.article.id = undefined;
  }

}
