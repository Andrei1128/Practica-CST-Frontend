import { Component, OnInit } from '@angular/core';

interface joc {
  key: number;
  name: string;
  release: number;
  developer: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  listaJocuri: joc[] = [];
  nameSearched: any;
  constructor() {}
  ngOnInit(): void {
    this.listaJocuri = [
      {
        key: 1,
        name: 'GTA V',
        release: 2013,
        developer: 'Rockstar Games',
      },
      {
        key: 2,
        name: 'Counter-String: Global Offensive',
        release: 2011,
        developer: 'Valve',
      },
      {
        key: 3,
        name: 'Dota2',
        release: 2008,
        developer: 'Valve',
      },
      {
        key: 4,
        name: 'Red Dead Redemption 2',
        release: 2019,
        developer: 'Rockstar Games',
      },
      {
        key: 5,
        name: 'Minecraft',
        release: 2010,
        developer: 'Microsoft',
      },
    ];
  }
  Search() {
    this.listaJocuri = this.listaJocuri.filter((res) => {
      return res.name
        .toLocaleLowerCase()
        .match(this.nameSearched.toLocaleLowerCase());
    });
  }
  Erase() {
    if (this.nameSearched == '') {
      this.ngOnInit();
    }
  }
  SendToSort() {
    this.listaJocuri = this.listaJocuri.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
  CancelSort() {
    this.listaJocuri = this.listaJocuri.sort((a, b) => a['key'] - b['key']);
  }
}
