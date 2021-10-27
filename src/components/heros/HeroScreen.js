import { Redirect, useParams } from "react-router"
import { getHerosById } from "../../selectors/getHerosById";

//usar imágenes de 'src' de manera dinámica
const heroImages = require.context('../../assets/heroes', true); //función de webpack

export const HeroScreen = ({ history }) => {
    
    const { heroId } = useParams();
    
    const hero = getHerosById( heroId );

    if ( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if ( history.length <= 2 ) {
            history.push('/');
            
        } else{
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={ `../assets/heroes/${ heroId }.jpg` }
                    src={ heroImages(`./${ heroId }.jpg`).default }
                    alt={ hero.superhero } 
                    className="img-thumbnail"    
                />
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>{ hero.alter_ego }
                    </li>

                    <li className="list-group-item">
                        <b>Publisher: </b>{ hero.publisher }
                    </li>

                    <li className="list-group-item">
                        <b>First appearance: </b>{ hero.first_appearance }
                    </li>
                </ul>

                <h5>Character</h5>
                <p>{ hero.characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
                    
            
        </div>
    )
}
