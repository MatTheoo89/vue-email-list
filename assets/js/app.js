//console.log('collegata');
//console.log(axios);

const { createApp } = Vue;

createApp({

    data(){
        return{
            title: 'Vue Email List',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            mails: [],
            isLoad: false,
        }
    },
    methods:{
        
        getApi(){
            
            this.isLoad = false;
            
            axios.get(this.apiUrl)
            
            .then( result => {
                //console.log(result.data);
                this.mails.push(result.data.response);
                
                this.isLoad = true;
            })
        },
        },
    mounted(){
        //console.log('montata');
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        this.getApi();
        console.log(this.mails);
    },
    created(){
        //console.log('creata');
    }
}).mount('#app')