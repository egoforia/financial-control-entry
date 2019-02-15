import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Entry } from './entry';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 7418cdef-7c12-41ca-a199-72b4488270c6'
  })
};
const financialControlUrl = "https://coda.io/apis/v1beta1/docs/_fa45ly3hb/tables/grid-wB7Sddmz8Q";

@Injectable({
  providedIn: 'root'
})
export class CodaAPIService {

  constructor(private http: HttpClient) { }

  example = {
    "rows": [
      {
        "cells": [
          { "column": "Value", "value": "4309.80" }	
        ]
      }
    ]
  }

  saveEntry(entry:Entry) {
    const codaEntry = {
      "rows": [
        {
          "cells": [
            { "column": "Value",        "value": entry.value },
            { "column": "Description",  "value": entry.description },
            { "column": "Date",         "value": `${entry.date.month}/${entry.date.day}/${entry.date.year}` },
            { "column": "Time",         "value": `${entry.time.hour}:${entry.time.minute}` },
          ]
        }
      ]
    }

    return this.http.post(
      financialControlUrl + '/rows',
      codaEntry,
      httpOptions
    );
  }
  
}
