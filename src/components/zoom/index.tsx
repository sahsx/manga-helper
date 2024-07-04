import { Component } from "solid-js"
import styles from './index.module.css'
import Slider from './slider'
import Popover from '../popover'
import { resizeMangaPage, resizeToNormal } from "../../helpers/resizePage"

const Zoom:Component = () => {
    const changeHandler = (val:string)=>{
        resizeMangaPage(val+'%')
    }
    const clickHandler = () => {
        resizeToNormal()
    } 
    const label = <div class={styles.Pointer}></div>
    return (
        <div class={styles.Zoom} onClick={clickHandler}>
            <Popover  
                label={label} 
                content={(<Slider onChange={changeHandler}></Slider>)}></Popover>
        </div>
    )
}

export default Zoom