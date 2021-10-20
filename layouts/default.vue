<template>
  <v-app style="background-color:white;"  >
 
<v-app-bar
fixed
color="white"
height="90px"
>

<v-img contain src="/img/logo.svg" height="60px">
  
</v-img>

      <v-btn
  color="#003c79"
  text
  class="underline"
  to="#home"
><h3>HOME</h3></v-btn>
<v-btn
  color="#003c79"
  text
  class="underline"
  to="#about"
><h3>ABOUT US</h3></v-btn>
<v-btn
  color="#003c79"
  text
  class="underline"
  to="#work"
><h3>OUR WORK</h3></v-btn>
<v-btn
  color="#003c79"
  text
  class="underline"
    to="#contact"
><h3>CONTACT US</h3></v-btn>

      <v-spacer></v-spacer>

      <v-btn icon color="#003c79">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

</v-app-bar>
<v-toolbar
dense
fixed
flat
color="#dedede">
<v-spacer></v-spacer>
<h5 style="color:#003c79;">RESIDENTIAL</h5>
<v-spacer></v-spacer>
<h5 style="color:#003c79;">COMMERCIAL</h5>
<v-spacer></v-spacer>
<h5 style="color:#003c79;">DEVELOPER</h5>
<v-spacer></v-spacer>
</v-toolbar>

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
      fixed: true,
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