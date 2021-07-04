<template>
  <section class="develop__classify">
    <h3
      :id="data.title"
      class="group__title"
    >
      {{ data.title }}
    </h3>

    <ul class="group__list">
      <li
        v-for="(item, itemId) in data.items"
        :key="itemId"
        class="item"
        :title="item.desc"
      >
        <a
          class="item__link"
          :href="item.url"
          target="_blank"
        >
          <span class="item__icon__wrap">
            <img
              class="item__icon"
              :src="item.icon"
              :alt="item.title"
            >
          </span>
          <h4 class="item__title">{{ item.title }}</h4>
          <p class="item__desc">{{ item.desc }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.group__title {
  font-size: 24px;
  font-weight: bold;
  line-height: 50px;
  padding: 0 15px 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.group__list {
  overflow: hidden;
  width: 1000px;
  margin: 15px auto 0;
}

.item {
  float: left;
  width: 172px;
  margin: 18px;
  padding: 15px 20px;
  cursor: pointer;
  transition: transform .2s linear;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 2px 0 rgba(170, 170, 170, .1);
}

.item:hover {
  -webkit-transform: translate3d(0, -3px, 0);
          transform: translate3d(0, -3px, 0);
  box-shadow: 0 0 6px rgba(0, 0, 0, .1), 0 4px 6px rgba(0, 0, 0, .1);
}

.item__icon__wrap {
  display: inline-block;
  overflow: hidden;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  border-radius: 32px;
  background: #eaeaea;
}

.item__icon {
  display: block;
  width: 32px;
  height: 32px;
}

.item__title {
  font-size: 15px;
  font-weight: bolder;
  line-height: 32px;
  display: inline-block;
  overflow: hidden;
  width: 130px;
  margin-left: 3px;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: inherit;
}

.item__link {
  display: block;
  overflow: hidden;
  text-decoration: none;
  color: #555;
}

.item__desc {
  font-size: 12px;
  overflow: hidden;
  margin-top: 8px;
  margin-bottom: 4px;
  padding-left: 7px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666;
}
</style>
