import { Component } from '@angular/core';
import {lorem} from 'faker';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText=lorem.sentence();
  typed='';
  success=false;
  letter='';
  onInput(event:Event) {
    const target=event.target as HTMLInputElement;
    console.log(target.value);
    this.typed=target.value;
  }

  compare(randomLetters:string, enteredLetters:string)
  {if (!enteredLetters)
    {return 'pending';}
    return randomLetters===enteredLetters? 'correct':'incorrect';
}
}