export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  status: 'todo' | 'in_progress' | 'done';
  createdAt: Date;
}