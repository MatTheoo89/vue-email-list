//console.log('collegata');
//console.log(axios);

const { createApp } = Vue;

createApp({

    data(){
        return{
            title: 'Vue Email List',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            mails: [], // !creao array contenitore
            isLoad: false, // !per il loader
        }
    },
    methods:{
        // ! creo funzione
        getApi(){
            // * reset loader
            this.isLoad = false;
            // * gli dichiaro l'API da usare
            axios.get(this.apiUrl)
            // ? non so come definirla (ARROW FX?)
            .then( result => {
                //console.log(result.data);
                // ! pusho il risultato nell'array contenitore
                this.mails.push(result.data.response);
                
                this.isLoad = true;
            })
        },
        },
    mounted(){
        //console.log('montata');
        // ! richiamo X10 volte la funzione e genera 10 mail random
        for (let i = 0; i <= 10; i++) {
            this.getApi()
            }
        //console.log(this.mails);
    },
    created(){
        //console.log('creata');
    }
}).mount('#app')