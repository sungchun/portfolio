import {projects} from "../projects.js"

function Display({info}) {
    return (
        <>
        {
            projects[info] ? (
                <div>
                   <h2>{projects[info]["title"]}</h2> 
                   <img src={projects[info]["image"]}/>
                   <a>{projects[info]["link"]}</a>
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