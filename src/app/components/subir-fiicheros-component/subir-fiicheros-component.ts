import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FicherosService } from '../../services/services.ficheros';

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
    let img = this.cajaimg.nativeElement.files;

  }
}
