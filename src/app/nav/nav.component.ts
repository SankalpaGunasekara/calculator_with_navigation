import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  @Input() title:string = ''
  pageTitle:any = ''
  ngOnInit(): void {

    this.pageTitle = "Home"
      
  }

  // navClick(event:Event, pageName: string){

  //   event.preventDefault()
  //   this.pageTitle = decodeURIComponent(pageName)
  // }

}
