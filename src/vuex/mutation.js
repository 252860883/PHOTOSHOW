export default{
    ADD_LIKE(store,url){
        //如果重复添加喜欢，则删除原来的地址，添加到尾部
        store.likeUrl.map(function(value,index){
            if(value==url){
                store.likeUrl.splice(index,1);
            }
        })
        store.likeUrl.push(url);
        store.likeUrl.reverse();
    },
    FIX_TITLE(store,title){
        store.title=title;
    }

}