import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrida-aceita',
  templateUrl: './corrida-aceita.page.html',
  styleUrls: ['./corrida-aceita.page.scss'],
})
export class CorridaAceitaPage implements OnInit {

  accept = true;
  client = false;

  constructor() { }

  ngOnInit() {
  }

  showClient() {
    this.accept = false;
    this.client = true;
  }

}
