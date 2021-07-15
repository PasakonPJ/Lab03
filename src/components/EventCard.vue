<template>
  <div class= "event-card">

  </div>
</template>

<script>
export default {
  name: 'EventCard'
//   props: {
//      msg: String
//     }
}
</script>


<style scoped>

  .event-card 
  {
    padding: 20 px;
    width: 250 px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18 px;
    }
    .event-card :hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2);
    }

</style>