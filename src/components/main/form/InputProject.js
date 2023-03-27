const InputProject =(props)=>{
    return(
        <fieldset className="project">
                <input
                  className="input"
                  type="text"
                  placeholder="Nombre del proyecto"
                  name="name"
                  id="name"
                  onChange={props.handleInput}
                  value={props.data.name}
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="slogan"
                  id="slogan"
                  placeholder="Slogan"
                  onChange={props.handleInput}
                  value={props.data.slogan}
                />
                <div>
                  <input
                    className="input input-mvl"
                    type="text"
                    name="repo"
                    id="repo"
                    placeholder="Repo"
                    onChange={props.handleInput}
                    value={props.data.repo}
                    required
                  />

                  <input
                    className="input input-mvl"
                    type="text"
                    placeholder="Demo"
                    name="demo"
                    id="demo"
                    onChange={props.handleInput}
                    value={props.data.demo}
                  />
                </div>
                <span className="mensj">{props.mensjRepo}</span>
                <input
                  className="input"
                  type="text"
                  placeholder="Tecnologías"
                  name="technologies"
                  id="technologies"
                  onChange={props.handleInput}
                  value={props.data.technologies}
                />
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Descripción"
                  name="desc"
                  id="desc"
                  onChange={props.handleInput}
                  value={props.data.desc}
                  required
                ></textarea>
              </fieldset>
    );
}


export default InputProject;