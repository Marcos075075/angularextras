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
  public urlFile!: string;
  public mensaje!: string;
  @ViewChild('cajaimg') cajaimg!: ElementRef;

  constructor(
    private _ficherosService: FicherosService,
    private _cdr: ChangeDetectorRef,
  ) {}

  uploadFile(): void {
    let file = this.cajaimg.nativeElement.files[0];
    //En el value viene la ruta: C:\fakepath\imagen.jpg
    console.log('Ruta del fichero: ' + this.cajaimg.nativeElement.value);
    let miPath = this.cajaimg.nativeElement.value.split('\\');
    let fileName = miPath[2];
    let reader = new FileReader();

    reader.onloadend = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      let base64: string;
      base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      let fichero = new Fichero(fileName, base64);
      this._ficherosService.postFile(fichero).subscribe((response) => {
        console.log(response);
        this.urlFile = response.urlFile;
        this._cdr.detectChanges();
      })
    };
    reader.readAsArrayBuffer(file);
  }

  // async subirImagen(): Promise<void> {
  //   const img = this.cajaimg.nativeElement.files;
  //   const file = img[0];

  //   try {
  //     let base64 = await this.convertirABase64(file);
  //     let base64limpio = base64.split(',')[1];
  //     let fichero = new Fichero(file.name, base64limpio);
  //     await this._ficherosService.subirFichero(fichero);
  //     console.log('Fichero subido');
  //     this._cdr.detectChanges();
  //   } catch (error) {
  //     console.log('Error subiendo el fichero', error);
  //   }
  // }

  // async convertirABase64(file: File): Promise<string> {
  //   return new Promise<string>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // }
}
