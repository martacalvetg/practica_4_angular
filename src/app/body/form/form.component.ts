import { Component, OnInit, Injectable, ElementRef, ViewChild  } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../clientes/clientes.component';
import { isValidDni } from "nif-dni-nie-cif-validation";
import { bdServices } from 'servicios/bdServices';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
   validatorDNI(dni:FormControl){
       if (isValidDni(dni.value)) {return {colorErroneo:true};}
       else {return null;}
     }

    nombre: FormControl = new FormControl('', Validators.required);
    apellido1: FormControl = new FormControl('', [Validators.minLength(3), Validators.maxLength(10)]);
    apellido2: FormControl = new FormControl('');
    provincia: FormControl = new FormControl('', Validators.required);
    destino: FormControl = new FormControl('', Validators.required);
    email: FormControl = new FormControl('', [Validators.email, Validators.required]);
    tlf: FormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(13)]);
    comapania: FormControl = new FormControl('');
    fnacimiento: FormControl = new FormControl('', Validators.required);
    dni: FormControl = new FormControl('',[ this.validatorDNI, Validators.required, Validators.maxLength(9), Validators.minLength(9)]);

    provincias: Array<string> = ['Barcelona', 'Girona', 'Tarragona', 'Lleida'];

    destinos: Array<string> = [];
    error:string = "";
    error2:string = "";

    MyNewForm: FormGroup = new FormGroup({nombre: this.nombre,
                                          apellido1: this.apellido1,
                                          apellido2: this.apellido2,
                                          provincia: this.provincia,
                                          destino: this.destino,
                                          email: this.email,
                                          tlf: this.tlf,
                                          dni: this.dni,
                                          fnacimiento: this.fnacimiento,
                                          comapania: this.comapania});
  
  constructor(private bdServices:bdServices){}

  ngOnInit() {}
  


  //ADD CLIENTES

  clientes:Cliente[] = [ ];
  clienteName:string = "";
  clienteEmail:string = "";
  clienteProvincia:string = "";
  clienteDestino:string = "";
  @ViewChild("itNombre") itNombre!: ElementRef;
  @ViewChild("itEmail") itEmail!: ElementRef;
  @ViewChild("itProvincia") itProvincia!: ElementRef;
  @ViewChild("itDestino") itDestino!: ElementRef;
  @ViewChild("itDni") itDni!: ElementRef;
  @ViewChild("itTlf") itTlf!: ElementRef;
  

  changeProvincia(event: any){

    if(event.target.value == "1: Barcelona"){
      this.destinos = ['Castell del Burriac','Monestir de Sant Cugat', 'Montserrat', 'Parc de la ciutadella', 'Barri Gòtic', 'Mura'];
    }
    if(event.target.value == "2: Girona"){
      this.destinos = ['Besalú','Camporodón', "Ruines d'Empúries", "La fageda d'en Jordà", 'Pals', 'Santuari de Montgrony'];
    }
    if(event.target.value == "3: Tarragona"){
      this.destinos = ['Amfitetre','Circs romans', 'Montblanc', 'Monestir Poblet', 'Coves de Benifernet', "Delta de l'Ebre"];
    }
    if(event.target.value == "4: Lleida"){
      this.destinos = ['Lleida','Lleida', 'Lleida', 'Lleida', '', ''];
    }
  }

  
  public createCliente(datos: FormGroup){
    const clientes: Cliente = {
      name: this.nombre.value,
      apellido1: this.apellido1.value,
      apellido2: this.apellido2.value,
      provincia: this.provincia.value,
      destino: this.destino.value,
      email: this.email.value,
      tlf: this.tlf.value,
      dni: this.dni.value,
      fnacimiento: this.fnacimiento.value,
      comapania: this.comapania.value
    };
    console.log(clientes);
    this.bdServices.postClientes(clientes).subscribe(
      data => {},
      error =>{ this.error2 =error}
    );
  }
}
