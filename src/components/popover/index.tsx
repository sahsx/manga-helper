import { Component, ComponentProps, JSXElement } from "solid-js";
import Styles from './index.module.css'

type PopoverProps = ComponentProps<Component> & {
    label:JSXElement;
    content:JSXElement;
}
type PopoverComponent = Component<PopoverProps>
const Popover:PopoverComponent = (props:PopoverProps)=>{
    return (
        <div class={Styles.Popover}>
            <div class={Styles.label}>
                {props.label}
                <div class={Styles.content}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Popover