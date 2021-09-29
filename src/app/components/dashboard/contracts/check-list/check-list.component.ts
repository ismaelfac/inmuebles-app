import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';


//**Services */
import { PropertiesContractService } from 'src/app/services/contracts/properties-contract.service';
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

  progressList: Array<any> = [];
  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'buffer';
  value = 50;
  bufferValue = 10;

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
  constructor(private _propertyContract: PropertiesContractService) { }

  ngOnInit(): void {
    this.getPropertiesContract('253070');
  }

  getPropertiesContract(contractId: string) {
    this._propertyContract.getPropertiesContractId(contractId).subscribe(data => {
      this.progressList.push(data);
      console.log(this.progressList);
    });
  }

}
