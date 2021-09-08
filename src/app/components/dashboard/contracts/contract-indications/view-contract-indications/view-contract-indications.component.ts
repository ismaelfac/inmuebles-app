import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**Services */
import { PropertiesContractService } from 'src/app/services/contracts/properties-contract.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-view-contract-indications',
  templateUrl: './view-contract-indications.component.html',
  styleUrls: ['./view-contract-indications.component.css']
})
export class ViewContractIndicationsComponent implements OnInit {
  contract: any = [];
  contractId: any = '';
  constructor(private propertiesContract: PropertiesContractService, private _route: ActivatedRoute, private pdfService: PdfService) { 
    console.log(this._route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.contractId = this._route.snapshot.paramMap.get('id');
    this.propertiesContract.getPropertiesContractId(this.contractId).subscribe(data => {
      this.contract.push(data);
    })

  }

  public downloadPDF(): void {
    let documentHtml = document.getElementById('contractIndications');
    console.log(this.contract);
    this.pdfService.generatePdf(this.contract);
  }

}
