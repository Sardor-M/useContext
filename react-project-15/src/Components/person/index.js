const Person = ({person}) => {
    return (
        <div > 
            <h1> {person.name}</h1>
            <p>Age: {person.age}</p>
            <p>Job: {person.job} </p>
          </div>

    );
};

export default Person;