import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  fetchStoreList() {

   return this.http.get('https://onlinegrocerystore.herokuapp.com/store/').map(
      (res) => res.json()
    );

    /* return this.http.get('https://onlinegrocerystore.herokuapp.com/store/').map(
     (res) => res.json()
     );*/
  }
}
