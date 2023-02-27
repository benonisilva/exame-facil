import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { DataService } from '../services/data.service';
import { Grupo } from '../services/model/grupo.model';

@Component({
  selector: 'app-grupos-exame',
  templateUrl: './grupos-exame.page.html',
  styleUrls: ['./grupos-exame.page.scss'],
})
export class GruposExamePage implements OnInit {

  public grupos: Grupo[]; 
  public tipo: string;
  public idGrupoUsuario: number;

  public name: string;
  
  @ViewChild(IonModal) modal: IonModal;

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idStr = this.activatedRoute.snapshot.paramMap.get('id_user');
    const id = parseInt(idStr, 10);
    this.idGrupoUsuario = id;
    if (id === 1) {
      this.tipo = "ENFERMEIRO"
    } else if(id === 2) {
      this.tipo = "PACIENTE"
    }
    this.grupos = this.data.getGruposByGrupoId(this.idGrupoUsuario);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Voltar' : '';
  }

  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      const message = `${ev.detail.data}`;
      const novoGrupo: Grupo = {
        exames: [],
        id: new Date().getTime(),
        nome: message.toUpperCase(),
        grupos: [1,2],
        isNew: true
      }; 
      console.log(novoGrupo);
      this.grupos.push(novoGrupo);
    }
  }

}
