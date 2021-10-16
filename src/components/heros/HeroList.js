import { useMemo } from "react";
import { getHerosByPublisher } from "../../selectors/getHerosByPublisher"
import { HeroCard } from "./HeroCard";



export const HeroList = ({ publisher }) => {
    
    //useMemo => recordar los elementos y no tener que realizar la función de nuevo si no es necesario.
    const heros = useMemo( () => getHerosByPublisher( publisher ), [publisher]);
    // const heros = getHerosByPublisher( publisher );
    
    
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
