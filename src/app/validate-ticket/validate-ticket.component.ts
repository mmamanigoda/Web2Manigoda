import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

import { Karta } from '../models/karta';

@Component({
  selector: 'app-validate-ticket',
  templateUrl: './validate-ticket.component.html',
  styleUrls: ['./validate-ticket.component.css']
})
export class ValidateTicketComponent implements OnInit {

  tickets:Array<Karta> = [];
  now:Date;
  purchase:Date;
  result:string;

  constructor(private serverService: ServerService, private router: Router) { }

  ngOnInit() {
    this.callGetAllTickets();
  }

  callGetAllTickets(){
    this.serverService.getAllTickets()
    .subscribe(
      data => {
        this.tickets = data;
          
      },
      error => {
        console.log(error);
      }
    )
  }

  validateTicket(ticket){

    this.serverService.updateTicket(ticket.Id,ticket).subscribe(
      data =>{
        this.result = data;
      },error => {
        console.log(error);
      });
  }
}

