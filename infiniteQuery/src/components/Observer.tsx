import React, { useEffect, useRef } from "react";
import { Target } from "../styles";
import Spinner from "../assets/image/spinner.gif";

type Props = {
  onIntersect: IntersectionObserverCallback;
  isFetchingNextPage: boolean;
};

function Observer({ onIntersect, isFetchingNextPage }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect
    );

    observer.observe(scrollRef.current);

    return () => {
      if (!scrollRef.current) return;
      return observer.unobserve(scrollRef.current);
    };
  });

  return (
    <Target ref={scrollRef}>
      {isFetchingNextPage && <img src={Spinner} />}
    </Target>
  );
}

export default Observer;
