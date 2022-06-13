import { MenuService } from '../../servicios/menu.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/sharedModule/interfaces/menu';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  menu: Menu[]=[]
  admin: boolean = false;

  constructor(private menuService: MenuService) { }

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


}
