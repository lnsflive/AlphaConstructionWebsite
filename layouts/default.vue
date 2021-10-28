<template>
  <v-app style="background-color:white;"  >
 
<v-app-bar
fixed
color="white"
height="100%"
>

<v-img contain src="/img/logo.svg" height="60px">
  
</v-img>
 
<v-btn
  color="#003c79"
  text
  class="underline d-none d-md-flex"
  v-for="(link,i) in links"
  :key="i"
  :to=link.link
><h3>{{link.title}}</h3></v-btn>


      <v-spacer></v-spacer>

       <v-app-bar-nav-icon class="d-sm-flex d-md-none" @click.stop="drawer = !drawer" style="color:black;"></v-app-bar-nav-icon>
    

    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      width="50vw"
      height="100vh"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        v-model="group"
        >
          <v-list-item 
          link
            v-for="(link,i) in links"
            :key="i"
            :to=link.link
          >
            <v-list-item-title class="text-center">{{link.title}}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


</v-app-bar>


    <v-main class="pb-16">
        <Nuxt />
    </v-main>

<v-footer
    padless
    fixed
    color=rgba(255,0,0,0)
    style="margin-top:100px;"
  >
  <div class="" style="width:100%;display:block;text-align:center;position:absolute;bottom:0;">
<img src="/img/house.svg" alt="Footer Icon" style="width:250px;margin-bottom:49px;">
  </div>
    <v-card
      flat
      tile
      class="white--text text-center"
      style="width:100%;"
      color="#003c79"
    >
      <v-card-text
      class="pa-0">
        <v-btn
          v-for="(icon,i) in icons"
          :key="i"
          class="mx-1 white--text "
          icon
          target="_blank"
          :href=icon.url
        >
          <v-icon size="24px">
            {{ icon.type }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pa-0 footer_text">
        2021 Copyright &copy; Alpha Construction Co. | All Rights Reserved
      </v-card-text>

      <!-- <v-divider></v-divider>

      <v-card-text class="white--text">
       <strong>Created by Jaime Gonzalez Jr</strong>
      </v-card-text> -->
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {


  data () {

    return {
      clipped: false,
      drawer: false,
      group:null,
      fixed: true,
      links:[
        {title:"Home",link:"#home"},
        {title:"About Us",link:"#about"},
        {title:"Our Work",link:"#work"},
        {title:"Contact Us",link:"#contact"}
      ],
      icons: [
        
        {type:'mdi-facebook',url:"https://www.facebook.com/constructionbyalpha/"},
        {type:'mdi-twitter',url:""},
        {type:'mdi-linkedin',url:""},
        {type:'mdi-instagram',url:""},
        
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  watch:{
    group(){
      this.drawer = false;
    },
  }
}
</script>

<style scoped>
h3{
  font-size: 1.1rem;
}
.underline:hover{
  text-decoration: underline;
}
.footer_text{
  font-family: semplicitapro,sans-serif!important;
}

</style>