import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer-component/footer-component";
import { HomePage } from "./pages/home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotel-client');
}
