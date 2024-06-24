import { useEffect } from "react";

interface UseLoadMoreProps {
  loadMoreDivRef: React.RefObject<HTMLDivElement>;
  setNumberOfItems: React.Dispatch<React.SetStateAction<number>>;
}

function useLoadMore({ loadMoreDivRef, setNumberOfItems }: UseLoadMoreProps) {
  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      const item = items[0];
      if (item.isIntersecting) {
        setNumberOfItems((prevNumberOfCards) => prevNumberOfCards + 8);
      }
    });

    const currentRef = loadMoreDivRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useLoadMore;
