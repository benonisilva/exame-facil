import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Exame } from '../services/model/exame.model';
import { Procedimento } from '../services/model/procedimento.model';

@Component({
  selector: 'app-detalhe-exame',
  templateUrl: './detalhe-exame.page.html',
  styleUrls: ['./detalhe-exame.page.scss'],
})
export class DetalheExamePage implements OnInit {

  exame: Exame;
  exameName: string;
  procedimentos: Procedimento[];

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const grupoStr = this.activatedRoute.snapshot.paramMap.get('grupo');
    const userIdStr = this.activatedRoute.snapshot.paramMap.get('id_user');
    const indexStr = this.activatedRoute.snapshot.paramMap.get('index');
    
    const grupoId = parseInt(grupoStr, 10);
    const userId = parseInt(userIdStr, 10);
    const index = parseInt(indexStr, 10)
    this.exame = this.data.getExameById(grupoId, index);
    this.exameName = this.exame.nome;
    this.procedimentos = this.exame.procedimentos.filter(p=> p.grupos.some(p=> p === userId));
    console.warn(this.procedimentos);
  }

}
