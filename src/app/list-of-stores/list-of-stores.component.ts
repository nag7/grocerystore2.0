import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-of-stores',
  templateUrl: './list-of-stores.component.html',
  styleUrls: ['./list-of-stores.component.css'],
  providers: [DataService]
})
export class ListOfStoresComponent implements OnInit {
stores: any = []
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchStoreList().subscribe(
      (res) => {
        this.stores = res;  } );
  }

}
