import { star } from "../assets/icons"

type ProductsCardProps = {
  imgURL : string,
  name : string,
  price : string
}

function ProductsCard({imgURL , name , price} : ProductsCardProps) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-center gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray leading-normal font-montserrat">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 text-lg leading-normal font-semibold font-montserrat text-coral-red">{price}</p>
    </div>
  )
}

export default ProductsCard
