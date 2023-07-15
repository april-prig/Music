import {Swipe, SwipeItem,Popup } from "vant";

const plugins = [
    Swipe,
    SwipeItem,
    Popup
]
export default function getVant(app){
    for(let i=0;i<plugins.length;i++){
        app.use(plugins[i])
    }
}

// export default function getVant(app){
//     plugins.forEach((item)=>{
//         app.use(item)
//     })
// }