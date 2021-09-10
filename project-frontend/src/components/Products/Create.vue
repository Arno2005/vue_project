<template>
  <div>
    <input type="text" v-model="product.name">
    <input type="text" v-model="product.price">
    <input type="text" v-model="product.quantity">
    <input type="text" v-model="product.description">
    <b-button class="btn btn-success" @click="addProduct">Create product</b-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        product: {
          name: "",
          price: "",
          quantity: "",
          description: ""
        }
      }
    },
    methods: {
      addProduct() {
        this.axios.post('/products/create', this.product )
          .then(res => {
            console.log(res);
          })
      }
    }
  }
</script>

<style scoped>

</style>
