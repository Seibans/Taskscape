import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// TODO: La funcion cn nos permite de forma segura y adecuada combinar clases de tailwind especificamente clases dynamicas por ejemplo clase de error clase de success  