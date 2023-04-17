import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Takeo';
  fontColor = 'blue';
  canClick = false;
  message = 'Mensagem no butão';
  semSublinhado = 'none';
  buttonLabel: string = 'CARRINHO';
  buttonSecond: string = 'ADICIONAR';

  sayMessage() {
    alert(this.message);
  }
}
