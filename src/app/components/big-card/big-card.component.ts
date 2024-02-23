import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  backgroundColor: string = "";

  @Input()
  imageWidth: string = "100%"

  @Input()
  imageMinWidth: string = "394px";

  @Input()
  imageHeight: string = "300px"

  @Input()
  width: string = "400px";

  @Input()
  height: string = "450px";

  @Input()
  imageCoverUrl: string = ""

  @Input()
  cardDate: string = ""

  @Input()
  dateFontColor: string = "grey"

  @Input()
  cardTitle: string = ""

  @Input()
  titleFontColor: string = "white"

  @Input()
  cardDescription: string = ""

  @Input()
  descriptionFontColor = "grey"

  constructor() { }

  ngOnInit(): void {
  }

}
