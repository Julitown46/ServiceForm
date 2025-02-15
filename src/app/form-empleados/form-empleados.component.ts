import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { Empleado } from '../model/Persona';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-empleados',
  imports: [ReactiveFormsModule],
  templateUrl: './form-empleados.component.html',
  styleUrl: './form-empleados.component.css'
})
export class FormEmpleadosComponent {
  empleados: Empleado[] = [];
  form: FormGroup;

  constructor(private empleadosService: EmpleadosService, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      departamento: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.empleadosService.getEmpleados().subscribe(empleados => this.empleados = empleados);
  }

  submit() {
    if (this.form.valid) {

      const nuevoEmpleado: Empleado = {
        id: this.empleados.length + 1,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        email: this.form.value.email,
        departamento: this.form.value.departamento
      };

      this.empleadosService.addEmpleado(nuevoEmpleado).subscribe(() => {
        this.empleados.push(nuevoEmpleado);
        this.form.reset();
      });
    }
  }

}
