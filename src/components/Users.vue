<template>
  <div>
    <div style="margin: 30px 0 0 40px;">
      <input type="text" v-model="name">
      <button @click="handlerClick">Add User</button>
    </div>
    <ol>
      <li v-for="{ id, info } in $store.users.list" :key="id">
        {{ info }}
      </li>
    </ol>
  </div>
</template>

<script>
import { observer } from 'mobx-vue';

export default observer({
  data: () => ({
    name: '',
  }),

  methods: {
    handlerClick() {
      this.$store.users.addUser(this.name);
      this.name = '';
    },
  },
});
</script>
