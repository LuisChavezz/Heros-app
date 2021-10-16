
import { useForm } from '../hooks/useForm';
import { getHerosBySearch } from '../../selectors/getHerosBySearch';
import { HeroCard } from '../heros/HeroCard';
import { useLocation } from 'react-router';
import queryString from 'query-string';

import { AiOutlineSearch } from 'react-icons/ai';



export const SearchScreen = ({ history }) => {
    
    const location = useLocation();
    const { q } = ( queryString.parse( location.search ) );

    const [ {hero}, handleInputChange, reset ] = useForm({
        hero: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`?q=${ hero }`);

        reset();
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
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            <AiOutlineSearch />
                        </button>
                    </form>

                </div>

                <div className="col-6">
                    <h4>Results</h4>
                    <hr />

                    {
                        // heros.map( hero => (
                        //     <HeroCard 
                        //         key={ hero.id }
                        //         {...hero /*envia en prop, las propiedades del objeto por separado*/ }
                        //     />
                        // ))
                    }
                </div>
            </div>
        </div>
    )
}
