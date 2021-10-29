import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                console.log('========>', posts)
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext,context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: '1',
                                title: 'First Post',
                                previewText: 'This is our first post',
                                thumbnail: '"https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"'
                            },
                            {
                                id: '2',
                                title: 'Second Post',
                                previewText: 'This is our second post',
                                thumbnail: '"https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"'
                            }
                        ])
                        resolve()
                    }, 1000);
                })
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
