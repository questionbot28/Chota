import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the base path from the dataset we set in main.tsx
export function getBasePath(): string {
  return document.documentElement.dataset.basePath || '/'
}

// Create URL with proper base path for static assets
export function createAssetPath(path: string): string {
  const basePath = getBasePath()
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${basePath}${cleanPath}`
}