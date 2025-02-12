import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../service/eventos.service';
import { Evento } from '../../model/Event';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) {}

  ngOnInit() {
    this.eventosService.getEventos().subscribe((eventos) => {
      this.eventos = eventos;
    });
    console.log(this.eventos);
  }

  addEvento(evento: Evento) {
    this.eventosService.addEvento(evento).subscribe(() => {
      console.log('Evento añadido');
      console.log(evento);
      this.eventos.push(evento);
    });
  }

  deleteEvento(id: number) {
    this.eventosService.deleteEvento(id).subscribe(() => {
      this.eventos = this.eventos.filter((evento) => evento.idEvento !== id);
    });
  }

  updateEvento(evento: Evento) {
    this.eventosService.updateEvento(evento).subscribe(() => {
      this.eventos = this.eventos.map((e) => {
        if (e.idEvento === evento.idEvento) {
          return evento;
        }
        return e;
      });
    });
  }

  getEvento(id: number) {
    this.eventosService.getEvento(id).subscribe((evento) => {
      console.log(evento);
    });
  }
}
