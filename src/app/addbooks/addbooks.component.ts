import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor() { }

  bookTitle=""
  description=""
  author=""
  editionNumber=""


  readValue=()=>{
    let data={
      "bookTitle":this.bookTitle,
      "description":this.description,
      "author":this.author,
      "editionNumber":this.editionNumber
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
