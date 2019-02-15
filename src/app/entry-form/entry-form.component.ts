import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Entry } from '../entry';
import { CodaAPIService } from '../coda-api.service';
import { Value, Description, DateTime, Submiting, Success, Error } from '../reducers/entry.actions'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  model = new Entry();

  codaAPI: CodaAPIService; 

  entry$: Observable<string>;

  constructor(codaAPI: CodaAPIService, private store: Store<{ entry: string }>) {
    this.codaAPI = codaAPI;
    this.entry$ = store.pipe(select('entry'));

    const now = new Date();
    this.model.date = { year: now.getFullYear(), month: now.getMonth(), day: now.getDate() };
    this.model.time = { hour: now.getHours(), minute: now.getMinutes() };
  }

  ngOnInit() { }

  goToDescription() {
    this.store.dispatch(new Description());
  }

  goToDateTime() {
    this.store.dispatch(new DateTime());
  }

  reload() {
    window.location.reload();
  }

  onSubmit() {
    this.store.dispatch(new Submiting());

    this.codaAPI.saveEntry(this.model)
      .subscribe((data: any) => {
        this.store.dispatch(new Success());
      });
  }

}
