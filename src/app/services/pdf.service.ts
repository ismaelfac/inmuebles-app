import { EventEmitter, Injectable, Output } from '@angular/core';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper, Columns, Ul, Table, Txt, Cell } from 'pdfmake-wrapper';
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
    pdf.styles({
        title: {
            bold: true,
            'align-items': 'center'
        },
        style2: {
            italics: true
        }
    });
    pdf.info({
      title: `Contrato No ${contract[0].contractId}`,
      author: 'Aliados Inmobiliarios s.a',
      subject: `Indicaciones de Contrato No ${contract[0].id}`,
    });
  }

  setArrendatario(pdf: any, contract: any) {
    new Columns([ `Arrendatario: ${contract[0].contractId}`,
                   `Identificación: ${contract[0].contractId}`,
                  `RUT:` ]).style('title').end
  }
  
  generatePdf(contract: any) {
    const pdf = new PdfMakeWrapper();
    this.setHeader(pdf, contract);
    pdf.header('Aliados Inmobiliarios sa');
    pdf.rawContent([
      new Columns([
        {
          width: '100%',
          text: `Indicaciones de Contrato No: ${contract[0].id }`
        }
      ]).columnGap(10).bold().alignment('center').end,
      new Columns([
        {
          width: '40%',
          text: `Arrendatario: ${contract[0].id }`
        },
        {
          width: '30%',
          text: `Arrendatario: ${contract[0].contractId }`
        },
        {
          width: '30%',
          text: `Arrendatario: ${contract[0].contractId }`
        },
      ]).columnGap(10).bold().end,
        new Table([
          [ 'column 1', 'column 2'],
          ['',''],
          [ 'column 1', 'column 2'],
          ['',''],
          [ 'column 1', 'column 2'],
          ['',''],
          [ 'column 1', 'column 2']
        ]).widths([ '*', 80 ]).end,
        new Columns([ `Arrendatario: ${contract[0].CheckListContract[0].arrendatario }`,
                     `Identificación: ${contract[0].CheckListContract[0].PersonId }`,
                     `RUT:` ]).end
    ]);
    let arrendatarioLength = contract[0].CheckListContract.length;
    for (let arrendatario = 0; arrendatario <= arrendatarioLength; arrendatario++) {
      const element = arrendatarioLength[arrendatario];
      console.log(element);      
    }
    pdf.create().open();
    }

}
