import { RatingEnum } from "../../shared/enums/RatingEnum";
import { RatingLabel } from "./RatingLabel/RatingLabel";
import { RatingPins } from "./RatingPins/RatingPins";

export type RatingProps = {
  rating: RatingEnum,
  isPin?: boolean,
};

export const Rating = (props: RatingProps) => {
  return (
    <>
      {props.isPin ?
        <RatingPins rating={props.rating} />
        :
        <RatingLabel rating={props.rating} />}
    </>
  )
};
