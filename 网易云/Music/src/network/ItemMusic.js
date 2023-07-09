import {request} from "@/network/request";

export function getItemMusic(id){
    return request({
        url:'/playlist/detail?id='+id,
        method:'get'
    })
}

export function getMusicList(id){
    return request({
        url:`/playlist/track/all?id=${id}`,
        method:'get'
    })
}