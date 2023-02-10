import Skeleton from "react-loading-skeleton";
const CardSkeleton = ({ count }) => {
  return (
    <>
      {[...Array(count)].map(() => {
        return (
          <div className="card">
            <Skeleton height={160} width={250} />
            <h1>
              <Skeleton />
            </h1>
            <h3>
              <Skeleton />
            </h3>
            <p>
              <Skeleton />
            </p>
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
