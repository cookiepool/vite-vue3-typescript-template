<template>
  <div class="test-wraper">
    <h2>测试页面</h2>
    <hr />
    <img src="/public/favicon.ico" alt="" />
    <hr />
    <div class="bg-box"></div>
    <hr />
    <p>子组件</p>
    <child-test></child-test>
    <hr />
    <h2>ref/reactive</h2>
    <p>修改数据ref：{{ count }}</p>
    <button @click="modifyCount">点击修改</button>
    <ul>
      <li v-for="(item, idx) in list" :key="idx">{{ item }}</li>
    </ul>
    <button @click="modifyList">修改列表数据</button>
    <hr />
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <p>{{ obj.height }}</p>
    <button @click="modifyAge">修改年龄</button>
    <hr />
    <p ref="testRefs">测试$refs</p>
    <hr />
    <p>computed && watch</p>
    <p>computed结果数据：{{ computedData }}</p>
    <hr />
    <h2>饿了么组件测试</h2>
    <div>
      <i class="el-icon-edit"></i>
      <el-button type="primary" @click="openMsgBox">饿了么按钮</el-button>
      <el-button type="primary" @click="jumpPage">跳转</el-button>
    </div>
    <hr />
    <h2>store测试</h2>
    <p>{{ roleName }}</p>
    <el-button type="primary" @click="modifyRoleName">修改角色</el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRef,
  toRefs,
  onMounted,
  computed,
  watch,
  watchEffect,
  getCurrentInstance,
  nextTick
} from 'vue';

import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate
} from 'vue-router';

import { useStore } from 'vuex';

import ChildTest from '../components/ChildTest.vue';

export default defineComponent({
  name: 'Test',
  components: {
    ChildTest
  },
  setup(props, context) {
    // console.log(props);
    // console.log(context);

    // getCurrentInstance https://vue3js.cn/docs/zh/api/composition-api.html#getcurrentinstance
    const curInstance: ComponentInternalInstance | null = getCurrentInstance();
    let { $msgbox, $message, $messageBox, $notify, $route, $router, $store } =
      curInstance.appContext.config.globalProperties;

    console.log(curInstance);
    // console.log($route, $router, $store);

    // useRoute useRouter onBeforeRouteLeave onBeforeRouteUpdate
    const route = useRoute();
    const router = useRouter();

    // useStore
    const store = useStore();

    onBeforeRouteUpdate((to, from) => {
      alert('get in');
    });
    onBeforeRouteLeave((to, from) => {
      alert('leave out');
    });

    // $refs https://vue3js.cn/docs/zh/guide/composition-api-template-refs.html#%E6%A8%A1%E6%9D%BF%E5%BC%95%E7%94%A8
    const testRefs = ref(null);

    // ref
    let count = ref(100);
    let list = ref([100, 200]);

    // reactive
    let obj = reactive({
      name: 'haha',
      age: 28,
      height: 170
    });

    // toRef、toRefs https://vue3js.cn/docs/zh/api/refs-api.html#torefs
    let toRefData = toRef(obj, 'age'); // 当我修改toRefData这个值的age时，obj对应的age也会修改，同时视图也会更新
    let toRefsData = toRefs(obj);

    // computed
    let computedData = computed(() => {
      return count.value * 2;
    });

    // watch
    watch(count, (newVal, preVal) => {
      console.log(newVal);
      console.log(preVal);
    });
    // watchEffect
    watchEffect(() => {
      console.log(count.value);
    });
    // onMounted
    onMounted(() => {
      console.log(testRefs);
    });
    const modifyCount = () => {
      count.value++;
    };
    const modifyList = () => {
      list.value[0] = 1000;
    };
    const modifyAge = () => {
      toRefData.value++;
      toRefsData.height.value++;
    };
    const openMsgBox = () => {
      // $message('这是一条消息提示');
      // $message({
      //   message: '这是一条消息提示！',
      //   type: 'success'
      // });
      // $message.success('这是一条消息提示！');

      // $messageBox({
      //   title: '测试',
      //   message: '这是一条消息提示！',
      //   type: 'success'
      // });

      $notify({
        title: '提示',
        message: '这是一条消息提示'
      });
    };
    const jumpPage = () => {
      router.push({
        path: '/about',
        query: {
          id: 1223
        }
      });
    };
    const modifyRoleName = () => {
      store.commit('MODIFY_ROLE_NAME', 'stuff');
    };

    return {
      count,
      list,
      obj,
      testRefs,
      computedData,
      roleName: computed(() => store.state.roleName),
      modifyCount,
      modifyList,
      modifyAge,
      openMsgBox,
      jumpPage,
      modifyRoleName
    };
  }
});
</script>

<style lang="scss" scoped>
.test-wraper {
  background-color: #eee;
  h2 {
    color: red;
  }
  .bg-box {
    width: 200px;
    height: 200px;
    // background-image: url('../assets/logo.png');
    background-image: url('public/favicon.ico');
  }
}
</style>
