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
