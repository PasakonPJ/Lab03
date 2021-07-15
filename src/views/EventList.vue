<template>
  <h1>Event For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'
export default {
  name: 'EventList',
  components: {
    // HelloWorld
    EventCard //register it as a child componet
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    // get events from mock db when component is created
    axios
      .get('http://localhost:3004/events')
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
