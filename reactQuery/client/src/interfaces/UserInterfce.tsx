export interface UserInterface {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  nickname: string;
  profile_image: string | null;
}

export interface CreateTodoProps {
  content: string;
  due_date: string | null;
  priority: number;
  is_repeated: boolean;
}

export interface GetTodoProps {
  id: number;
  user: string;
  content: string;
  created_at: string;
  priority: number;
  due_date: string | null;
  completed_at: string | null;
  is_repeated: boolean;
}
