import Vue from 'vue';
import List from './components/List.vue';

new Vue({
    el: '#app',

    data: {
        clients: null,
        error: false
    },
    
    components: {
        List,
    },

    mounted: function(){
        //fetch 20 random clients
        fetch('https://randomuser.mes/api/?results=20')
            .then(response => response.json())
            .then(json => {
                this.clients = json.results
            })
            .catch(error => this.error = true);
            
    }
})