<template>
  <h1>Event For Good</h1>
  <div class="student-card">
    <Students
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Students from '@/components/Students.vue'
import StudentService from '@/services/StudentService.js'

export default {
  name: 'Student',
  components: {
    // HelloWorld
    Students //register it as a child componet
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    // get events from mock db when component is created
    StudentService.getStudents()
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.student-card{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
