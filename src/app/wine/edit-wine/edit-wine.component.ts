import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { WineService } from '../services/wine.service';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'wc-edit-wine',
  templateUrl: './edit-wine.component.html',
  styleUrls: ['./edit-wine.component.css']
})
export class EditWineComponent implements OnInit {
  wine: Wine;
  wineForm: FormGroup;

  constructor(private fb: FormBuilder, private wineService: WineService, private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    let id: string = this.route.snapshot.params.id;
    // console.log('id param from URL: ', id);
    if (id) {
      // this.wine = this.wineService.get(Number(id));
      this.wineService.get(Number(id)).subscribe(
        wine => {
          this.wine = wine;
          this.wineForm.patchValue(this.wine);
        }
      );
    }
  }

  createForm() {
    this.wineForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(2)]],
      'year': ['', Validators.required],
      'grapes': ['', Validators.required],
      'country': ['', Validators.required],
      'region': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  onSubmit() {
    let submittedWine: Wine = new Wine(this.wineForm.value);
    if (this.wine && this.wine._id) {
      submittedWine._id = this.wine._id;
      // this.wineService.update(submittedWine);
      this.wineService.update(submittedWine).subscribe(
        wine => {
          this.wineForm.reset();
          this.router.navigate(['wines/']);
        }
      );
    } else {
      // this.wineService.add(submittedWine)
      this.wineService.add(submittedWine).subscribe(
        wine => {
          this.wineForm.reset();
          this.router.navigate(['wines/']);
        }
      );
    }

  }
}
