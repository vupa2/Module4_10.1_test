import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AwesomeService } from '../awesome.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.css'],
})
export class AwesomeEditComponent implements OnInit {
  id!: number;
  awesomeForm!: FormGroup;

  constructor(
    private awesomeService: AwesomeService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    });
  }

  private initForm() {
    this.awesomeService
      .get(this.id)
      .pipe(first())
      .subscribe((awesome) => {
        this.awesomeForm = this.fb.group({
          tag: [awesome?.tag],
          url: [awesome?.url],
          descriptions: [awesome?.descriptions],
        });
      });
  }

  onSubmit() {
    this.awesomeService.update(this.id, this.awesomeForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
