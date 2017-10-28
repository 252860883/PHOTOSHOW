<template>
<div>
<div v-for="list in listLeft" :key="list._id" >
    <div class="content" @dblclick="dblclick(list)" @touchstart="dbtouch(list)">
      <div class="border">
        <transition name="likefade">
          <div class="like_right" v-if="list.isLikeShow"></div>
        </transition> 
        <img v-lazy="list.url">
        <div class="info">
          <span class="creater">{{list.who}}</span>
          <!-- <span class="date">{{list.desc}}</span> -->
          <div class="icongroup">
            <embed v-if="!list.isLike" class="likeIcon" :src="unlikeIcon" />
            <embed v-if="list.isLike" class="likeIcon" :src="likeIcon" />
          </div>
        </div>
      </div>
    </div>
</div>
</div>

</template>

<script>
import {mapActions} from 'vuex';
export default {
  props:['listLeft'],
  data(){
    return{
      likeIcon: require("../assets/like.svg"),
      unlikeIcon: require("../assets/unlike.svg")
    }
  },
  methods:{
...mapActions(["addLike", "fixTitle"]),

    //PC端双击出发事件
    dblclick(list) {
      this.choiceLike(list);
    },

    //解决移动端双击事件
    dbtouch(index) {
      if (this.time == 0) {
        this.startTime = new Date().getTime();
        this.time = 1;
      } else {
        let secondTime = new Date().getTime();
        if (secondTime - this.startTime < 300) {
          /**
           *这里填写要执行的函数
           */
          this.choiceLike(index);
        }else{
          this.startTime=secondTime;
        }
      }
    },

    //双击喜欢事件
    choiceLike(list) {
      list.isLikeShow = true;
      list.isLike = true;
      setTimeout(() => {
        list.isLikeShow = false;
      }, 300);
      this.addLike(list.url);
    }
  }
}
</script>

<style>

.content {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
.content .border {
  border: 0.1em solid #333;
  border-radius: 0.2em;
  overflow: hidden;
  position: relative;
}
.content img {
  width: 100%;
}
.content .like {
  background-image: url("../assets/img/blackHeart.png");
  width: 8em;
  height: 8em;
  background-size: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -4em;
  margin-top: -5em;
}

.content .like_right {
  background-image: url("../assets/img/blackHeart.png");
  width: 8em;
  height: 8em;
  background-size: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -4em;
  margin-top: -5em;
}
.content .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  margin: 0.5em 0;
}

.content .creater {
  flex: 0 1 auto;
  margin: 0 0.5em;
}

.content .icongroup {
  flex: 0 1 0.5em;
}
.content .likeIcon {
  width: 1.5em;
  height: 1.5em;
  margin: 0 0.5em;
}

.likefade-enter {
  opacity: 0.2;
  transform: scale(0.2) rotate(0);
}
.likefade-enter-active,
.likefade-leave-active {
  transition: all 0.2s ease;
}
.likefade-enter-to {
  transform: scale(1.2) rotate(360deg);
  opacity: 0.9;
}
.likefade-leave-to {
  opacity: 0.2;
  transform: scale(3);
}

</style>
