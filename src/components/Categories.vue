<template>
  <div class="category-card">
    <h5>{{ category.category }}</h5>
    <h5>{{ category.organizer }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.category-card {
  cursor: pointer;
  margin-bottom: 18px;
  text-align: right;
}
.category-card :hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(22, 29, 233, 0.2);
}
</style>
