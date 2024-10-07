import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  onClickValue(val: string, type: any) {
    console.log(val, type);
  }
}

// https://www.youtube.com/watch?v=EuJsvyFz2kA&t=33m31s
