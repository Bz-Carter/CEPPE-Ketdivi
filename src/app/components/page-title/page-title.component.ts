import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
