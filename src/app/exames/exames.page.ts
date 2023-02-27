import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Exame } from '../services/model/exame.model';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.page.html',
  styleUrls: ['./exames.page.scss'],
})
export class ExamesPage implements OnInit {

  public exames: Exame[];
  public grupoId: number;
  public userId: number;
  
  examesTemp: Exame[];

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idStr = this.activatedRoute.snapshot.paramMap.get('grupo');
    const id = parseInt(idStr, 10);
    const userIdStr = this.activatedRoute.snapshot.paramMap.get('id_user');
    
    this.userId = parseInt(userIdStr, 10);
    this.grupoId = id;
    this.exames = this.data.getExamesByGrupoId(id).filter(exame => exame.grupos.some(g=> g === this.userId));
    
    console.warn(this.exames);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Voltar' : '';
  }

  getNextUrl(userId: number, grupoId: number, index: number): string {
    const retVal = `/detalhe-exame/${userId}/${grupoId}/${index}`;
    console.warn(retVal);
    return retVal;
  }

  search(query: string) {
    if (!!query && query.length > 3) {

    } else {
      return;
    }
  }

}
