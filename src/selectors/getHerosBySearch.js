import { heros } from "../data/heros";

export const getHerosBySearch = ( heroSearch ) => {
    
    return heros.filter( hero => hero.superhero === heroSearch );

}