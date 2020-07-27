import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Fred';

  async ngOnInit(): Promise<void> {
    this.name = await (await fetch(`/api/name`)).json();
  }

}
