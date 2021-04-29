export default [
  {
    path: '/',
    name: 'entry',
    redirect: '/hello',
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/HelloWorld/HelloWorld.vue'),
  }
];
