import React, { LegacyRef } from "react";
import classes from "./styles/Input.module.css";

export type inputFieled = {
    label: string,
    input: {
        id?: string
        type?: string
        min?: string
        max?: string
        step?: string
        defaultValue?: string
    }
}

const Input = React.forwardRef((props: inputFieled, ref: LegacyRef<HTMLInputElement>) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;