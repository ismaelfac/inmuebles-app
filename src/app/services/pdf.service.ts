import { EventEmitter, Injectable, Output } from '@angular/core';
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper, Img, Toc, TocItem, Txt, Stack, Table, Cell, Columns, Ul } from 'pdfmake-wrapper';
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
  async getTemplatePdf() {

  } 
  
  generatePdf(contract: any) {
    const pdf = new PdfMakeWrapper();

    pdf.info({
        title: `Indicaciones de Contrato No ${contract.contractId}`,
        author: 'AliadosInmobiliarios - división juridica',
        subject: 'Indicaciones de Contrato',
    });
    

    pdf.add(
        new Toc(
          new Columns([ `Asegurable: ${contract.contractId}`, `Cod Domus No: 238090` ]).columnGap(10).end // { columns: [ 'Hello', 'world' ], columnGap: 10 }
        ).textStyle({ italics: true }).end
    );
    pdf.add(
      new Stack([ `Asegurable: ${contract.contractId}`, `Cod Domus No: 238090` ]).alignment('justify').end // { stack: [ 'Hello', 'world' ], alignment: 10 }
      
    );
    pdf.add(
      new Columns([ `Asegurable: ${contract.contractId}`, `Cod Domus No: 238090` ]).columnGap(10).end // { columns: [ 'Hello', 'world' ], columnGap: 10 }
    );
    pdf.add(
      new Columns([ `Arrendatario: ${contract.contractId}`, `Cedula: ${contract.CheckListContract[0].PersonId}` ]).columnGap(10).end // { columns: [ 'Hello', 'world' ], columnGap: 10 }
    );

    pdf.add(
      new Table([
        [ 'column 1', 'column 2'],
        [ 'column 1', 'column 2']
      ]).widths([ '*', 100 ]).end
    );

    pdf.add(
      new Table([
        [ 'column 1', 'column 2'],
        [ 'column 1', 'column 2']
      ]).layout('noBorders').end
    );

  
    pdf.add(
        new TocItem(
            new Txt('Pagina2').pageBreak('before').end
        ).tocStyle({ color: 'red' }).end
    );
  
    pdf.create().open();
  }

}
