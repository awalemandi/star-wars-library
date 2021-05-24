import useFetch from '../hooks/useFetch';
import Tooltip from './common/Tooltip';

function CharacterChip({ url }) {
    const [character, loading] = useFetch(url);

    const characterInfo = () => {
        return (
            <div className='characterTooltip'>
                height: {character.height} <br />
                mass: {character.mass} <br />
                hair color: {character.hair_color} <br />
                skin color: {character.skin_color} <br />
                eye color: {character.eye_color} <br />
                birth year: {character.birth_year} <br />
                gender: {character.gender} <br />
            </div>
        );
    };



    return loading ? (
        <div className='characterChip'>
            <p>loading..</p>
        </div>
    )
        : (
            <Tooltip content={characterInfo()}>
                <div className='characterChip'>
                    <p>
                        {character.name}
                    </p>
                </div>
            </Tooltip>
        );
}

export default CharacterChip;
