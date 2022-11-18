import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Exame } from '../services/model/exame.model';

@Component({
  selector: 'app-detalhe-exame',
  templateUrl: './detalhe-exame.page.html',
  styleUrls: ['./detalhe-exame.page.scss'],
})
export class DetalheExamePage implements OnInit {

  exame: Exame;

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idStr = this.activatedRoute.snapshot.paramMap.get('id');
    const id = parseInt(idStr, 10);
    this.exame = this.data.getExameById(id);
    console.warn(this.exame);

  }

}
