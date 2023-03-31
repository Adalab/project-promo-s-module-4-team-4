const InputAuthor =(props)=>{
    return(
        <fieldset className="autor">
                <input
                  className="input"
                  type="text"
                  placeholder="Nombre"
                  name="autor"
                  id="autor"
                  onChange={props.handleInput}
                  value={props.data.autor}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Trabajo"
                  name="job"
                  id="job"
                  onChange={props.handleInput}
                  value={props.data.job}
                />
              </fieldset>
    );
}

export default InputAuthor;