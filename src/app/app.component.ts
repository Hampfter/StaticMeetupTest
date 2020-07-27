import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Fred_old';

  async ngOnInit(): Promise<void> {
    const { name } = await (await fetch(`/api/name`)).json();
    document.querySelector('#name').textContent = name;
    this.name = name;

  }

}
