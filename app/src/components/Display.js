import projects from "../projects"

function Display(info) {
    return (
        <div>
           <h2>{projects[{info}]["title"]}</h2> 
           <img src={projects[{info}]["image"]}/>
           <a>{projects[{info}]["link"]}</a>
           <p>{projects[{info}]["desctription"]}</p>
        </div>
    )
}

export default Display