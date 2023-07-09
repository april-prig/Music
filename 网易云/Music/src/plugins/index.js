import {Swipe, SwipeItem} from "vant";

const plugins = [
    Swipe,
    SwipeItem
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