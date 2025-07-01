<template>
  <div class="navbarItem">
       <i :class="icon"></i>
       {{ title }}
  </div>
</template>

<script>
    
export default {
  name: 'NavbarItem',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}

</script>

<style>

</style>