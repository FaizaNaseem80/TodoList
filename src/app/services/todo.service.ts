import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;
  private storageReady = false;

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    this.storageReady = true;
    const savedTodos = await this.storage.get('todos');
    if (savedTodos) {
      this.todos = savedTodos;
      this.idCounter = this.todos.length ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
    }
  }

  private async save() {
    if (!this.storageReady) return;
    await this.storage.set('todos', this.todos);
  }

  async getTodos(): Promise<Todo[]> {
    return [...this.todos];
  }

  async addTodo(title: string, priority: 'High' | 'Medium' | 'Low'): Promise<void> {
    this.todos.push({ id: this.idCounter++, title, completed: false, priority });
    await this.save();
  }

  async toggleTodo(id: number): Promise<void> {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    await this.save();
  }

  async deleteTodo(id: number): Promise<void> {
    this.todos = this.todos.filter(t => t.id !== id);
    await this.save();
  }

  async clearCompleted(): Promise<void> {
    this.todos = this.todos.filter(t => !t.completed);
    await this.save();
  }
}
