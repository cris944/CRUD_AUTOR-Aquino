import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { NgFor } from '@angular/common';
import { AutorService } from '../../services/autor.service';
import { Autor } from '../../models/autor';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [NabvarComponent, NgFor],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {
  autores:Autor[]=[];
  constructor(
    private autorService:AutorService
  ){}
  ngOnInit(){
    this.listarautores();
  }
  listarautores(){
    this.autorService.getAutores().subscribe((data)=>{
      this.autores=data;
    })
  }}