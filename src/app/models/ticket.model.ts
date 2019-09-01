export class Ticket{

    TicketType: string;
    DateOfPurchase : Date;
    User_Id:string;
    Valid:boolean;
    OrderID:string;
    PayerID:string;
    PaymentID:string;
    PaymentToken:string;

    constructor(){
        this.TicketType = "";
        this.Valid = false;
        this.User_Id = "";
       
    }
}