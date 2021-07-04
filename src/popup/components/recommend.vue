<template>
  <ul class="tools">
    <li
      v-for="(item, index) in tools"
      :key="index"
      class="tools__item"
      :class="item.key"
      :data-index="index"
      @click="handleOpenDevelopPage(item, index)"
    >
      <span
        class="tools__item__icon"
        :style="{ backgroundImage:`url(${item.icon})` }"
      />
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import developData from '../../config/develop.json';

export default {
  data() {
    return {
      tools: [],
    };
  },
  created() {
    // 常用工具推荐
    this.tools = developData || [];
  },
  methods: {
    handleOpenDevelopPage(_, index) {
      window.open(chrome.extension.getURL(`${'develop.html?tabIndex='}${index}`));
    },
  },
};
</script>

<style scoped>
.tools {
  overflow: hidden;
  /* width: 360px; */
  margin: 0 auto;
  padding-top: 10px;
}

.tools__item {
  font-size: 14px;
  line-height: 50px;

  float: left;

  width: 137px;
  height: 50px;
  margin: 0 5px 10px;

  cursor: pointer;
  transition: transform .2s linear;
  text-align: center;

  color: #333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: #f9f9f9;
}

.tools__item:hover {
  font-weight: bold;

  -webkit-transform: translate3d(0, -3px, 0);
          transform: translate3d(0, -3px, 0);

  color: #1296db;
  border-color: #1296db;
  box-shadow: 0 0 6px rgba(0, 0, 0, .1), 0 4px 6px rgba(0, 0, 0, .1);
}

.tools__item__icon {
  line-height: 18px;

  display: inline-block;

  width: 18px;
  height: 18px;

  vertical-align: middle;

  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}

.tools__item:hover .tools__item__icon {
  background-position: 100% 0;
}
</style>
