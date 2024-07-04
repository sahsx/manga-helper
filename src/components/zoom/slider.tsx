import { Component, ComponentProps, JSX, createSignal } from "solid-js";
import styles from './slider.module.css'

type SliderProps = ComponentProps<Component> & {
  onChange: (value: string) => void;
};
type SliderComponent = Component<SliderProps>;
const Slider: SliderComponent = (props: SliderProps) => {
  const [value] = createSignal(100);
  const [min] = createSignal(30);
  const [max] = createSignal(200);

  const changeHandler:JSX.EventHandler<HTMLInputElement,Event> = (event)=>{
    props.onChange(event.currentTarget.value)
  }
  return (
    <div>
      <input class={styles.Slider} type="range" value={value()} min={min()} max={max()} onInput={changeHandler}></input>
    </div>
  );
};

export default Slider;
