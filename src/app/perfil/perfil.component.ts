import { Component, OnInit } from '@angular/core';


import { ControllerService } from './../shared/controller.service';
import { CardsPerfilComponent } from './../cards-perfil/cards-perfil.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private controller: ControllerService
  ) {}

  ngOnInit() {
  }

  public logout() {
    this.controller.logOut();
    this.controller.navigate('');
  }

  public addNewCard() {
    if (this.controller.getUserLogado() != null) {
      this.controller.navigate('/perfil/novo-card');
    } else {
      this.controller.navigate('/login');
    }
  }

  public getUsername(): string {
    return this.controller.getUserLogado().getUsername();
  }

}
