import React from "react";

type ButtonPropsType = {
    name: string
    callBack: () => void
}
export const Button = (props: any) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}