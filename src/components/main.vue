<template>
  <div>
    
  
  <div v-infinite-scroll="loadMore" infinite-scroll-distance='1000' infinite-scroll-disabled=false class="all">

  <div class="left" >

    <div v-for="list in lists.leftLists" :key="list._id">

    <div class="content" @dblclick="dblclick(list)" @touchstart="dbtouch(list)">
      <div class="border">
        <transition name="likefade">
          <div class="like" v-show="list.isLike"></div>
        </transition>  
        <img v-lazy="list.url">
        <div class="info">
          <span class="creater">{{list.who}}</span>
          <!-- <span class="date">{{list.desc}}</span> -->
          <embed class="likeIcon" :src="likeIcon" />
        </div>

      </div>
    </div>
    </div>
  </div>

  <div class="right">
    <div v-for="(list, index) in lists.rightLists" :key="list._id" >
    <div class="content" @dblclick="dblclick(list)" @touchstart="dbtouch(list)">
      <div class="border">
      <transition name="likefade">
          <div class="like_right" v-if="list.isLike"></div>
        </transition> 
        <img v-lazy="list.url">
        <div class="info">
          <span class="creater">{{list.who}}</span>
          <!-- <span class="date">{{list.desc}}</span> -->
          <embed class="likeIcon" :src="likeIcon" />
        </div>
      </div>
    </div>
    </div>
  </div>

  </div>
  <div></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      lists: {
        leftLists: [],
        rightLists: []
      },
      page: 1,
      isClickLike: false,
      startTime: "",
      time: 0,
      asideShow: false,
      likeIcon: require("../assets/unlike.svg")
    };
  },
  components: {},
  created() {
    this.fixTitle("动态");
  },
  methods: {
    ...mapActions(["addLike", "fixTitle"]),
    //拖到底部时的事件
    loadMore() {
      this.load();
      this.page++;
    },

    //加载
    load() {
      let self = this;
      this.$http
        .get(`https://gank.io/api/data/福利/10/${self.page}`)
        .then(response => {
          //console.log(response.data.results)
          response.data.results.map(function(val, index) {
            //添加一个 isLike属性
            val.isLike = false;
            if (index % 2) {
              self.lists.leftLists.push(val);
            } else {
              self.lists.rightLists.push(val);
            }
          });
        });
    },

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
        }
        this.time = 0;
      }
    },

    //双击喜欢事件
    choiceLike(list) {
      list.isLike = true;
      setTimeout(() => {
        list.isLike = false;
      }, 300);
      this.addLike(list.url);
    }
  }
};
</script>

<style>
.all {
  width: 100%;
  display: flex;
}

.all .right,
.left {
  flex: 0 1 50%;
}

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
.content .info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  margin: .5em 0;
}

.content .creater {
  flex: 0 1 auto;
   margin: 0 .5em;
}

.content .likeIcon {
  flex: 0 1 0.5em;
  width: 1.5em;
  margin: 0 .5em;
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
