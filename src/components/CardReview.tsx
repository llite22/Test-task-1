import { ReactNode } from "react";
import style from "./CardReview.module.scss";

export const CardReview = ({
  image,
  username,
  handle,
  reviewText,
}: {
  image: ReactNode;
  username: string;
  handle: string;
  reviewText: string;
}) => {
  return (
    <div className={style.review}>
      <div className={style.review__text}>
        <div>{image}</div>
        <div>
          <h3>{username}</h3>
          <b>{handle}</b>
        </div>
      </div>
      <p>{reviewText}</p>
    </div>
  );
};
