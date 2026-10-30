import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FicherosService } from '../../services/services.ficheros';
import { Fichero } from '../../models/fichero';

@Component({
  selector: 'app-subir-fiicheros-component',
  standalone: false,
  styleUrl: './subir-fiicheros-component.css',
  templateUrl: './subir-fiicheros-component.html',
})
export class SubirFiicherosComponent {
  @ViewChild('cajaimg') cajaimg!: ElementRef;

  constructor(
    private _ficherosService: FicherosService,
    private _cdr: ChangeDetectorRef
  ) {}

  async subirImagen(): Promise<void> {
    const img = this.cajaimg.nativeElement.files;
    const file = img[0];

    try {
      let base64 = await this.convertirABase64(file);
      let base64limpio = base64.split(',')[1];
      let fichero = new Fichero(file.name, base64limpio);
      await this._ficherosService.subirFichero(fichero);
      console.log("Fichero subido");
      this._cdr.detectChanges();      
    } catch (error) {
      console.log("Error subiendo el fichero", error);
    }
  }
  async convertirABase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
}
