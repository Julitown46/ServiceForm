import { Component } from '@angular/core';
import { EventosService } from '../../service/eventos.service';
import { Evento } from '../../model/Event';
import { EmpleadosService } from '../../service/empleados.service';
import { ObservablesService } from '../../service/observables.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent{
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService, private empleadoService: EmpleadosService, private observableService: ObservablesService) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  getEvento(id: number) {
    this.eventosService.getEvento(id).subscribe((evento) => {
      console.log(evento);
    });
  }

  eliminarDato(id: number) {
    console.log(id);
    this.eventosService.deleteEvento(id).subscribe(() => {
    });
  }

  cargarTodos() {
        this.eventosService.getEventos().subscribe((todoEventos) => {
          this.eventos = todoEventos;
        });
  }

  cargarLogs() {
    this.eventosService.getLogs().subscribe((logs) => {
      this.eventos = logs;
    });
  }

  cargarWarns() {
    this.eventosService.getWarns().subscribe((warns) => {
      this.eventos = warns;
    });
  }

  cargarErrors() {
      this.eventosService.getErrors().subscribe((errors) => {
        this.eventos = errors;
      });
  }

}
