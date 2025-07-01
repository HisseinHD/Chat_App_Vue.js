<template>
  <div class="navbar">
    <NavbarItem v-for="item in items" :title="item.title" :icon="item.icon" />
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarItem
  },
  data() {
    return{ 
    };
  }
};
</script>

