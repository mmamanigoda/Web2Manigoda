import { Component, OnInit, Input } from '@angular/core';

import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wc-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  private wineList: Wine[] = [];
  private count: number = 0;

  private params = {
    sort: '',
    sortDirection: '',
    page: 1,
    pageSize: 5,
    filter: {
      name: ''
    }
  };

  constructor(private wineService: WineService) {
  }

  ngOnInit() {
    this.refreshWineList();
  }

  refreshWineList() {
    // this.wineList = this.wineService.getAll();
    this.wineService.getAll(this.params).subscribe(
      wineSearchRes => {
        this.wineList = wineSearchRes.wines;
        this.count = wineSearchRes.count;
      }
    );
  }

  changePage(newPage: number) {
    // console.log("[WineListComponent] New pagination page: ", newPage);
    this.params.page = newPage;
    this.refreshWineList();
  }

  changeSortCriteria(criteria: string) {
    if (this.params.sort == criteria) {
      if (this.params.sortDirection == 'desc') {
        this.params.sortDirection = '';
      } else {
        this.params.sortDirection = 'desc';
      }
    } else {
      this.params.sort = criteria;
      this.params.sortDirection = '';
    }
    this.refreshWineList();
  }

  searchbyName(searchString: string) {
    this.params.filter.name = searchString;
    this.refreshWineList();
  }
}
