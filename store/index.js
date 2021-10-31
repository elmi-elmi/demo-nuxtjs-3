import Vuex from 'vuex';
import axios from 'axios';
const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext) {
                return axios.get('https://fir-nuxt-blog-default-rtdb.firebaseio.com/posts.json')
                    .then(res => {
                        const postsArray = [];
                        for (const key in res.data) {
                            postsArray.push({ ...res.data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postsArray);
                    })
                    .catch(e => console.log('errrrrror', e))

                // return new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //         console.log('****************nuxtServerInit fire')

                //         vuexContext.commit('setPosts', [
                //             {
                //                 id: '1',
                //                 title: 'Firstdddddddd Post',
                //                 previewText: 'This is our first post',
                //                 thumbnail: '"https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"'
                //             },
                //             {
                //                 id: '2',
                //                 title: 'Second Post',
                //                 previewText: 'This is our second post',
                //                 thumbnail: '"https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"'
                //             }
                //         ])
                //         resolve()
                //     }, 1000);
                // })
            },
            setPosts(vuexContex, posts) {
                vuexContex.commit('setposts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }

    })
}

export default createStore;
