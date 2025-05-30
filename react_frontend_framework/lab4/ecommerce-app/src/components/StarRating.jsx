import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating, reviewsCount }) => {
  let ratingStarsArray = [];
  let accumulator = 0;
  let ratingFraction = rating - Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (accumulator + 1 <= rating) {
      ratingStarsArray.push(
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "green" }} />
      );
      accumulator += 1;
    } else if (accumulator + 1 > rating && accumulator < rating) {
      if (ratingFraction >= 0.25 && ratingFraction < 0.75) {
        ratingStarsArray.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfStroke}
            style={{ color: "green" }}
          />
        );
        accumulator += ratingFraction;
      } else if (ratingFraction < 0.25) {
        ratingStarsArray.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarRegular}
            style={{ color: "green" }}
          />
        );
      } else if (ratingFraction > 0.75) {
        ratingStarsArray.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "green" }} />
        );
        accumulator += 1;
      }
    } else {
      ratingStarsArray.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarRegular}
          style={{ color: "green" }}
        />
      );
    }
  }
  return (
    <>
      <div>
        {ratingStarsArray} {reviewsCount ? `(${reviewsCount})` : ""}
      </div>
    </>
  );
};

export default StarRating;
