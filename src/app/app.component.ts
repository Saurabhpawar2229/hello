import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <label>Marvellous Infosystem</label>
  <input type="text">
</div>
`,
  styles: [`input[type="text"]{
    color: blue;

}
`]
})
export class AppComponent {
  title = 'app';
}
