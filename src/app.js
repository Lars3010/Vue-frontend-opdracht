import Vue from 'vue';
import List from './components/List.vue';

new Vue({
    el: '#app',

    data: {
        clientData: null
    },
    
    components: {
        List,
    },

    mounted: function(){
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(json => this.clientData = json.results)
            .catch(error => this.clientData = 'No Data Found')
            
    }
})