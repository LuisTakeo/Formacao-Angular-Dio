import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private parametizador: ActivatedRoute,
    private navegador: Router
    ){

    //http://localhost:4200/portifolio/{1}
    this.parametizador.params.subscribe(
      res => console.log(res)
    )

    this.parametizador.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portifolio/1?{name=takeo&token=123}
    this.parametizador.queryParams.subscribe(
      res => console.log(res)
    )


  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // },5000)
  }
}
