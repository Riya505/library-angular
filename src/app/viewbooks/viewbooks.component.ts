import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewBooks().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
  }

  deleteBook=(id:any)=>{
    let data={"id":id
  }
    this.myapi.deleteBook(data).subscribe(
      (respo)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
  }

  viewData:any=[]

  ngOnInit(): void {
  }

}
