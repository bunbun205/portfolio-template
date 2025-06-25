// src/interfaces.ts

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

export interface BlogPost {
  id: string;
  title: string;
  description?: string;
  content: string;
  likes: number;
  created_at: string;
}

export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  content: string;
  parent_id?: string;
  likes: number;
  flags: number;
  created_at: string;
}
