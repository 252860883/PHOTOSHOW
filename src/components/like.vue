<template>
    <div>
        <div v-for="list in lists" :key="list">
            <img :src="list">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

    export default{
        data (){
            return{
                lists:this.$store.state.likeUrl
            }
        },
        created(){
            console.log(this.$store.state);
            this.fixTitle('喜欢');
            
        },
        methods:{
            ...mapActions([
                'fixTitle'
            ])
        }
    }
</script>


<style>
img{
    width: 100%;
}

</style>