import { Component } from '@angular/core';
import { bdServices } from 'servicios/bdServices';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  clientes: Cliente[] = [];
  clienteName: any = "";
  clienteEmail: any = "";
  clienteProvincia: any = "";
  clienteDestino: any = "";

  constructor(private data:bdServices) {}

  ngOnInit(): void {
    this.data.getClientes().subscribe({
    next: (data) => {
      console.log(data);
      this.clientes = data;
      console.log(this.clientes);
    },
    error: (error) => { console.log(error); },
    complete: () => { console.log("complete"); }
    });
  }

  public deleteUser(email: any){
    this.data.deleteCliente(email).subscribe(
      response => {
        this.clientes = this.clientes.filter(item => item.email !== email);
        console.log("response: " + response);
      }
    )
  }


} export interface Cliente {
    name: string;
    email: string;
    provincia: string;
    destino: string;
    dni: string;
    tlf: number;
    fnacimiento: Date;
    comapania: boolean;
    apellido1: string;
    apellido2: string;
  }
