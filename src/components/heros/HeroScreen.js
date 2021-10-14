import { Redirect, useParams } from "react-router"
import { getHerosById } from "../../selectors/getHerosById";



export const HeroScreen = () => {
    
    const { heroId } = useParams();
    
    const hero = getHerosById( heroId );

    if ( !hero ) {
        return <Redirect to="/" />;
    }
    
    return (
        <div>
            <h1>HeroScreen</h1>
            <hr />
        </div>
    )
}
