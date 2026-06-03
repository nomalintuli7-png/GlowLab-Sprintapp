import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
