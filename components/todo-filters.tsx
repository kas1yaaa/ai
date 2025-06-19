"use client"

import { Button } from "@/components/ui/button"
import type { TodoFilter } from "../types/todo"

interface TodoFiltersProps {
  currentFilter: TodoFilter
  onFilterChange: (filter: TodoFilter) => void
  stats: {
    total: number
    active: number
    completed: number
  }
  onClearCompleted: () => void
}

export function TodoFilters({ currentFilter, onFilterChange, stats, onClearCompleted }: TodoFiltersProps) {
  const filters: { key: TodoFilter; label: string }[] = [
    { key: "all", label: "Всі" },
    { key: "active", label: "Активні" },
    { key: "completed", label: "Виконані" },
  ]

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-2">
        {filters.map(({ key, label }) => (
          <Button
            key={key}
            variant={currentFilter === key ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(key)}
          >
            {label}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>Активних: {stats.active}</span>
        {stats.completed > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearCompleted} className="text-red-500 hover:text-red-700">
            Очистити виконані
          </Button>
        )}
      </div>
    </div>
  )
}
