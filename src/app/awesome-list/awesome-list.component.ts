import { Component, OnInit } from '@angular/core';
import { Awesome } from '../awesome';
import { AwesomeService } from '../awesome.service';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css'],
})
export class AwesomeListComponent implements OnInit {
  awesomes!: Awesome[];

  constructor(private awesomeService: AwesomeService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.awesomeService.getAll().subscribe((response) => {
      this.awesomes = response;
    });
  }

  delete(id: number): void {
    this.awesomeService.delete(id).subscribe(() => {
      this.getAll();
    });
  }
}
