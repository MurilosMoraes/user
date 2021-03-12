import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  start = true;
  stop = false;
  infos = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  changeStart() {
    this.start = false;
    this.stop = true;
    this.infos = false;
  }
  changeStop() {
    this.start = false;
    this.stop = false;
    this.infos = true;
  }


}
