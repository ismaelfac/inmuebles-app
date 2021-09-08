import { EventEmitter, Injectable, Output } from '@angular/core';
declare var jsPDF: any;
import html2canvas from 'html2canvas';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  @Output() disparadorPDF: EventEmitter<any> = new EventEmitter();
  pdfMake: any;
  constructor() {

   }
  async getTemplatePdf() {

  } 
  
  generatePdf(contract: any) {
    const doc = new jsPDF();

    doc.text(contract, 10, 10);
    doc.save(`${contract}.pdf`);
  }

}
