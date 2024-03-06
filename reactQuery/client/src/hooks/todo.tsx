import { CreateTodoProps, GetTodoProps } from "../interfaces/UserInterfce";
import { useFocusDate, useTodoActins } from "../stores/TodoStore";
import { customAxios } from "../util/customAxios";
import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

// todo 생성 api
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

// todo 가져오기 api
export const useGetTodos = () => {
  const { setTodoList, setDoneTodos } = useTodoActins();
  const focusDate = useFocusDate();

  return useQuery({
    queryKey: ["getTodos"],
    queryFn: () => customAxios.get("/todos/todo/"),
    select: (res) => {
      // 호출 성공 시
      if (res.status == 200) {
        const todos = res.data as GetTodoProps[];
        // 완료된 todo 목록 받아오기
        setTodoList(todos.filter((each) => each.completed_at != null));

        // calendar에서 focus된 날짜의 완료 todo 목록 가져오기
        setDoneTodos(
          todos.filter((each) => {
            if (each.completed_at) {
              return (
                focusDate.toDateString() ==
                new Date(each.completed_at).toDateString()
              );
            }
          })
        );
        // 우선도순 정렬
        return todos.sort((a, b) => b.priority - a.priority);
      } else if (res.status == 404) {
        // 데이터가 없을 시 빈 배열 반환
        setTodoList([]);
        setDoneTodos([]);
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

// todo 삭제 api
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { setFocusDate } = useTodoActins();

  return useMutation({
    mutationFn: (payload: number) =>
      customAxios.delete("/todos/update_todo/", {
        params: { todo_id: payload },
      }),
    onSuccess: (res) => {
      if (res.status == 204) {
        setFocusDate(new Date());
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
