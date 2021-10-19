<template>
<v-container fluid class="pa-0 ma-0" style="background-color:white;">
  
<v-container fluid class="pa-0 ma-0" style="background-color:white;position:relative;" id="home">

<v-img 
  height="900px"
  gradient="to left, rgba(51,95,140,0.8), rgba(34,117,173,0.8)"
  :src="banner.image"
  class="banner_img"
  v-for="(banner,i) in banners"
  :key='i'
>
<v-container fluid class="d-flex flexbox justify-center" >
<v-card
min-width="380px"
max-width="800px"
class="banner_card"
flat
  color= "transparent">
  <v-card-subtitle class="banner_update"><h3>{{banner.subtitle}}</h3></v-card-subtitle>
  <v-card-title class="banner_title" ><h2>{{banner.title}}</h2></v-card-title>
  <v-card-actions>
  <a :href="banner.link" target="_blank"><v-btn outlined  class="ml-2 banner_btn">Read More</v-btn></a>
  </v-card-actions>
</v-card>
</v-container>
</v-img>
  <div class="spacer_parent">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919.76 644.34"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#003c79;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M1624,454.41c-324,95-729.62-68.34-1116.41-30C155,459.41,0,644.34,0,644.34H1919.76V172.8S1840.68,390.88,1624,454.41Z"/><path class="cls-2" d="M0,644.34V465.51s200-226.1,603-226.1c337,0,405,52,811,66C1807.76,319,1919.76,0,1919.76,0V172.8S1840.68,390.88,1624,454.41c-324,95-729.62-68.34-1116.41-30C155,459.41,0,644.34,0,644.34Z"/></g></g></svg>
</div>
  </v-container>


<v-container
 class="d-flex justify-center pt-16" id="about">
  <v-card
  width="1220"
  color=rgba(0,0,0,0)
  flat
  >
    <v-card-title class="pa-16" style="color:#003c79;justify-content:center;"><h1>ABOUT US</h1></v-card-title>
    <v-card-subtitle class="pa-16" style="color:#003c79;text-align:center;"><h3>Family owned and operated.  Our family has been in the construction business for over 13 years, so we really mean it when we say we're here to help you. </h3></v-card-subtitle>
 
      <v-card  flat  class="d-flex align-self-center flex-wrap justify-space-around" color="white">

            <v-card class="ma-2"  color="#ededed" width="384px" v-for="(employee, i) in employees" :key='i'>
              <v-img height="250px"  :src="employee.image"></v-img>
              <v-card-subtitle style="color:#06afff">{{employee.title}}</v-card-subtitle>
              <v-card-title style="color:#00285f">{{employee.name}}</v-card-title>
            </v-card>

      </v-card>
  </v-card>
</v-container>

