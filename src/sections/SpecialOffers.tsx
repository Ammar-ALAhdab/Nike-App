import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffers() {
  return (
    <section className="flex justify-center flex-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={678}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We provide you
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas
          maxime corporis vitae excepturi quo, ab repudiandae dignissimos
          maiores deleniti cumque consectetur error asperiores dolorem unde a
          laborum voluptatibus impedit.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn more"  bgColor="bg-white" borderColor="border-slate-gray" txtColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
