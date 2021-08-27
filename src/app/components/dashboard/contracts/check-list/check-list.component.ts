import { Component, OnInit } from '@angular/core';
import { CheckListContractService } from 'src/app/services/contracts/check-list-contract.service';
interface CheckList {
  id: string;
  name: string;
  state: string;
}
@Component({
  selector: 'check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  panelOpenState = false;
  checksList: CheckList[] = [
    {id: '1', name:'Indicaciones de contrato con VoBo Gerencia', state: 'Pendiente'},
    {id: '2', name:'Convenio Administracion firmado o Carta de condiciones', state: 'Pendiente'},
    {id: '3', name:'Rut del propietario (P.Natural o Juridica) actualizado año corriente', state: 'Pendiente'},
    {id: '4', name:'Camara Comercio Propietario (P. Juridica)', state: 'Pendiente'},
    {id: '5', name:'Poder Especial (casos firmante no es el propietario', state: 'Pendiente'},
    {id: '6', name:'Certificado Tradicion o escritura o medidas y linderos especificos en caso de no estar el inmueble desenglobado', state: 'Pendiente'},
    {id: '7', name:'Carta autorización Seguro/ Fianza Amparo Integral', state: 'Pendiente'},
    {id: '8', name:'Inventario de entrega.', state: 'Pendiente'},
    {id: '9', name:'Novedad de Ingreso Seguro o Fianza (sello recibido)', state: 'Pendiente'},
    {id: '10', name:'Copia de recibo de caja o volante consignación', state: 'Pendiente'},
    {id: '11', name:'Cuenta de cobro ', state: 'Pendiente'},
    {id: '12', name:'Tres contratos originales firmados y autenticados ', state: 'Pendiente'},
    {id: '13', name:'Hoja de Linderos y medidas según el caso.', state: 'Pendiente'},
    {id: '14', name:'Hoja del Asegurable o aprobado según el caso (direccion y valor deben coincidir con contrato)', state: 'Pendiente'},
    {id: '15', name:'Formato de autorizacion de Tratamiento de datos. (propietarios,Arrendatario,Codeudores)', state: 'Pendiente'},
    {id: '16', name:'Solicitudes de arrendamiento', state: 'Pendiente'},
    {id: '17', name:'Rut del arrendatario y/o codeudores (P.Juridica) actualizado año corriente', state: 'Pendiente'},
    {id: '18', name:'Camara de comercio arrendatario y/o codeudores (P.juridica). Vigencia 30 días.', state: 'Pendiente'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
