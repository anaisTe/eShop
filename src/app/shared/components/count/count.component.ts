import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent implements OnInit {

  countNum: number = 1;

  quitarItem() {
    console.log('quitar');

    this.countNum = this.countNum - 1
    
  }

  addItem() {
    console.log('addCount');
    this.countNum = this.countNum + 1
  }

  ngOnInit(): void {
    
  }
}
