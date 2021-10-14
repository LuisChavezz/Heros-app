import { getHerosByPublisher } from "../../selectors/getHerosByPublisher"
import { HeroCard } from "./HeroCard";



export const HeroList = ({ publisher }) => {
    
    const heros = getHerosByPublisher( publisher );
    
    
    return (
        <div className="card-columns" >
            {
                heros.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        {...hero /*envia en prop, las propiedades del objeto por separado*/ }
                    />
                ))
            }
        </div>
    )
}
