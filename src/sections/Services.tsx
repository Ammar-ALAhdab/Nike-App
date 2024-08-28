import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"

function Services() {
  return (
    <section className="flex justify-center items-center max-container gap-9 flex-wrap">
      {services.map((service)=> {
        return (
          <ServicesCard key={service.label} {...service}/>
        )
      })}
    </section>
  )
}

export default Services
