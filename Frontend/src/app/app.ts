import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Topnav } from './topnav/topnav';
import { Footer } from './footer/footer';
import { CategoryService } from './services/category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, Footer, Topnav,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('Lebagolice');
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe({
      next: (data: any) => {
        this.categories = data;
        console.log('Fetched categories:', data);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }
}
