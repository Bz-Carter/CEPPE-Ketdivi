import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // header variables
  title = 'A propos';
  subtitle = 'Tout Savoir A Propos De Nous';
  image = 'assets/images/services/home-testi-bg.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
