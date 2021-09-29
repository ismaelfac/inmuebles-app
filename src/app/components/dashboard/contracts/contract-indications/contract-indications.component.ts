import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-indications',
  templateUrl: './contract-indications.component.html',
  styleUrls: ['./contract-indications.component.css']
})
export class ContractIndicationsComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
    this.downloadPDF();
  }

  public downloadPDF(): void {
    //const doc = new jsPDF();

    //doc.text('Hello world!', 10, 10);
    //doc.save('hello-world.pdf');
  }

}
