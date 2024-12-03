import { Link } from "react-router"
import {Albums} from "./util/album_data";
import Button from 'react-bootstrap/Button';

const ButtonNext = ({index}) => {
    const handleClick = () => {
        const album = Albums[index].items[0];
        console.log(album)
    }
    return (
        <Button
            onClick={handleClick}
        >see more</Button>
    );
};

export default ButtonNext;