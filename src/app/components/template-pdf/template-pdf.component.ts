import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-template-pdf',
  templateUrl: './template-pdf.component.html',
  styleUrls: ['./template-pdf.component.css']
})
export class TemplatePdfComponent implements OnInit {

  constructor(private pdfService: PdfService) { }

  ngOnInit(): void {
  }

}
