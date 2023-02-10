import Skeleton from "react-loading-skeleton";
const CardSkeleton = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill("")
        .map((i, index) => {
          return (
            <div className="card" key={index}>
              <Skeleton height={160} width={200} />
              <h3>
                <Skeleton />
              </h3>
              <h4>
                <Skeleton />
              </h4>
              <h6>
                <Skeleton />
              </h6>
              <h5>
                <Skeleton />
              </h5>
            </div>
          );
        })}
    </>
  );
};

export default CardSkeleton;
