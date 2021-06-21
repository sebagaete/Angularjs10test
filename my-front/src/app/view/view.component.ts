import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios';
import { UsuarioService } from '../services/usuario.servicio';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listUsuarios: Usuarios [] = [];

  constructor(private usuario: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.usuario.getUsuario().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    },error =>{
      console.log("Error!" + error);
    }
    )}

}
