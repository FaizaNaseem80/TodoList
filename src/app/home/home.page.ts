import { Component } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],standalone: false 
})
export class HomePage {
  newTodo = '';
  selectedPriority: 'High' | 'Medium' | 'Low' = 'Medium';
  todos: Todo[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';
  loading = true;

  constructor(private todoService: TodoService) {}

  ionViewWillEnter() {
    this.loadTodos();
  }

  async loadTodos() {
    this.loading = true;
    this.todos = await this.todoService.getTodos();
    this.loading = false;
  }

  async addTodo() {
    const title = this.newTodo.trim();
    if (!title) return;

    await this.todoService.addTodo(title, this.selectedPriority);
    this.newTodo = '';
    this.selectedPriority = 'Medium';
    await this.loadTodos();
  }

  async toggleTodo(todo: Todo) {
    await this.todoService.toggleTodo(todo.id);
    await this.loadTodos();
  }

  async deleteTodo(todo: Todo) {
    await this.todoService.deleteTodo(todo.id);
    await this.loadTodos();
  }

  async clearCompletedTodos() {
    await this.todoService.clearCompleted();
    await this.loadTodos();
  }

  get filteredTodos() {
    if (this.filter === 'active') return this.todos.filter(t => !t.completed);
    if (this.filter === 'completed') return this.todos.filter(t => t.completed);
    return this.todos;
  }

  getPriorityColor(priority: string) {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'primary';
    }
  }
}
