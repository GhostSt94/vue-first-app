<template>
  <div>
      <h3>Contactez nous</h3>
      <p>Adresse: {{address}}</p>
      <p>Tel: {{num}}</p>
      <p>email: {{email}}</p>
  </div>
</template>

<script>
export default {
    name: 'Contact',
    data(){
        return{
            num:'06 53 67 08 70',
            email:'cafe_vue@gmail.com',
            address:'18 Avenue St Antoine, Marseille',
        }
    }
}
</script>

<style>

</style>