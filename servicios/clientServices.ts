// import { Injectable } from "@angular/core";
// import { BehaviorSubject, of } from "rxjs";
// import { Observable } from 'rxjs/internal/Observable';
// import { Cliente } from "src/app/body/clientes/clientes.component";



// @Injectable()
// export class ClientesService{
// constructor(){}
//     public clienteName = new BehaviorSubject<string>('');
//     castCliente = this.clienteName.asObservable();

//     public clienteEmail = new BehaviorSubject<string>('');
//     castEmail = this.clienteEmail.asObservable();

//     public clienteProvincia = new BehaviorSubject<string>('');
//     castProvincia = this.clienteProvincia.asObservable();

//     public clienteDestino = new BehaviorSubject<string>('');
//     castDestino = this.clienteDestino.asObservable();

//     public broadCastClienteName(name:string, email:string, provincia:string, destino:string){
//         this.clienteName.next(name);
//         this.clienteEmail.next(email);
//         this.clienteProvincia.next(provincia);
//         this.clienteDestino.next(destino);
//     }

// clientes:Cliente[] = [];

//     public sendClientes(name:string, email:string, provincia:string, destino:string):Observable<Cliente[]>{
//         if(name != "" &&  email != "" && provincia != "" && destino != ""){
//             this.clientes.push({name: name, email: email, provincia: provincia, destino: destino });
//         }
//         return of (this.clientes);
//     }
// }
