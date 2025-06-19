"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TodoInput } from "../components/todo-input"
import { TodoItem } from "../components/todo-item"
import { TodoFilters } from "../components/todo-filters"
import { useTodos } from "../hooks/use-todos"
import { CheckSquare } from "lucide-react"

export default function TodoApp() {
  const { todos, filter, stats, addTodo, toggleTodo, deleteTodo, clearCompleted, setFilter } = useTodos()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckSquare className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-3xl font-bold text-gray-800">ToDo List</CardTitle>
            </div>
            <p className="text-gray-600">Організуйте свої завдання ефективно</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <TodoInput onAddTodo={addTodo} />

            {todos.length === 0 ? (
              <div className="text-center py-12">
                <CheckSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  {filter === "active" && stats.active === 0
                    ? "Всі завдання виконані! 🎉"
                    : filter === "completed" && stats.completed === 0
                      ? "Немає виконаних завдань"
                      : "Немає завдань. Додайте перше завдання!"}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
                ))}
              </div>
            )}

            {stats.total > 0 && (
              <TodoFilters
                currentFilter={filter}
                onFilterChange={setFilter}
                stats={stats}
                onClearCompleted={clearCompleted}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
