import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import StyledListItem from "./StyledListItem";
import { useState } from "react";

type ItemPropsType = {
    destino: string;
    date: string;
    deletar: (ev: number) => void;
    id: number;
}

const ListItem = ({ destino, date, id, deletar }: ItemPropsType): JSX.Element => {

    const formatDate = new Date(date).toLocaleDateString("pt-br", { weekday: "long", day: "2-digit", month: "2-digit", year: "2-digit", timeZone: "UTC" });

    const handleClick = () => {
        deletar(id);
    };

    const [checkedOrNot, setCheckedOrNot] = useState<boolean>(false);

    const handleCheck = () => {
        setCheckedOrNot(prev => !prev);
    };

    return (
        <StyledListItem $completed={checkedOrNot}>
            <div className="content">
                <h3>{destino}</h3>
                <time>{formatDate}</time>
            </div>
            <div className="options">
                {
                    checkedOrNot 
                    ? <MdOutlineCheckBox className="check" onClick={handleCheck}/> 
                    : <MdOutlineCheckBoxOutlineBlank className="check" onClick={handleCheck}/>
                }
                
                <BiSolidTrashAlt
                    onClick={handleClick}
                    className="trash"
                />
            </div>
        </StyledListItem>
    )
};

export default ListItem