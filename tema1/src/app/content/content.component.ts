import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  cards1 = [
    {
      name: 'Desert',
      description:
        "Deserturile sunt facute de cei mai iscusiti bombonieri, abia asteapta sa le gusti!",
    },
    {
      name: 'Starter',
      description: "Pentru ca mereu alegem sa incepem cu ceva usor insa foarte interesant.",
    },
    {
      name: 'Stakes',
      description:
        "Carnea gatita la noi este numai buna alaturi de un vin rosu din crama proprie!",
    },
    {
      name: 'Peste',
      description:
        'Peste mereu proaspat, gatit cu retete invatate de la pescarii din Delta.',
    },
    {
      name: 'Supe',
      description:
        'Supe gatite exact ca la mama acasa, cu multa dragoste.',
    },
    {
      name: 'Veggies',
      description:
        "Pentru zilele in care simti ca esti prea plin si vrei ceva usor.",
    },
  ];
}
