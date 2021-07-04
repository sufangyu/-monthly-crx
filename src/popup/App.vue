<template>
  <section>
    <el-tabs
      v-model="activeTabName"
      stretch
      type="border-card"
      @tab-click="handleTabClick"
    >
      <el-tab-pane
        label="常用推荐"
        name="tab-tools"
      >
        <h3
          slot="label"
          class="app__target"
        >
          <em class="el-icon-setting" /> 常用推荐
        </h3>
        <Recommend />
      </el-tab-pane>

      <el-tab-pane
        lazy
        label="前端学院"
        name="tab-recommend"
      >
        <h3
          slot="label"
          class="app__target"
        >
          <em class="el-icon-edit" /> 前端学院
        </h3>
        <Contribution />
      </el-tab-pane>

      <el-tab-pane
        lazy
        label="前端图书馆"
        name="tab-books"
      >
        <h3
          slot="label"
          class="app__target"
        >
          <em class="el-icon-notebook-1" /> 前端图书馆
        </h3>
        <Contribution />
      </el-tab-pane>

      <el-tab-pane
        lazy
        label="前端文档"
        name="tab-docs"
      >
        <h3
          slot="label"
          class="app__target"
        >
          <em class="el-icon-tickets" /> 前端文档
        </h3>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import Recommend from './components/recommend.vue';
import Contribution from './components/contribution.vue';
import {
  BASE_URL, STATIC_URL, otherBlogs, links,
} from '../config';

export default {
  components: {
    Recommend,
    Contribution,
  },
  data() {
    return {
      // activeTabName: 'tab-tools',
      activeTabName: 'tab-recommend',
    };
  },
  methods: {
    handleTabClick(activeTab) {
      console.log('activeTab.name', activeTab.name);

      if (activeTab.name === 'tab-books') {
        window.open(chrome.extension.getURL('books.html'));
      } else if (activeTab.name === 'tab-docs') {
        window.open(links.frontDocument);
      }
    },
  },
};
</script>

<style scoped>
section {
  min-width: 480px;
  padding: 15px;
}
</style>
