<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-if="!mySession" @click="login">Login</v-btn>
        <v-btn v-else @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { db } from '@/plugins/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  created() {
    this.$store.dispatch('setSession')
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-shopping',
          title: 'Checkout',
          to: '/Checkout'
        }
      ],
      miniVariant: false,
      title: 'Video Game Store'
    }
  },
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log('signin');
        })
        .catch(function(error) {
          console.log('error');
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('sign out');
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
}
</script>
