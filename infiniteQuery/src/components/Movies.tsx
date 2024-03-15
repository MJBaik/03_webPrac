import { UseInfiniteQueryResult, useQueryClient } from "@tanstack/react-query";
import { useGetMovieList } from "../api/movieApi";
import { Wrapper, MovieCard } from "../styles";
import { getFullImage } from "../util/movie";
import Observer from "./Observer";
import { NowPlayingInterface } from "../interface/MovieInterface";

function Movies() {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useGetMovieList();
  const queryClient = useQueryClient();

  if (!data || isLoading) return <></>;

  // observer가 화면에 들어오면 다음 페이지 fetch
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  // 인피니트 쿼리 결과 필터링 (낙관적 업데이트 시 사용..?)
  const removeMovie = (id: number) => {
    queryClient.setQueryData(["movieList"], (old) => {
      return {
        ...old,
        pages: old.pages.map((each: NowPlayingInterface) => {
          return {
            ...each,
            results: each.results.filter((movie) => {
              return movie.id != id;
            }),
          };
        }),
      };
    });
  };

  return (
    <>
      <h1>영화 목록</h1>
      <Wrapper>
        {data &&
          data.map((page) =>
            page.results.map((movie) => (
              <MovieCard
                key={movie.id}
                $bgUrl={getFullImage(movie.poster_path)}
                onClick={() => {
                  removeMovie(movie.id);
                }}
              ></MovieCard>
            ))
          )}
      </Wrapper>
      <Observer
        onIntersect={onIntersect}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}

export default Movies;
