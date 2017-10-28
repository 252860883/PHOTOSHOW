<template>
  <div class="info_content">
      <img class="info_photo" src="http://wx2.sinaimg.cn/mw690/a73bc6a1ly1fk1i7i8jrbj2068068a9y.jpg" alt="头像" >
      <router-link class="info_like" to="/" >主页</router-link>
      <router-link  to="/like" >我喜欢的图</router-link>
      <a href="https://github.com/252860883">关于</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toLike() {
      this.$router.push({ path: "/like" });
    }
  }
};
</script>

<style>
.info_content {
  width: 15em;
  height: 100%;
  background: #000;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  color: #fff;
}
.info_photo {
  height: 5em;
  width: 5em;
  display: block;
  background: #666;
  border-radius: 50%;
  flex: 0 1 5em;
  line-height: 5em;
  margin-top: 3em;
}

.info_content a {
  height: 4em;
  width: 100%;
  line-height: 4em;
  text-decoration: none;
  color: #fff;
}
.info_content a:active {
  background: #333;
}
.info_like{
  margin-top: 4em;
}
</style>

