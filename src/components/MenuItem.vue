<script>
import { mapActions } from "vuex"

export default {
    name:'MenuItem',
    props:{
        image:{
            type:Object,
			required: true
        },
        inStock:{
            type:Boolean,
			required: true
        },
        name:{
            type:String,
			required: true
        },
        quantity:{
            type:Number,
			required: true
        },
        price:{
            type:Number,
			required: true
        }},
    data() {
        return {
            qty: this.quantity,
            onSale:false
        }
    },
    methods:{
        ...mapActions(['updateShoppingCard'])
    },
    computed:{
        generatedPrice(){
            return  this.onSale ?  (this.price*0.9).toFixed(2) : this.price;
        }
    },
    beforeMount(){
        const day=new Date().getDate();
        (day%2===0)?this.onSale=true:null;
    }
}
</script>

<template>
                <div class="card shadow">
                    <img :src="image.source" class="card-img-top" :alt="image.alt">
                    <div id="desc" class="row m-3">
                        <div class="col card-title">{{name}}</div>
                        <div v-if="inStock" class=" col text-success">In Stock</div>
                        <div v-else class="col text-danger">En rupture de stock</div>
                        <h5>{{generatedPrice}} Dh</h5>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">quantité: </span>
                            <input type="number" class="form-control" v-model.number="qty" aria-describedby="basic-addon1"> 
                          </div>
                        <button class="m-3 btn btn-primary" @click="updateShoppingCard(qty)">Ajouter au panier</button>
                    </div>
                </div>
</template>


<style lang='scss' scoped>
    // .card-body{background-color: rgb(184, 206, 214);}
    #desc{min-height: 80px;}
    img{max-height: 150px;}
</style>
