import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imageCover: string = ""
  contentDate: string = "22 de Fevereiro de 2024"
  contentTitle: string = "Minha Notícia"
  contentDescription: string = "Olá Mundo"
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = fakeData.filter(article => article.id === id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.imageCover = result.image
      this.contentDate = result.date      
  }
}
