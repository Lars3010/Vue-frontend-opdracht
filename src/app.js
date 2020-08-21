import Vue from 'vue';
import List from './components/List.vue';

new Vue({
    el: '#app',

    data: {
        posts: null
    },
    
    components: {
        List,
    },
})