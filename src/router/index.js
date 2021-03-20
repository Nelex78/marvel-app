import { createWebHistory, createRouter } from "vue-router";

import path from './path';

const router = createRouter({
  history: createWebHistory(),
  routes: path
})

export default router;