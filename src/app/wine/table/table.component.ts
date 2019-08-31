import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Router } from '@angular/router';
import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() private wines: Wine[];
  @Output() private wineDeleted: EventEmitter<number> = new EventEmitter();
  @Output() private onSort: EventEmitter<string> = new EventEmitter();

  constructor(private wineService: WineService/*, private router :Router*/) {
  }

  ngOnInit() {
  }

  onDelete(id: number): void {
    console.log('Deleting wine ', id);
    // this.wineService.remove(id);
    this.wineService.remove(id).subscribe(
      wine => {
        this.wineDeleted.emit(wine._id);
      }
    );
  }

  // onEditWine(id :number) :void{
  //   this.router.navigate(['wines/', id]);
  // }

  onChangeSortCriteria(criteria: string) {
    this.onSort.emit(criteria);
  }
}
