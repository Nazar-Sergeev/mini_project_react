const Genre = ({genre}) => {
    return (
        <div style={{border:'1px solid black', marginBottom:'5px'}}>
            <h2>{genre.name}</h2>
        </div>
    );
};


export {Genre};