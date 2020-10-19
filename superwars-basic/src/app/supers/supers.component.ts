import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrls: ['./supers.component.css'],
})
export class SupersComponent implements OnInit {
  constructor() {}
  players = [];
  player: string[] = [
    'Spiderman',
    'Captain Ameriaca',
    'WonderWoman',
    'Genwoman',
    'Antwoman',
    'Tiger',
    'Catwoman',
    'Hulk',
    'Black Cat',
    'Thor',
    'Popcorn',
    'Bolt',
    'Mask',
    'Captain',
    'Fish',
    'Ninja',
    'Wolverine',
    'Slayer',
  ];
  ngOnInit(): void {
    this.getPlayers(this.player);
    this.getRandomStrength();
  }
  getRandomStrength(): number {
    return Math.ceil(Math.random() * 100);
  }
  getPlayers(player: string[]): any[] {
    const players = [];
    for (var i = 0; i < player.length; i++) {
      players[i] = [
        {
          name: player[i],
          image: '../../ assets / super- ' + (i + 1) + '.png',
          strength: this.getRandomStrength(),
          type: Math.floor(Math.random() * 99) % 2 === 0 ? 'hero' : 'villain',
        },
      ];
    }
    return players;
  }
  console.log(players);
}
