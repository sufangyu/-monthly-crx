<template>
  <section>
    <el-card class="box-card">
      <el-tabs
        v-model="activeName"
        tab-position="left"
      >
        <el-tab-pane
          v-for="(item, index) in developJSON"
          :key="index"
          :name="(index.toString())"
          :label="item.title"
        >
          <Content :data="item" />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </section>
</template>

<script>
import developData from '../../config/develop.json';
import { getUrlParam } from '../../utils';
import Content from './components/content.vue';

export default {
  components: { Content },
  data() {
    return {
      developJSON: developData,
      activeName: '',
    };
  },
  created() {
    console.log('developData', developData.length);
    const MAX_INDEX = developData.length;
    let tabId = getUrlParam('tabIndex');
    if (tabId === 'undefined') {
      tabId = '0';
    } else if (Number(tabId) > MAX_INDEX) {
      tabId = (MAX_INDEX - 1).toString();
    }

    this.activeName = tabId || '0';
  },
};
</script>

<style scoped>
.box-card {
  width: 1200px;
  margin: 30px auto;
}
</style>
