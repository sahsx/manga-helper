import { isWnacg } from "./url"

export function resizePage(element:HTMLElement, width:string){
    element.style.width = width
    element.style.margin = "auto"
}

export function resizeBodyPage(widthPercent:string){
    resizePage(document.body,widthPercent)
}

export function resizeWnacgPage(widthPercent:string){
    const el = document.getElementById('img_list')
    if(!el) return
    resizePage(el,widthPercent)
    const imgs = [...el.querySelectorAll('img')]
    imgs.forEach((img)=>{
        img.style.width="100%"
    })
}

export function resizeToNormal(el?:HTMLElement){
    let element = el??document.body
    if(!element) return
    const clientWidth = document.documentElement.clientWidth
    const normalWidth = clientWidth * 0.6+'px';
    if(isWnacg) {
        element = document.getElementById('img_list')!
        resizeWnacgPage(normalWidth)
        return
    }
    resizePage(element,normalWidth)
}

export function resizeMangaPage(widthPercent:string){
    if(isWnacg) resizeWnacgPage(widthPercent)
    window.scrollBy({
        top:0,
        left:0
    })
    return
}