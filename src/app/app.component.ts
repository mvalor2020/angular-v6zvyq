import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = '🤪 Emoji 🤪';
  happy= false;
  sad= false;
  crazy= false;
}
