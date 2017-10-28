<template>
<div class="topAll">
    <div class="top">
        <span @click="changeAsideShow">三</span>
        <h3>{{this.$store.state.title}}</h3>
    </div>
    
    <transition name="aside">
      <info class="aside" v-if="asideShow" ></info>
    </transition>

    <transition name="grey">
        <div class="grey" v-if="asideShow" @click="changeAsideShow"></div>
    </transition>
    </div>
</div>
</template>

<script>
import info from "./side.vue";
export default {
  data() {
    return {
      asideShow: false
    };
  },
  components: {
    info
  },
  methods: {
    changeAsideShow() {
      this.asideShow = !this.asideShow;
      console.log("999");
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.topAll {
  overflow: hidden;
}
.top {
  width: 100%;
  height: 3em;
  line-height: 3em;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  color: #eee;
  z-index: 100;
  display: flex;
}
.top span {
  text-align: left;
  padding-left: 1em;
  box-sizing: border-box;
  flex: 0 1 25%;
}
.top span:active {
  transform: rotate(360deg);
}
.top h3 {
  flex: 0 1 50%;
}
.grey {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 98;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

.aside-enter,
.aside-leave-to {
  transform: translateX(-15em);
}
.aside-enter-active,
.aside-leave-active {
  transition: all 0.2s;
}

.grey-enter,
.grey-leave-to{
    opacity: 0;
}
.grey-enter-active,
.grey-leave-active{
    transition: all .2s;
}
</style>

