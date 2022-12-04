import { Injectable } from '@angular/core';
import { FireBaseService } from './firebase/service';
import { Exame } from './model/exame.model';
import { Grupo } from './model/grupo.model';

import * as gruposInicio from '../../assets/grupos.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  public grupos: Grupo[] = [];
  public gruposInit: Grupo[];


  constructor(private fireBaseService: FireBaseService) { 
    //this.grupos = gruposInicio;
    //this.initBase();
  }


  public initBase() {
    this.fireBaseService.initGrupos(this.grupos).then(()=>{
      console.log("BASE inicializada");
    });
  }

  public async loadGrupos() {
    this.grupos = await this.fireBaseService.getGrupos() as Grupo[];
    console.warn(this.grupos);
  }

  public  getGruposByGrupoId(grupo: number): Grupo[] {
    return  this.grupos.filter(g=> g.grupos.some(val => val === grupo));
  }

  public getExamesByGrupoId(grupo: number): Exame[] {
    return this.grupos.filter(g => g.id === grupo )[0].exames;
  }

  public getExameById(groupId: number, index: number): Exame {
    return this.grupos.filter(g => g.id === groupId )[0].exames[index];
  }
}
