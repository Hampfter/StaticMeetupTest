import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = '...';
  userData: any;

  async ngOnInit(): Promise<void> {
    const { name } = await (await fetch(`/api/name`)).json();
    this.name = name;

    const { clientPrincipal } = await (await fetch(`/.auth/me`)).json();
    this.userData = clientPrincipal;
  }

}
