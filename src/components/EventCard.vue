<template>
  <div class="event-card">
    <span> @{{ event.time }} on {{ event.date }} </span>
    <h4>
      {{ event.title }}
    </h4>
    <Categories :category="event"/>
  </div>
</template>

<script>
import Categories from './Categories.vue'
export default {
  name: 'EventCard',
  components: { 
    
    Categories 
  
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #3c07b8;
  margin-bottom: 18px;
  text-align: center;
}
.event-card :hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(22, 29, 233, 0.2);
}

</style>
