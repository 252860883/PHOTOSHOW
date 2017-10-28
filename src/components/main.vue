<template>
<div>  
  <div v-infinite-scroll="loadMore" infinite-scroll-distance='1000' infinite-scroll-disabled=false class="all">
    <div class="left" >
      <main-list :listLeft="lists.leftLists"></main-list>
    </div>
    <div class="right">
      <main-list :listLeft="lists.rightLists"></main-list>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
import mainList from "../components/mainList.vue";
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
      asideShow: false
    };
  },
  components: {
    mainList
  },
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
            val.isLikeShow = false;
            if (index % 2) {
              self.lists.leftLists.push(val);
            } else {
              self.lists.rightLists.push(val);
            }
          });
        });
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

</style>
