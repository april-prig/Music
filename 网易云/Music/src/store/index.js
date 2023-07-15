import {createStore, mapState} from "vuex";

export default createStore({
    state: {
        playlist: [{
            al: {
                id: 494205,
                pic: 5654788301709824,
                picUrl: "https://p1.music.126.net/QnFSKGqltSSQ1PAO3z44dg==/5680077069158217.jpg"
            },
            id: 4944428,
            name: "“鉄腕アトム”オリジナル サウンド•トラック",
        }],
        playListIndex: 0,
        showAudio: true,
        detailShow:false
    },
    mutations: {
        showAudio(state) {
            state.showAudio = !state.showAudio
        },
        updatePlayList(state,value){
            state.playlist = value
        },
        updatePlayListIndex(state,index){
            state.playListIndex = index
        }
    }
    ,
    actions: {}
    ,
    modules: {}
})