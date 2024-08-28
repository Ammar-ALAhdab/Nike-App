import ProductsCard from "../components/ProductsCard";
import { products } from "../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl">
          Popular <span className="text-coral-red">Products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quasi
          dolorum doloremque officiis provident. Vel eos, impedit veniam
          provident facilis amet blanditiis ea ullam aliquid aspernatur. Nisi
          facere ad sint?
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => {
            return <ProductsCard key={product.name} {...product}/>;
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
