import {createStore, mapState} from "vuex";

export default createStore({
    state: {
        playlist: [{
            al: {
                id: 494205,
                pic: 5654788301709824,
                picUrl: "https://p1.music.126.net/jnQSYEmXHNj0FkN3sAid6w==/3310629511337042.jpg"
            },
            id: 28381611,
            name: "“北方的女王(demo)",
            ar:[]
        }],
        playListIndex: 0,
        showAudio: true,
        detailShow:false,
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
        },
    }
    ,
    actions: {}
    ,
    modules: {}
})