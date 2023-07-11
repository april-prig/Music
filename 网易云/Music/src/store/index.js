import {createStore, mapState} from "vuex";

export default createStore({
    state: {
        playlist: [{
            al: {
                id: 494205,
                name: "“鉄腕アトム”オリジナル サウンド•トラック",
                pic: 5654788301709824,
                picUrl: "https://p1.music.126.net/QnFSKGqltSSQ1PAO3z44dg==/5680077069158217.jpg"
            },
            id: 4944428,
        }],
        playListIndex: 0,
        showAudio: true
    },
    mutations: {
        showAudio(state) {
            state.showAudio = !state.showAudio
        },
        updatePlayList(state,value){
            state.playlist = value
        }
    }
    ,
    actions: {}
    ,
    modules: {}
})