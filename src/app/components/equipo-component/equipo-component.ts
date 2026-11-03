import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEquipos } from '../../services/service.equipos';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit{
  public equipos!: Equipo[];
  
  constructor(
    private _serviceEquipos: ServiceEquipos,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
      this.equipos = await this._serviceEquipos.getEquiposAsync();
      this._cdr.detectChanges();
  }
}
