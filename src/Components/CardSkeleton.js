import Skeleton from "react-loading-skeleton";
const CardSkeleton = ({ count = 1 }) => {
  return (
    <>
      {Array(count)
        .fill("")
        .map((i, index) => {
          return (
            <div className="w-56 p-2 m-2 shadow-lg" key={index}>
              <Skeleton className="w-48 h-32" />
              <h2>
                <Skeleton />
              </h2>
              <h3>
                <Skeleton />
              </h3>
              <h4>
                <Skeleton />
              </h4>
            </div>
          );
        })}
    </>
  );
};

export default CardSkeleton;
