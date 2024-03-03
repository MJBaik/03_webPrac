import { CreateTodoProps, GetTodoProps } from "../interfaces/UserInterfce";
import { customAxios } from "../util/customAxios";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTodoProps) =>
      customAxios.post("/todos/todo/", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"] as InvalidateQueryFilters);
    },
    onError: (err) => console.error(err),
  });
};

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["getTodos"],
    queryFn: () => customAxios.get("/todos/todo/"),
    select: (res) => {
      if (res.status == 200) {
        return res.data as GetTodoProps[];
      } else if (res.status == 404) {
        return [] as GetTodoProps[];
      } else {
        for (const err of Object.keys(res.data)) {
          console.log(res.data[err][0]);
        }
        return;
      }
    },
    staleTime: 1000 * 30,
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: number) =>
      customAxios.delete("/todos/update_todo/", {
        params: { todo_id: payload },
      }),
    onSuccess: (res) => {
      if (res.status == 204) {
        queryClient.invalidateQueries(["getTodos"] as InvalidateQueryFilters);
      } else if (res.status == 400) {
        console.log(res);
      }
    },
    onError: (err) => console.error(err),
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { completedAt: string | null; todoId: number }) => {
      return customAxios.put(
        "todos/update_todo/",
        { completed_at: payload.completedAt },
        { params: { todo_id: payload.todoId } }
      );
    },
    onSuccess: (res) => {
      if (res.status == 201) {
        queryClient.invalidateQueries(["getTodos"] as InvalidateQueryFilters);
      } else if (res.status == 400) {
        console.log("오류ㅠㅠ");
      }
    },
    onError: (err) => console.log(err),
  });
};
