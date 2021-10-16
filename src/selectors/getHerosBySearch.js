import { heros } from "../data/heros";

export const getHerosBySearch = ( heroSearch ) => {
    
    if ( heroSearch === '' ) {
        return [];
    }

    heroSearch = heroSearch.toLocaleLowerCase();

    return heros.filter( hero => hero.superhero.toLocaleLowerCase().includes( heroSearch ));
}