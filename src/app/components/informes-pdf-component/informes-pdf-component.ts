import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  generarDocumento(): void {
    let document: jsPDF = new jsPDF();
    document.setFontSize(20);
    document.text("Mi documento de martes", 10, 10);
    document.setFontSize(12);
    const headers = [["Nombre", "Email", "Edad"]];
    const data = [["Pepe", "pepe@gmai.com", 58],
                  ["Juan", "juan@gmail.com", 25],
                  ["Maria", "maria@gmail.com", 98],
                  ["Lorenzo", "lorenzo@gmail.com", 12]];
    autoTable(document, {
      head: headers,
      body: data,
      startY: 20,
    })
    document.save("personas.pdf");
  }
}
