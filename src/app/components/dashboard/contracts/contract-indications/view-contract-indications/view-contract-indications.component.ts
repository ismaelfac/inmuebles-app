import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-view-contract-indications',
  templateUrl: './view-contract-indications.component.html',
  styleUrls: ['./view-contract-indications.component.css']
})
export class ViewContractIndicationsComponent implements OnInit {
  contractId: any = '';
  constructor(private _route: ActivatedRoute, private pdfService: PdfService) { 
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.contractId = this._route.snapshot.paramMap.get('id');
  }

  public downloadPDF(): void {
    this.pdfService.generatePdf(this.contractId);
  }

}
