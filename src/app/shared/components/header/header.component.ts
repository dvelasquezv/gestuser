import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  var1 = 'a';
  var2 = 'b';
  constructor() {
    this.checkValues();
  }

  /*test -> validando eslint eqeqeq*/
  checkValues(): void {
    //if (this.var1 == this.var2) {
    console.log('prueba de lintstaged');
    console.log('prueba de lintstaged222');
    if (this.var1 === this.var2) {
      console.log('son iguales');
    } else {
      console.log('no son iguales');
    }
  }
}