<v-container fluid class="pa-0 ma-0" style="transform:scaleX(-1);position:relative;">

   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1919.76 724.34"><defs><style>
     .cls-11{fill:#dedede;}.cls-21{fill:#01afff;}.cls-31{fill:#003c79;}
     </style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
       <path class="cls-11" d="M0,724.34V545.51s200-226.1,603-226.1c337,0,405,52,811,66C1807.76,399,1919.76,80,1919.76,80V252.8S1840.68,470.88,1624,534.41c-324,95-729.62-68.34-1116.41-30C155,539.41,0,724.34,0,724.34Z"/>
       <path class="cls-21" d="M0,684.34V505.51s200-226.1,603-226.1c337,0,405,52,811,66C1807.76,359,1919.76,40,1919.76,40V212.8S1840.68,430.88,1624,494.41c-324,95-729.62-68.34-1116.41-30C155,499.41,0,684.34,0,684.34Z"/>
       <path class="cls-31" d="M0,644.34V465.51s200-226.1,603-226.1c337,0,405,52,811,66C1807.76,319,1919.76,0,1919.76,0V172.8S1840.68,390.88,1624,454.41c-324,95-729.62-68.34-1116.41-30C155,459.41,0,644.34,0,644.34Z"/>
   </g></g></svg>

</v-container>

<v-container  id="work" class="pa-16" style="position:relative;">
  <v-row class="pa-16">
    <v-col >
      <v-card
      flat
      color="white">
        <v-card-title style="justify-content:center;color:#00285f;"><h1>OUR WORK</h1></v-card-title>
      </v-card>
    </v-col>
  </v-row>

  <v-card flat class="d-flex flex-wrap justify-space-around" color=rgba(0,0,0,0)>

      <v-card min-width="280px" max-width="384px" color="#ededed" class="pa-2 ma-4" v-for="(address, i) in addresses" :key='i' >
        <a target="_blank" :href=address.link><v-img height="250px" :src="address.image"></v-img></a>
      <v-card-title style="color:#00285f;" class="pa-0 mt-4">{{ address.address}}</v-card-title>
      <v-card-subtitle style="color:#00285f;" class="pa-0 mt-0 mb-2">{{ address.city}}, {{address.state}} {{address.zip}}</v-card-subtitle>
      <v-card-text style="color:#00285f;">{{address.info.substring(0,170) + '...'}}</v-card-text>
      <v-row class="pt-2">
        <v-col>
          <v-chip color="blue">{{address.beds}} beds</v-chip>
          <v-chip color="blue">{{address.baths}} baths</v-chip>
          <v-chip color="blue">{{address.footage}} sq ft.</v-chip>
        </v-col>
      </v-row>
      </v-card>

  </v-card>
</v-container>

  <div class="spacer_last">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 711.06"><defs>
  <style>
  .cls-5{fill:#ebebeb;}.cls-6{fill:#06afff;}.cls-7{fill:#01afff;}.cls-8{fill:#003c79;}
  </style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-5" d="M.24,644.34V465.51s200-226.1,603-226.1c337,0,405,52,811,66C1808,319,1920,0,1920,0V172.8s-79.07,218.08-295.75,281.61c-324,95-729.62-68.34-1116.42-30C155.24,459.41.24,644.34.24,644.34Z"/>
    <path class="cls-6" d="M1920,711.06v-1.89l0,0V252.78h0V212.92l0-.12V40s-112,319-505.75,305.41c-406-14-474-66-811-66-403,0-603,226.1-603,226.1v39.93l0,0V709.74L0,710v1.1Z"/>
    <path class="cls-7" d="M.24,684.34V505.51s200-226.1,603-226.1c337,0,405,52,811,66C1808,359,1920,40,1920,40V212.8s-79.07,218.08-295.75,281.61c-324,95-729.62-68.34-1116.42-30C155.24,499.41.24,684.34.24,684.34Z"/>
    <path class="cls-8" d="M960,464.06c426.8,0,793.66,101.58,954.74,247H1920V252.78h0V80s-112,319-505.76,305.41c-406-14-474-66-811-66-403,0-603,226.1-603,226.1V711.06H5.26C166.34,565.64,533.2,464.06,960,464.06Z"/>
</g></g></svg>
  </div>


<v-container fluid id="contact" class="pa-0 ma-0" style="background-color:#06afff;">
  <v-row class="pt-14"></v-row>
  <v-row class="pa-8" style="justify-content:center;"> <h1 style="z-index:1;">CONTACT US</h1></v-row>
  <v-row>
    <v-col class="pa-16">
      <v-card class="pa-8" flat style="background-color:#06afff;">
        <v-img contain width="600" height="310" class="float-right mb-2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.083512181256!2d-98.16599768496809!3d26.291392583399123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a224e1be081d%3A0x1b1e200551dbde08!2s1108%20S%20Closner%20Blvd%2C%20Edinburg%2C%20TX%2078539!5e0!3m2!1sen!2sus!4v1634616077565!5m2!1sen!2sus"  width="100%" height="100%" style="float:right;border:0;" allowfullscreen="" loading="lazy"></iframe></v-img>
        <v-card-text style="text-align:right;float:right;" class="pa-0 ma-0">
         <span class="contact_info"> 1108 South Closner Boulevard<br>
          Edinburg, TX, United States<br>
          +1 (956) 467-7702 <br>
          ngonzalezcbb@gmail.com</span>
        </v-card-text>
      </v-card>
    </v-col >
    <v-col >
      <v-form v-model="valid"  ref="form" class="pa-16">
         <v-text-field
         color="white"
            v-model="name"
            :rules="nameRules"
            :counter="50"
            label="Full Name"
            required
         ></v-text-field>
          <v-text-field
         color="white"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
         ></v-text-field>
          <v-text-field
         color="white"
            v-model="subject"
            :rules="subjectRules"
            label="Subject"
            :counter="300"
            required
         ></v-text-field>
                 <v-textarea
                 ref="message"
                 v-model="message"
                 flat
                 required
                 outlined
                 background-color="#06afff"
          label="Message"
        ></v-textarea>

             <v-btn
      class="mr-4"
      outlined
      @click="submit"
    >
      submit
    </v-btn>
        <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-btn outlined @click="clear">
      clear
    </v-btn>
      </v-form>
    </v-col>
  </v-row>
  <v-row class="pb-16"></v-row><v-row class="pb-16"></v-row>
</v-container>

</v-container>
</template>
<script>
import employees from "../static/src/employees.json";
import addresses from "../static/src/addresses.json";
import banner from "../static/src/banner.json";
  export default {

    data:()=>({
        snackbar: false,
        text: 'My timeout is set to 2000.',
        timeout: 2000,
        banners:banner,
        addresses:addresses,
        employees:employees,
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 30 || 'Name must be less than 30 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        subject: '',
        subjectRules: [
          v => !!v || 'Subject is required',
          v => v.length <= 300 || 'Name must be less than 300 characters',
        ],
        message: '',
    }),
    methods:{
      submit () {
      if (this.$refs.form.validate()){
        if(this.message ==''){
        this.text = "Please fill out a message!";
        this.snackbar = true;
        this.$refs.message.focus();
        }else{
        this.text = "Your message has been sent";
        this.snackbar = true;
        this.clear();
        this.$refs.form.resetValidation();
        }
      }
        
      },
      clear () {
        
        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
      },
    },
    
  }
</script>

<style>
@import 'https://use.typekit.net/qse4mmy.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';


.spacer_parent{
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  overflow:hidden;
  pointer-events: none;
}

.spacer_last{
  width:100%;
  overflow:hidden;
}
svg{
  position:relative;
  display: block;
  width: calc(100% - 1.3px);
  transform: scale(1.1);
}

*{
  font-family: iskra,sans-serif;
  /* font-family: semplicitapro,sans-serif; */
  }
h1{
  font-family: semplicitapro,sans-serif;
  font-size:4rem;
}
h2{
  font-family: semplicitapro,sans-serif;
  font-size:3rem;
}
h3{
  font-family: semplicitapro,sans-serif;
  font-size:1.1rem;
}
#contact *{
  font-family: semplicitapro,sans-serif;
}
.banner_update{
  font-family: iskra,sans-serif;
  font-size:1.5rem;
  color:white!important;
}
.banner_title{
  font-family: semplicitapro,sans-serif;
  line-height: 3rem;
  font-size:2.75rem;
}
.banner_btn{
  font-family: semplicitapro,sans-serif!important;
  font-size:1.1rem;
}
.banner_card{
  width: 70%;
  padding-top:120px;
}
.banner_img{width:100%;}
.main_separate{
  top:230px;
  position:absolute;
  width:100%;
  pointer-events: none;
}
.main_separate{
  z-index: 0;
}
.contact_info{
  font-size:1.3rem;
  color:white!important;
}

@media screen and (max-width: 600px) {
  /* html{
    min-width:600px;
  }
  h1{
    font-size: 3rem;
  }
  .banner_title{
    width:400px;
  }
  h2{
    font-size: 2rem;
  }
  h3{font-size:0.8rem;} */
}
.before-enter{opacity: 0;transform: translateX(100px);transition: all 5s ease-out;}
.enter{opacity: 1;transform:translateX(0px);}
</style>