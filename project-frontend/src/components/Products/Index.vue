<template>
  <b-container class="mt-2">
    <b-row class="mb-2">
      <b-col cols="12">
        <router-link :to="{name: 'Create'}" class="btn btn-success float-right">Create Product</router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-table striped hover :items="items" :fields="fields">
          <template #cell(action)="data">
            <b-button class="btn btn-info">View</b-button>
            <b-button class="btn btn-warning">Delete</b-button>
            {{data.item.id}}
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['name', 'quantity', 'price', 'action'],
        items: []
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        this.axios.get('/products')
          .then(res => {
            if(res.status === 200){
              this.items = res.data.data
            }
          })
      }
    }
  }
</script>
