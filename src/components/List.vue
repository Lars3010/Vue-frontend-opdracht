<template>
    <li class="person">
        <label for="name">Name:</label>
        <input v-if="edit" type="text" v-model="formattedName" placeholder="Name" name="name">
        <p v-else>{{ formattedName }}</p>

        <label for="email">Email:</label>
        <input v-if="edit" type="email" v-model="client.email" placeholder="Email" name="email">
        <p v-else>{{client.email}}</p>

        <label for="phone">Phone-number:</label>
        <input v-if="edit" type="text" v-model="client.phone" placeholder="Phone-number" name="phone">
        <p v-else>{{client.phone}}</p>

        <label for="adress">Adress:</label>
        <input v-if="edit" type="text" v-model="formattedAdress" placeholder="Adress" name="adress">
        <p v-else>{{formattedAdress}}</p>

        <button @click="edit = !edit" v-text="edit? 'Save' : 'Edit'"></button>
    </li>
</template>

<script>
export default {
    name: 'List',
    props: ['client'],
    
    data: function(){
        return{
            edit: false
        }
    },
    computed: {
        //get formatted first and last name
        formattedName: {
            get: function(){
                return `${this.client.name.first} ${this.client.name.last}`;
            },
            //set updated name
            set: function(newName){
                let names = newName.split(' ');
                this.client.name.first = names[0]
                this.client.name.last = names[names.length -1];
            }
        },
        //get formatted street name and number
        formattedAdress: {
            get: function(){
                return `${this.client.location.street.name} ${this.client.location.street.number}`;
            },
            //set updated adress
            set: function(newAdress){
                let adress = newAdress.split(' ');
                this.client.location.street.name = adress[0];
                this.client.location.street.number = adress[adress.length -1];
            }
        },
    }
}
</script>