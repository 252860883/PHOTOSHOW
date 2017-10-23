<template>
  <div>
  <div v-infinite-scroll="loadMore" infinite-scroll-distance='1000' infinite-scroll-disabled=false class="all">
  
  <div class="left" >
    <div v-for="list in leftLists" key="list._id">
    <div class="content" @dblclick="dblclick($event)" @touchstart="dbtouch($event)">
      <div class="border">
        <transition name="likefade">
          <div class="like" v-show=""></div>
        </transition>  
        <img v-lazy="list.url">
        <span class="creater">{{list.who}}</span>
        <span class="date">{{list.desc}}</span>
      </div>
    </div>
    </div>
  </div>

  <div class="right">
    <div v-for="list in rightLists" key="list._id" >
    <div class="content" @dblclick="dblclick($event)" @touchstart="dbtouch($event)">
      <div class="border">
      <transition name="likefade">
          <div class="like_right" v-if=false></div>
        </transition> 
        <img v-lazy="list.url">
        <span class="creater"><span>{{list.who}}</span></span>
        <span class="date">{{list.desc}}</span>
      </div>
    </div>
    </div>
  </div>

  </div>
  <div></div>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        leftLists:[],
        rightLists:[],
        page:1,
        isClickLike:false,
        startTime:"",
        time:0
      }
    },
      created(){
        
      },
      methods:{
        //拖到底部时的事件
        loadMore(){
          this.load();
          this.page++;
        },

        //加载
        load(){
          let self=this;
          this.$http.get(`https://gank.io/api/data/福利/10/${self.page}`).then(response=>{
            
            response.data.results.map(function(val,index){
              //添加一个 isLike属性
              val.isLike=true;
              if(index%2){
                self.leftLists.push(val);
              }else{
                self.rightLists.push(val);
              }
            })    
        })
        },

        //PC端双击出发事件
        dblclick(index){
          this.choiceLike(index);
        },

        //解决移动端双击事件
        dbtouch(index){
          if(this.time==0){
            this.startTime=new Date().getTime();
            this.time=1;
          }else{
            let secondTime=new Date().getTime();
            if(secondTime-this.startTime<300){
              console.log('dbTouch');
              /**
               *这里填写要执行的函数
               */
               this.choiceLike(index);
            }
            this.time=0;
          }          
        },

        //双击喜欢事件
        choiceLike(index){
          let self =this;
          //alert('dbclick');
          index.path[0].display=true;
          console.log(index)
          self.isClickLike=true;
          setTimeout(()=>{
            self.isClickLike=false;
          },300);

        }
      }
  }
</script>

<style>
.all{
  width:100%;
  display:flex;
}
.all .right,.left{
  flex:0 1 50%;
} 

.content{
 width:100%;
 padding:0.5em;
 box-sizing:border-box;
}
.content .border{
  border:.1em solid #333;
  border-radius:0.2em;
  overflow:hidden;
  position:relative;
}
.content img{
  width:100%;
}
.content .like{
  background-image:url('../assets/img/blackHeart.png');
  width:8em;
  height:8em;
  background-size:100%;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-4em;
  margin-top:-5em;
}

.content .like_right{
  background-image:url('../assets/img/blackHeart.png');
  width:8em;
  height:8em;
  background-size:100%;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-4em;
  margin-top:-5em;
}


.content .creater{
  float:left;
  margin:.5em;
  color:#000;
}
.content .date{
  float:right;
  margin:.5em;
  color:#000;
}

.likefade-enter,.likefade-leave-to{
  opacity:0;
  transform:scale(0.2);
}
.likefade-enter-active,.likefade-leave-active{
  transition:all .3s;
}
.likefade-enter-to{
  transform:scale(1.2);
  opacity:0.8;
}
</style>
