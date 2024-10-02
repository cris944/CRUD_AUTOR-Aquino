import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [NabvarComponent,NgFor],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
    libros=[
      {
        nombre:'La ciudad y los perros',
        autor:'Mario Vargas LLoza',
        image:'https://bpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/5/11432/files/2015/07/LCYLP_VivaLeer_Chile-214x300.png',
        descipcion:'"La ciudad y los perros" de Mario Vargas Llosa narra la vida de cadetes en un internado militar en Lima. La novela explora temas de violencia, masculinidad y deshumanización, reflejando la brutalidad del sistema y la búsqueda de identidad en un entorno opresivo.'
      },
      {
        nombre:'La ciudad y los perros',
        autor:'Mario Vargas LLoza',
        image:'https://bpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/5/11432/files/2015/07/LCYLP_VivaLeer_Chile-214x300.png',
        descipcion:'"Pantaleón y las visitadoras es la cuarta novela del escritor peruano Mario Vargas Llosa, publicada en mayo de 1973.​ Su primer tiraje consta de cien mil ejemplares, hasta ese momento la cifra más alta de las lanzadas en sus primeras ediciones.'
      },
      {
        nombre:'La ciudad y los perros',
        autor:'Mario Vargas LLoza',
        image:'https://bpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/5/11432/files/2015/07/LCYLP_VivaLeer_Chile-214x300.png',
        descipcion:'"La ciudad y los perros" de Mario Vargas Llosa narra la vida de cadetes en un internado militar en Lima. La novela explora temas de violencia, masculinidad y deshumanización, reflejando la brutalidad del sistema y la búsqueda de identidad en un entorno opresivo.'
      },
      {
        nombre:'Mario Vargas LLoza',
        autor:'Arequipa',
        image:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982506657502.jpg',
        descipcion:'El escritor hispanoperuano y premio Nobel recibe a ‘El País Semanal’ en su casa de Madrid y se confiesa sobre la literatura y la vida, a punto de ingresar en la Academia Francesa'
      },
      {
        nombre:'Mario Vargas LLoza',
        autor:'Arequipa',
        image:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982506657502.jpg',
        descipcion:'El escritor hispanoperuano y premio Nobel recibe a ‘El País Semanal’ en su casa de Madrid y se confiesa sobre la literatura y la vida, a punto de ingresar en la Academia Francesa'
      },
      {
        nombre:'Mario Vargas LLoza',
        autor:'Arequipa',
        image:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982506657502.jpg',
        descipcion:'El escritor hispanoperuano y premio Nobel recibe a ‘El País Semanal’ en su casa de Madrid y se confiesa sobre la literatura y la vida, a punto de ingresar en la Academia Francesa'
      }
    ]
  }
