import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleado } from '../../services/service.empleado';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUser!: ElementRef;
  @ViewChild('cajapass') cajaPass!: ElementRef;
  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleado,
  ){}

  async loginEmpleado(): Promise<void> {
    let user = this.cajaUser.nativeElement.value;
    let pass = this.cajaPass.nativeElement.value;
    let login = new Login(user, pass);
    let respuesta = await this._service.loginEmpleado(login);
    this.mensaje = "Has iniciado sesión correctamente.";
    sessionStorage.setItem('token', respuesta.response);
    this._cdr.detectChanges();
  }
}
