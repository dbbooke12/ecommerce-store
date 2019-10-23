<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <h1>Hello World</h1>
        <li v-for="(product, key) in products" :key="key">
          <ul>
            {{product.title}}
          </ul>
        </li>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from '../plugins/firebase'

export default {
  components: {
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
  }
};
</script>
