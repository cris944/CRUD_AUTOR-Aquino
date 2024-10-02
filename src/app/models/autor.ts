export class Autor {
    id:number;
    nombres:String;
    apellidos:string;
    pais:string;
    foto:string;
    estado:string

    constructor(id:number=0,
        nombres:String='',
        apellidos:string='',
        pais:string='',
        foto:string='',
        estado:string='',){
            this.id=id;
            this.nombres=nombres;
            this.apellidos=apellidos;
            this.pais=pais;
            this.foto=foto;
            this.estado=estado;
        }

}
