<template>
  <v-card>
    <v-container class="fluid grid-list-md">
      <v-layout class="row wrap">
        <v-flex v-for="product in products" xs6 :key="product.title">
          <router-link :to="`product/${product.id}`">
           <Game :product="product">
            <v-card-actions>
                <v-btn icon>
                  <v-icon>
                    mdi-heart
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>
                    mdi-share
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>
                  mdi-cart-plus
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </Game>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<!-- <v-layout
    column
    justify-center
    align-center
  >
        <h1>Hello World</h1>
        <li v-for="(product, key) in products" :key="key">
          <ul>
            {{product.title}}
          </ul>
        </li>
  </v-layout> -->

<script>
import { db } from '../plugins/firebase';
import Game from '@/components/game';

export default {
  components: {
    Game
  },
  data() {
    return {
      products: []
    }
  },
  firestore() {
    return {
      products: db.collection('products')
    }
  },
  computed: {
    myProducts() {
      this.$store.dispatch('setProduct', this.products);
      console.log(this.$store.getters.products);
      return this.products;
    }
  }
};
</script>
<style >


  .media:hover {
    opacity: 0.4;
  }
</style>
