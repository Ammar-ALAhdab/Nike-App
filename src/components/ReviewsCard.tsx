import { star } from "../assets/icons";

type ReviewsCardProps = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

function ReviewsCard({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewsCardProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex gap-4 justify-center items-center p-2 w-full">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <span className="font-montserrat text-xl text-slate-gray">
          ({rating})
        </span>
      </div>
      <h3 className="mt-1 font-palanquin font-bold text-center text-3xl">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewsCard;
