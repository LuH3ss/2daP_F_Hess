import { Menu } from '../../sharedModule/interfaces/menu';
import { MenuService } from '../../servicios/menu.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: Menu[]=[];
  // opened = false;
  admin: boolean = false;
  constructor(private menuService: MenuService ) { }

  ngOnInit(): void {
    this.cargarVista();
  }

  cargarVista(){
    this.cargarMenu();
  }

  cargarMenu(): void {
    this.menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }
  inAdmin(){
    this.admin = true;
  }
  inUsuario(){
    this.admin = false;
  }

}
