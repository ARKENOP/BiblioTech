import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';
import {HighlightDirective} from '../../directives/highlight.directive';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormatPipe} from '../../pipes/format.pipe';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HighlightDirective, TruncatePipe, FormatPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  data: any[] = [];
  searchTerm: string = '';

  constructor(
    private bookService: BookService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des livres:', err);
      }
    });
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe({
      next: (updatedBook: Book) => {
        // TODO 14: Affiche une alerte qui indique que le favori a été modifié
        this.snackBar.open('Le favori a été modifié avec succès', 'Fermer', {
          duration: 3000,
        });
      },
      error: (err: any) => {
        // TODO 14: Affiche une alerte qui indique que la modification du favori a échoué
        this.snackBar.open('Erreur lors de la modification du favori', 'Fermer', {
          duration: 3000,
        });
        console.error('Erreur lors de la modification du favori:', err);
      }
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        // TODO 14: Affiche une alerte qui indique que le livre a été supprimé
        this.snackBar.open('Le livre a été supprimé avec succès', 'Fermer', {
          duration: 3000,
        });
        this.loadBooks();
        console.log('Livre supprimé:', id);
      },
      error: (err: any) => {
        // TODO 14: Affiche une alerte qui indique que la suppression du livre a échoué
        this.snackBar.open('Erreur lors de la suppression du livre', 'Fermer', {
          duration: 3000,
        });
        console.error('Erreur lors de la suppression du livre:', err);
      }
    });
  }

  goToBookDetails(id: string): void {
    this.router.navigate(['/books', id]);
  }
}
