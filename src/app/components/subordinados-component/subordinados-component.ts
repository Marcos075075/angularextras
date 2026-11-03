import { ChangeDetectorRef, Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/service.empleado';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent {
   public empleados!: Array<Empleado>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleado,
  ){}

  async ngOnInit(): Promise<void> {
    this.empleados = await this._service.getSubordinadosAsync();
    this._cdr.detectChanges();
  }
}
