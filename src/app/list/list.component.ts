import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';
import { Subject } from 'rxjs';
import { debounceTime, map, tap, filter } from 'rxjs/operators';

export type ListAction = {
  type: 'DELETE' | 'EDIT',
  payload: number
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: Array<Article>;
  @Output() onAction: EventEmitter<ListAction>;
  keywords: string;
  filteredData: Array<Article>;
  search: Subject<string>;

  constructor() {
    this.data = [];
    this.onAction = new EventEmitter();
    this.filteredData = [];
    this.search = new Subject();
  }

  doAction(type: ListAction['type'], id: number) {
    this.onAction.next({
      type,
      payload: id
    });
  }

  doSearch() {
    this.search.next(this.keywords);
  }

  ngOnInit() {
    this.search.pipe(
      debounceTime(1000), // Délai sur la saisie utilisateur
      filter((keywords) => !!keywords), // Empêcher une recherche vide
      tap((keywords) => console.log(`recherche de ${this.keywords}`)), // Surveiller les données qui passent dans l'observable
      map((keywords) => this.keywords.toLowerCase()), // Transformation en minuscules
      map((keywords) => this.data.filter( // Filtrage
        (article) =>
           (article.title.toLowerCase().indexOf(keywords) >= 0
        || article.content.toLowerCase().indexOf(keywords) >= 0)
      ))
    ).subscribe((results: Array<Article>) => this.filteredData = results);
  }
}
