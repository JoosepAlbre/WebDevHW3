<template>
    <div class="index">
        <Nav/>
        <section class="main-container">
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <div class="post-author">
                <span class="post-author-info">
                    <span></span>
            <img v-bind:src=post.author.avatar alt="Post author">
            <small class="author-name">{{post.author.firstname + " " + post.author.lastname}}</small>
          </span>
                <small class="date">{{post.createTime}}</small>
            </div>
            <div v-if="post.media != null" class="post-image">
                <img v-if="post.media.type == 'image'" v-bind:src=post.media.url alt="">
                <video v-if="post.media.type == 'video'" controls >
                    <source v-bind:src="post.media.url" type="video/mp4">
                </video>
            </div>
            <div class="post-title">
                <h3>{{post.text}}</h3>
            </div>
            <div class="post-actions">
                <button @click="like()" :class="{'like-button' : !isLiked, 'like-button liked' : isLiked}">
                    {{post.likes}}
                </button>
            </div>
        </div>
        </section>
    </div>
</template>


<script>
import Nav from './Nav'

export default {
    name: 'Index',
    components: {
        Nav
    },
    data() {
        return {
            isLiked: false
        }
    },
    computed: {
            posts: function () {
                return this.$store.state.posts
            }
  }, methods: {
      like: function() {
      this.isLiked = !this.isLiked;

    }
  },
    mounted: function() {    
    fetch('https://private-517bb-wad20postit.apiary-mock.com/posts', {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.$store.commit('addAllPosts', jsonData)
      console.log(this.posts)
    })
  }
}
</script>




<style scoped>


.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
}

.like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}
</style>

 