function Menu({setInfo}) {

    function changeInfo(Event){
        setInfo(Event.target.value)
    }

    return (
        <ul>
            <li onClick={changeInfo}>About Me</li>
            <li onClick={changeInfo}>Shipwrecked</li>
            <li onClick={changeInfo}>Journi</li>
            <li onClick={changeInfo}>Mixtape</li>
            <li onClick={changeInfo}>Circle Destroyer</li>
        </ul>
    );
}

export default Menu;