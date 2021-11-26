<template>
  <div id="app">
        <h1 class="text-center">{{restaurantName}}</h1>
        <hr class="mb-5">
        <aside class="m-3 px-3 border-end">
            <h4>Shopping Card</h4>
            <p>{{shoppingCard}}</p>
            <button class="btn btn-warning" @click='resetShoppingCard'>vider card</button>
        </aside>
        <div class="row my-5 justify-content-center">
          <h3 class="text-center">Menu</h3>
            <MenuItem class="col-md-3 m-1"
              v-for="item in simpleMenu"
              :name="item.name"
              :image="item.image"
              :inStock="item.inStock"
              :quantity="item.quantity"
              :price="item.price"
              :key="item.name"
            />
                
        </div>
        
        <footer class="card-footer">{{copyright}}</footer>
    </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'
import { mapState,mapGetters,mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    MenuItem
  },
  // data(){
  //   return{
        
  //   }
  // },
  computed:{
    ...mapGetters(['copyright']),
    ...mapState({
			restaurantName: "restaurantName",
			shoppingCard: "shoppingCard",
			simpleMenu: "simpleMenu"
		})
  },
  methods:{
    ...mapActions(['resetShoppingCard'])
  }
}
</script>

<style>
aside{float: left;}
</style>

