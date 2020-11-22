<template>
<div class="browse">
    <Nav/>
    <section class="main-container">
        <div class="profile-feed">
            <div class="profile" v-for="profile in profiles" v-bind:key="profile.id">
                <img v-bind:src =profile.avatar alt = "Post autohor">
                <p>{{profile.firstname + " " + profile.lastname}}</p>
                <button @click="followed = !followed" class="follow-button" v-show="followed">
                    Follow
                </button>
                <button @click="followed = !followed" class="followed-button" v-show="!followed">
                    Followed
                </button>
            </div>
        </div>

    </section>
</div>
</template>


<script>
import Nav from './Nav'


export default {
    name: 'Browse',
    components: {
    Nav
  },
  data: function(){
      return{
          followed: true
      }
  },
  computed: {
            profiles: function () {
                return this.$store.state.profiles
            }
  },
   mounted: function() {    
    fetch('https://private-anon-8206ed6edc-wad20postit.apiary-mock.com/profiles', {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.$store.commit('addAllProfiles', jsonData)
      console.log(this.profiles)
    })
  }
  
}
</script>

<style scoped>
    .profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
}

.followed-button{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>