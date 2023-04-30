import { Component } from '@angular/core';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.css']
})

export class TableMainComponent {
  content = [
    {name: 'Goa memories', date: Date.now(), access: "Only you"},
    {name: 'Income tax filing (AY 2021)', date: Date.now(), access: "Only you"},
    {name: '21 Savage Drake-Middle of the ocean.xlsx', date: Date.now(), access: "Only you"},
    {name: 'Kid Cudi-Soundtrack to my life.xlsx', date: Date.now(), access: "Only you"},
    {name: 'Audio recording #4151.xlsx', date: Date.now(), access: "Only you"},
    {name: 'Invoice for web design.xlsx', date: Date.now(), access: "Only you"},
    {name: 'How to win friends and influence people.xlsx', date: Date.now(), access: "Only you"},
    {name: 'HOW to conduct user research.xlsx', date: Date.now(), access: "Only you"},
    {name: 'state of UX Industry Report 2022.lsx', date: Date.now(), access: "Only you"},
  ]
}
