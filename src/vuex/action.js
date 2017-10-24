export default{
    addLike({commit},url){
        commit('ADD_LIKE',url);
    },
    fixTitle({commit},title){
        commit('FIX_TITLE',title);
    }

}