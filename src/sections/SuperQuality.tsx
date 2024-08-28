import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We provide you
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Super</span>{" "}
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas
          maxime corporis vitae excepturi quo, ab repudiandae dignissimos
          maiores deleniti cumque consectetur error asperiores dolorem unde a
          laborum voluptatibus impedit.
        </p>
        <div>
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          className="object-contain"
          height={522}
          width={570}
        />
      </div>
    </section>
  );
}

export default SuperQuality;
