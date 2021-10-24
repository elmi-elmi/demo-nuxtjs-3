import Vuex from 'vuex';

const createStore = ()=>{
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            setPosts(state, posts){
                state.loadedPosts = posts
            }
        },
        actions:{
            setPosts(contex){
                contex.commit('setposts')
            }
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts
            }
        }

    })
}

export default createStore;
