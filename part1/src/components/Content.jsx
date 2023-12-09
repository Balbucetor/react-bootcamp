const Content =  (props) => {

    return (
        <div>
            <p>Título: {props.part.name}. Ejercicios del capítulo:  {props.part.exercises}</p>    
        </div>
    );
}

export default Content;