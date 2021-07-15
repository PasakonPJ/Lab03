<template>
  <div class="student-card">
    <h5>Name: {{ student.name }}</h5>
    <h5>Surname: {{ student.surname }}</h5>
    <h5>GPA: {{ student.gpa }}</h5>
  </div>
</template>

<script>
export default {
  name: 'student',
  props: {
    student: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #3c07b8;
  margin-bottom: 18px;
  text-align: center;
}
</style>
