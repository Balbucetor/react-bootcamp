const Content =  (props) => {

    return (
        <div>
            <p>Título: {props.part}. Ejercicios del capítulo:  {props.exercises}</p>    
        </div>
    );
}

export default Content;