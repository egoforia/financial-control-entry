import { Component, OnInit } from '@angular/core';

import { Entry } from '../entry';

import { CodaAPIService } from '../coda-api.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  
  model = new Entry();

  loading = false;
  success = false;
  error = false;
  codaAPI: CodaAPIService;

  

  constructor(codaAPI: CodaAPIService) {
    this.codaAPI = codaAPI;
    const now = new Date();

    this.model.date = { year: now.getFullYear(), month: now.getMonth(), day: now.getDate() };
    this.model.time = { hour: now.getHours(), minute: now.getMinutes() };
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("model", this.model);
    this.loading = true;
    this.codaAPI.saveEntry(this.model)
      .subscribe((data: any) => {
        console.log(data);
        this.success = true;
      });
  }

}
