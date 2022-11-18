import { Component, OnInit } from '@angular/core';
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
  examesTemp: Exame[];

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idStr = this.activatedRoute.snapshot.paramMap.get('grupo');
    const id = parseInt(idStr, 10);
    this.exames = this.data.getExamesByGrupoId(id);
    console.warn(this.exames);
  }

  search(query: string) {
    if (!!query && query.length > 3) {

    } else {
      return;
    }
  }

}
