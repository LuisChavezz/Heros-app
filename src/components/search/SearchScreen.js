
import { useForm } from '../hooks/useForm';
import { HeroCard } from '../heros/HeroCard';
import { getHerosBySearch } from '../../selectors/getHerosBySearch';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { useMemo } from 'react';


import { AiOutlineSearch } from 'react-icons/ai';



export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q = '' } = ( queryString.parse( location.search ) );

    const [ {hero}, handleInputChange ] = useForm({
        hero: q,
    });

    // const herosFiltered = getHerosBySearch( hero );
    const herosFiltered = useMemo( () => getHerosBySearch( hero ), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`?q=${ hero }`);
    }
    
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-6">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="hero"
                            placeholder="Find your hero..."
                            className="form-control"
                            autoComplete="off"
                            value={ hero }
                            onChange={ handleInputChange }
                        
                        />

                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            <AiOutlineSearch />
                        </button>
                    </form>

                </div>

                <div className="col-6">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                        &&
                            <div className="alert alert-info">
                                Please, search a hero!
                            </div>
                    }

                    {
                        (q !== '' && herosFiltered.length < 1 )
                        &&
                            <div className="alert alert-danger">
                                There is no a hero "{q}"
                            </div>
                    }

                    {
                        herosFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                {...hero /*envia en prop, las propiedades del objeto por separado*/ }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
