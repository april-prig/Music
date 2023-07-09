import {request} from "@/network/request";

export function getBanners(){
    return request({
        url:'banner?type=2',
        method:'get'
    })
}

export function getMusicList(limit){
    return request({
        url:'/personalized?',
        method:'get'
    })
}

