import { EventEmitter, Injectable, Output } from '@angular/core';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper, Columns, Ul } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  @Output() disparadorPDF: EventEmitter<any> = new EventEmitter();
  pdfMake: any;
  
  constructor() {
    PdfMakeWrapper.setFonts(pdfFonts);
  }

  setHeader(pdf: any, contract: any) {
    pdf.info({
      title: `Contrato No ${contract[0].contractId}`,
      author: 'Aliados Inmobiliarios s.a',
      subject: `Indicaciones de Contrato No ${contract[0].id}`,
  });
  }


  
  generatePdf(contract: any) {
    const pdf = new PdfMakeWrapper();
    this.setHeader(pdf, contract);
    pdf.header('Aliados Inmobiliarios sa');
    pdf.rawContent([
        new Columns([ new Ul([
          contract[0].id,
          contract[0].contractId
        ]).end, contract[0].contractId, contract[0].contractId ]).columnGap(10).bold().end
    ]);
    pdf.create().open();
    }

}
