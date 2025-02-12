import { Component } from '@angular/core';
import { EmpleadosService } from '../../service/empleados.service';
import { Empleado } from '../../model/Persona';
import { EventosService } from '../../service/eventos.service';
import { Evento } from '../../model/Event';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  empleados: Empleado[] = [];
  eventos: Evento[] = [];

  constructor(private empleadosService: EmpleadosService, private eventosService: EventosService) {}

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe((empleados) => {
      this.empleados = empleados;
    });
    console.log(this.empleados);
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  addEvento(form: FormGroup) {
    if(form.valid){
      this.eventosService.addEvento(form.value).subscribe(() => {
        this.eventos.push(form.value);
      });
    }
  }

  deleteEvento(id: number) {
    this.eventosService.deleteEvento(id).subscribe(() => {
      this.eventos = this.eventos.filter((evento) => evento.id !== id);
    });
  }
}
