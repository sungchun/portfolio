import {projects} from "../projects.js"

function Display({info}) {
    return (
        <>
        {
            projects[info] ? (console.log(projects[info]["image"])) : <></>
        }
        {
            projects[info] ? (
                <div>
                   <h2>{projects[info]["title"]}</h2> 
                   <img src={require(`${projects[info]["image"]}`)}/>
                   <a href={projects[info]["link"]}>Link</a>
                   <p>{projects[info]["desctription"]}</p>
                </div>
            ):(<div>
                <p>hello</p>
            </div>)
        }
        </>
    )
}

export default Display