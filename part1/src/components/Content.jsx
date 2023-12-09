const Content =  (props) => {
    console.log(props) 
  
    return (
        <div>
           
            <p>Título: {props.parts[0].name} Ejercicios del capítulo:  {props.parts[0].exercises}</p>    
            <p>Título: {props.parts[1].name}. Ejercicios del capítulo:  {props.parts[1].exercises}</p> 
            <p>Título: {props.parts[2].name}. Ejercicios del capítulo:  {props.parts[2].exercises}</p> 
        </div>
    );
}

export default Content;