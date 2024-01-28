import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { ContentCardComponent } from './content-card/content-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'G_Kaur_FavouritePhone';
}
