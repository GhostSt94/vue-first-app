import { createStore } from 'vuex'

export default createStore({
  state: {
      restaurantName:'Café avec vue',
      shoppingCard:0,
      simpleMenu:[
        {
            name:'Croissant',
            image:{
                source:'./images/croissant.jpg',
                alt:"Croissant"
            },
            inStock:true,
            quantity:1,
            price:15
        },
        {
            name:'Baguette',
            image:{
                source:'./images/baguette.jpg',
                alt:"Baguette"
            },
            inStock:true,
            quantity:5,
            price:10
        },
        {
            name:'Tarte',
            image:{
                source:'./images/tarte.jpg',
                alt:"Tarte"
            },
            inStock:false,
            quantity:1,
            price:8
        },
    ],
  },
  getters:{
    copyright:state=>{
        const currentYear=new Date().getFullYear()
        return 'Copyright '+state.restaurantName+" "+currentYear;
    },
  },
  mutations: {
    addToShoppingCard(state,amount){
      state.shoppingCard+=amount;
    },
    
  },
  actions: {
    updateShoppingCard(context,amount){
      context.commit('addToShoppingCard',amount)
    },
    resetShoppingCard(context){
      context.state.shoppingCard=0
    }
  },
  modules: {
  }
})
