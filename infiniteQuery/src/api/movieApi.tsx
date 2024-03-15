import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  MovieInterface,
  NowPlayingInterface,
} from "../interface/MovieInterface";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

export const useGetMovieList = () => {
  const queryClient = useQueryClient();

  return useInfiniteQuery({
    queryKey: ["movieList"],
    queryFn: ({ pageParam }) => {
      return axios
        .get("https://api.themoviedb.org/3/movie/now_playing", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          params: {
            language: "ko-KR",
            page: pageParam,
          },
        })
        .then((res) => res.data);
    },
    initialPageParam: 1,
    getNextPageParam: (_lastPage) => {
      if (_lastPage.page < _lastPage.total_pages) {
        return _lastPage.page + 1;
      } else return undefined;
    },
    select: ({ pages }) => {
      return pages as NowPlayingInterface[];
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
