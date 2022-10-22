import { LiHTMLAttributes } from "react";

interface IValidationList extends LiHTMLAttributes<HTMLLIElement> {}

export default function ValidationList(props: IValidationList){
    return(
        <ul>
            <li>{props.children}</li>
        </ul>
    );
}