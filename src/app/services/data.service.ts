import { Injectable } from '@angular/core';
import { FireBaseService } from './firebase/service';
import { Exame } from './model/exame.model';
import { Grupo } from './model/grupo.model';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public exames: Exame[] = [
    {
      id: 1,
      nome: "Radiografia de Esôfago",
      grupo: 1,
      procedimentos: [
        "Na véspera do exame:",
        `- Tomar 40 gotas de luftal de 4/4horas com
        pouca água, a partir das 08:00 até as 20:00h.`
      ]
    }
  ];

  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  public grupos: Grupo[] = [];
  public gruposInit: Grupo[] = [
    {
      id: 1,
      nome: "RADIOGRAFIA SIMPLES (RAIO-X)",
      grupo: 1,
      exames: this.exames
    },
    {
      id: 2,
      nome: "NEURORRADIOLOGIA INTERVENCIONISTA",
      grupo: 1,
      exames: this.exames
    },
    {
      id: 3,
      nome: "ULTRASSOM SIMPLES E DOPPLER",
      grupo: 1,
      exames: this.exames
    },
    {
      id: 4,
      nome: "TOMOGRAFIAS COMPUTADORIZADAS",
      grupo: 1,
      exames: this.exames
    },
    {
      id: 5,
      nome: "RESSONÂNCIA MAGNÉTICA",
      grupo: 1,
      exames: this.exames
    }
  ];


  constructor(private fireBaseService: FireBaseService) { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public initBase() {
    this.fireBaseService.initGrupos(this.grupos).then(()=>{
      console.log("BASE inicializada");
    });
  }

  public async loadGrupos() {
    this.grupos = await this.fireBaseService.getGrupos() as Grupo[];
  }

  public  getGruposByGrupoId(grupo: number): Grupo[] {
    return  this.grupos.filter(g=> g.id = grupo);
  }

  public getExamesByGrupoId(grupo: number): Exame[] {
    return this.exames.filter(g => g.grupo === grupo);
  }

  public getExameById(id: number): Exame {
    console.warn(this.exames);
    console.warn(id);
    return this.exames.filter(e => e.id === id)[0];
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
