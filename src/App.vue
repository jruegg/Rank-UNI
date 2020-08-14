<template>
  <v-app>
    <v-app-bar app color="teal" dense>
      <v-btn icon to="/home">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>

      <v-toolbar-title>Rank-UNI</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
