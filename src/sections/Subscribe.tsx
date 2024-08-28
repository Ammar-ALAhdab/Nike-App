import { FormEvent } from "react";
import Button from "../components/Button";

function Subscribe() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col"
    >
      <p className="capitalize font-palanquin text-4xl font-bold max-lg:text-center max-lg:mb-10 max-lg:text-[36px] md:w-[540px]">
        sing up for <span className="text-coral-red">updates</span> &
        newsletters
      </p>
        <form
          onSubmit={handleSubmit}
          className="flex-1 max-lg:w-full p-2 flex justify-between items-center border-gray-300 border-2 rounded-full"
        >
          <input
            type="email"
            className="input"
            placeholder="subscribe@nike.com"
          />
          <Button type="submit" label="Sign Up" />
        </form>
    </section>
  );
}

export default Subscribe;
