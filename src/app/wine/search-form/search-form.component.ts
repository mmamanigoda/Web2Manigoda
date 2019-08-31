import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() onSearch: EventEmitter<string>;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.onSearch = new EventEmitter();

    this.searchForm = this.fb.group({
      'searchText': ''
    });
  }

  ngOnInit() {
  }

  search(): void {
    this.onSearch.emit(this.searchForm.value.searchText);
  }
}
