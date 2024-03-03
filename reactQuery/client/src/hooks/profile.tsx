import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { customAxios } from "../util/customAxios";
import { UserInterface } from "../interfaces/UserInterfce";
import { useSetUpdate } from "../stores/ProfileStore";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: () => customAxios.get("/accounts/get_user/"),
    select: (res) => res.data as UserInterface,
    staleTime: Infinity,
  });
};

export const useUpdatProfile = () => {
  const queryClient = useQueryClient();
  const setIsUpdating = useSetUpdate();

  return useMutation({
    mutationFn: (payload: FormData) => {
      return customAxios.put("/accounts/get_user/", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: (res) => {
      if (res.status == 201) {
        queryClient.invalidateQueries(["getProfile"] as InvalidateQueryFilters);
        setIsUpdating(false);
      } else if (res.status == 400) {
        console.error(res);
      }
    },
    onError: (err) => console.log(err),
  });
};
