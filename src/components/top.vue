<template>
    <div class="top">
        <span>三</span>
        <h3>动态</h3>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style>
*{
    margin:0;
    padding:0;
}
    .top{
        width:100%;
        height:3em;
        line-height:3em;
        text-align:center;
        position:fixed;
        top:0;
        left:0;
        background:#000;
        color:#eee;
        z-index:100;
        display:flex
    }
    .top span{
        text-align:left;
        padding-left:1em;
        box-sizing:border-box;
        flex:0 1 25%;
    }
    .top h3{
        flex:0 1 50%;
    }

    
</style>

