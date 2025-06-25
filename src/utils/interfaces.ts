// src/interfaces.ts

// Blog post format expected by the frontend
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  thumbnail_url: string;
  created_at: string;
  tags?: string[];
}

// Project format expected by the frontend
export interface Project {
  id: string;
  title: string;
  thumbnail_url: string;
  category: string;
  description: string;
  created_at: string;
  assets?: string[]; // optional array of asset URLs
}
