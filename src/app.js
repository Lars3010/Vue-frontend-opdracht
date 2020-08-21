import Vue from 'vue';
import List from './components/List.vue';

new Vue({
    el: '#app',

    data: {
        clients: null
    },
    
    components: {
        List,
    },

    mounted: function(){
        fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(json => {
                //console.log(json.results)
                this.clients = json.results
                console.log(this.clients)
            })
            .catch(error => this.clients = 'No Data Found')
            
    }
})