import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 lista = [
    {
      title: 'THE FJORDS OF NORWAY',
      image:
        'https://www.scandinaviastandard.com/wp-content/uploads/2019/07/Norway-Fjords-Hardangerfjord-Trolltunga-the-Best-Fjords-to-Visit-in-Norway-Scandinavia-Standard-1.jpg',
      description:
        'Southern Norway is laced with fjords, waterfalls, mountains and some of the most thrilling hiking trails in Europe. This is a beautiful place to visit and one of Europe’s best road trip destinations.',
      modal:'You can explore the fjord by boat, by train, by car, and on foot. And there are ways to combine all of these modes of transportation into one epic Norwegian holiday.'},
    {
      title: 'SANTORINI, GREECE',
      image:
        'https://cdn.internationalliving.com/wp-content/uploads/2021/10/An-Insiders-Guide-to-Santorini.jpg',
      description:
        'The island of Santorini is the remnants of an ancient volcano. What remains is the rim of the caldera and perched along this rim are some of the most photogenic towns in Europe.',
      modal:'Oia is one of the most beautiful towns in Santorini. The cascades of whitewashed buildings dotted with blue dome churches and windmills form a stunning backdrop for photographers. As the sun goes down, this place looks even more magical, as the buildings glow in pinks and oranges and yellows. It’s definitely a sight to see.'},
    {
      title: 'PARIS, FRANCE',
      image:
        'https://cdn.travelpulse.com/images/faa9edf4-a957-df11-b491-006073e71405/c0594e9a-dd27-41b9-b02b-0c0362deadce/600x400.jpg',
      description:
        'Paris is one of Europe’s loveliest cities. The grand boulevards, the architecture, the parks and gardens, the street cafes, and the monuments all come together to create one of the most beautiful cities in the world.',
      modal:'Take in the view from the Eiffel Tower and Arc de Triomphe. Visit the Louvre, Musée d’Orsay, and Notre Dame Cathedral. Stroll up the Champs-Élysées and along the Seine River. Visit Montmartre, have lunch at a street café, and dine on French cuisine.'},
    {
      title: 'ALGARVE, PORTUGAL',
      image:
        'https://cdn.internationalliving.com/wp-content/uploads/2018/05/algarve.jpg',
      description:
        'Algarve…this is the gorgeous coastline of southern Portugal. Not only can you relax on the beaches, but you can tour the towns that dot the coast, go hiking, play golf, and explore the limestone grottoes. ',
      modal:'Relax on the beach at Praia Sao Rafael, visit the towns of Faro, Lagos, and Tavira, hike the Seven Hanging Valleys coastal trail, and visit Benagil Cave. Plan on spending at least three days here, in order to have enough time to explore the small towns, visit the beaches, and explore Benagil Cave.'},
    {
      title: 'THE WILD ATLANTIC WAY, IRELAND',
      image:
        'https://images.ireland.com/thumbs/Images/wild-atlantic-way/bcc97f11b1564970b60ecb761fa3c28b/featurecarousel-desktop.jpg',
      description:
        'The Ring of Kerry, Dingle Peninsula, and Cliffs of Moher all are some of the sights on the Wild Atlantic Way. But there are also plenty of lesser known but just as dramatic viewpoints to visit. In fact, there are 157 Discovery Points to visit on the drive.',
      modal:'The Wild Atlantic Way is 1600 miles of road that snakes along the western coast of Ireland. Driving the Wild Atlantic Way is an ambitious road trip. If you stopped at each viewpoint and explored every nook and cranny of the Wild Atlantic Way, it would take over one month. With less time, you can focus on a small portion of the drive or just hit the main highlights.'
    },
    {
      title: 'PRAGUE, CZECH REPUBLIC',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/800px-Prague_%286365119737%29.jpg',
      description:
        'Stroll across Charles Bridge, visit the old town square, climb the towers, see the astronomical clock, visit Prague Castle, and visit the pubs and beer halls.',
      modal:'Prague is one of the most photogenic cities in Europe. This was the only large Eastern European city to survive WWII without being destroyed by bombs. With gothic towers, ancient cathedrals, and the largest castle in the world, Prague is one of the most beautiful places to visit in Europe.'
    },
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
