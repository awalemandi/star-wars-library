import useFetch from '../hooks/useFetch';

function CharacterChip({ url }) {
    const [character, loading] = useFetch(url);

    return loading ? (
        <div className='characterChip'>
            <p>loading..</p>
        </div>
    )
        : (
            <div className='characterChip'>
                <p>
                    {character.name}
                </p>
            </div>

        );
}

export default CharacterChip;
