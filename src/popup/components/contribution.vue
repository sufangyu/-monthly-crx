<template>
  <section>
    <el-form
      ref="articleForm"
      :model="article"
      :rules="rules"
      label-width="80px"
      size="medium"
    >
      <el-form-item
        label="文章标题"
        prop="title"
        placeholder="请输入文章的标题"
      >
        <el-input v-model="article.title" />
      </el-form-item>

      <el-form-item
        label="推荐理由"
        prop="description"
      >
        <el-input
          v-model="article.description"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 8}"
          placeholder="请输入推荐该文章的推荐理由"
        />
      </el-form-item>

      <el-form-item
        label="投稿人"
        prop="reporter"
      >
        <el-select
          v-model="article.reporter"
          filterable
          placeholder="请选择投稿人"
          style="width: 100%"
        >
          <el-option
            v-for="item in users"
            :key="item.id"
            :label="item.nickname"
            :value="item.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="设置分类"
        prop="category"
      >
        <el-cascader
          v-model="article.category"
          style="width: 100%"
          :options="categories"
          expand-trigger="hover"
          :show-all-levels="false"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('articleForm')"
        >
          确认投稿
        </el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
import ajax from '@fdaciuk/ajax';

export default {
  data() {
    return {
      article: {
        title: '',
        link: '',
        description: '',
        reporter: '',
        category: '',
      },
      users: [],
      categories: [],
      // 校验规则
      rules: {
        title: [
          { required: true, message: '请输入文章的标题', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请输入推荐该文章的推荐理由', trigger: 'blur' },
        ],
        reporter: [
          { required: true, message: '请选择投稿人', trigger: 'change' },
        ],
        category: [
          { required: true, message: '请选择分类', trigger: 'change' },
        ],
      },
    };
  },
  created() {
    this.getCurrentChormeTab();
    this.getUsers();
    this.getCategories();
  },
  methods: {
    getCategories() {
      ajax({
        method: 'get',
        url: 'http://localhost:3000/categories',
      }).then((res) => {
        console.log('res =>>', res);
        const tagsData = [];
        (res || []).forEach((item, index) => {
          tagsData[index] = {
            value: item.value,
            label: item.value,
            children: item.children && item.children.map((tag) => ({
              value: tag,
              label: tag,
            })),
          };
        });

        this.categories = tagsData;
      }).catch((err) => {
        console.log(err);
      });
    },
    getUsers() {
      ajax({
        method: 'get',
        url: 'http://localhost:3000/users',
      }).then((res) => {
        console.log('res =>>', res);
        this.users = res || [];
      }).catch((err) => {
        console.log(err);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning',
          });
          return false;
        }
        console.log('提交', this.article);
      });
    },
    getCurrentChormeTab() {
      // 获取当前窗口 id
      chrome.tabs.query({
        active: true,
        currentWindow: true,
      }, (tabs) => {
        // 当前激活 tab 的ID
        const tabId = tabs.length ? tabs[0].id : null;

        chrome.tabs.executeScript(tabId || null, {
          file: './contentScripts/recommend.js',
        }, () => {
          // 向目标网页进行通信
          chrome.tabs.sendMessage(tabId || null, { message: 'GET_TOPIC_INFO' }, (response) => {
            console.log('response: ', response);
            if (response) {
              const { title, link, description } = response;
              this.article.title = title;
              this.article.link = link;
              this.article.description = description;
            }
          });
        });
      });
    },
  },
};
</script>
