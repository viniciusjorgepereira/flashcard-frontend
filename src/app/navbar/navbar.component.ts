import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) { }

  ngOnInit() {
    this.controller.reloadPage();
  }

  public getInfoNavbar(): string {
    const user = this.controller.getUserLogado();
    if (user != null) {
      return 'Perfil';
    } else {
      return 'Login';
    }
  }

}
