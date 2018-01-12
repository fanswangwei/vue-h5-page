import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/helloworld/HelloWorld';
import Test from '@/components/test/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
});
