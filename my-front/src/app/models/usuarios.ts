export class Usuarios{
    id: number;
    Edad: number;
    fechaNacimiento?: string;
    Nombre: string;
    Ciudad: string;
    Pais: string;

    constructor(id: number, Edad : number, fechaNacimiento: string, Nombre : string, Ciudad : string, Pais: string){
        this.id = id;
        this.Edad = Edad;
        this.fechaNacimiento = fechaNacimiento;
        this.Nombre = Nombre;
        this.Ciudad = Ciudad;
        this.Pais = Pais;
    }
}