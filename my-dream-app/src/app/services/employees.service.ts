import {Http} from "@angular/http"
import {Injectable} from "@angular/core"
import { Employee } from "../models/Employee";
import { map } from "rxjs/operators";
@Injectable()
export class EmployeesService{
    constructor(private http:Http){}
    url="https://prueba-e79c6.firebaseio.com/data.json"
    employees=[{
        name:'jhon',
        id:this.generateId(),
        charge:'Engineer'
    },{
        name:'alverto',
        id:this.generateId(),
        charge:'Engineer'
    }


]

private generateId(){
    return Math.round(Math.random()*10000);
}
storeEmployees(){
    this.http.put(this.url,this.employees).subscribe(
        (response)=> console.log(response),
        (error)=> console.log(error)
    );
}
getEmployees(){
   return this.http.get(this.url).pipe(map(
        (response:Response)=>{
            return response.json;

        }
    )
    );

}
}


