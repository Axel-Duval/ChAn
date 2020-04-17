<template>
  <div id="bck-image">

    <nav>
      <ul class="navlist">
        <li class="naveltLi"><a href="#" class="navelt active">HOME</a></li>
        <li class="naveltLi"><a href="#" class="navelt">ABOUT</a></li>
        <li class="naveltLi"><a href="https://github.com/Axel-Duval" class="navelt">CODE SOURCE</a></li>
      </ul>
    </nav>

    <div class="h100">

      <div id="rectangle-1"></div>

      <svg width="3vw" height="40vh" id="line-1">
          <line x1="2vw" y1="0" x2="2vw" y2="40vh" class="line"/>
      </svg>

      <svg width="3vw" height="50vh" id="line-2">
          <line x1="2vw" y1="0" x2="2vw" y2="50vh" class="line"/>
      </svg>

      <div class="div-title">
        <h1 class="heading-one">Chat Anywhere</h1>
        <p class="text-muted-one">Nulla ornare risus in ante molestie, ut finibus est aliquet. Morbi vel odio porttitor, consequat orci ut, fringilla velit. Vivamus porttitor libero sed neque condimentum, sit amet mollis lacus auctor. In tincidunt magna est, sed eleifend diam eleifend quis. Quisque ornare pretium purus a accumsan. Maecenas elit ante, luctus eget justo porta, varius tempor mauris.</p>
      </div>

      <div class="tile" id="t1">
          <p class="number">/01</p>
          <div class="hrr1"><hr class="hr1"></div>
          <h2 class="subtitle-one">Anonymous</h2>
          <ul class="sublist">
              <li class="subelt text-muted-one">No signup</li>
              <li class="subelt text-muted-one">No backup</li>
              <li class="subelt text-muted-one">No trace</li>
          </ul>
      </div>
      

      <div class="tile-reverse" id="t2">
        <p class="number">/02</p>
        <div class="hrr2"><hr class="hr2"></div>
        <h2 class="subtitle-one">Free</h2>
        <ul class="sublist">
            <li class="subelt-reverse text-muted-one">No fee</li>
            <li class="subelt-reverse text-muted-one">No ads</li>
        </ul>
      </div>

      <button class="down" v-on:click="scroll()">
        <img src="arrow.svg" alt="arrow" class="arrow blk-one" id="arrow-one">
        <img src="arrow.svg" alt="arrow" class="arrow blk-two" id="arrow-two">
      </button>

      
    </div>
    

    
    
    <div class="h100 middle" id="focal">

      <div id="rectangle-6"></div>

      <svg width="3vw" height="30vh" id="line-3">
          <line x1="2vw" y1="0" x2="2vw" y2="30vh" class="line"/>
      </svg>

      <div class="wrapper">
        <div class="form container">

          <div id="rectangle-3"></div>
          <div id="rectangle-4"></div>
          <div id="rectangle-5"></div>

          <input type="text" v-model="username" placeholder="username" class="username" tabindex=1 :style="usernameColor">
          <div class="inline">
            <input type="text" v-model="room" placeholder="room" class="room" tabindex=2 :style="roomColor">            
            <button class="generate" v-on:click="newRoom()">
              <img src="plus.svg" alt="plus" class="plus blk-one" id="plus-one">
              <img src="plus.svg" alt="plus" class="plus blk-two" id="plus-two">
            </button>
          </div>
          <button class="join" v-on:click="join()" tabindex=3>Join</button>
        </div>
        <svg width="8vw" height="30vh">
          <line x1="4vw" y1="0" x2="4vw" y2="30vh" id="divider-1"/>
          <line x1="4vw" y1="16vh" x2="4vw" y2="24vh" id="divider-2"/>
        </svg>
        <div class="container">
          <h2 class="heading-three">Let's go !</h2>
          <p class="text-muted-one">Nulla ornare risus in ante molestie, ut finibus est aliquet. Morbi vel odio porttitor, consequat orci ut, fringilla velit. Vivamus porttitor libero sed neque condimentum, sit amet mollis lacus auctor. In tincidunt magna est, sed eleifend diam eleifend quis. Quisque ornare pretium purus a accumsan. Maecenas elit ante, luctus ege.</p>
        </div>
      </div>
    </div>

    <div class="h80">

      <div id="rectangle-7"></div>
      <div id="rectangle-8"></div>

      <div class="tile" id="t3">
          <p class="number">v1.0</p>
          <div class="hrr1"><hr class="hr1"></div>
          <h2 class="subtitle-one">Application</h2>
          <ul class="sublist">
              <li class="subelt text-muted-one">Open source</li>
              <li class="subelt text-muted-one">Active developers</li>
              <li class="subelt text-muted-one">Big community</li>
          </ul>
      </div>

      <div class="tile-reverse" id="t4">
        <p class="number">2020</p>
        <div class="hrr2"><hr class="hr2"></div>
        <h2 class="subtitle-one">New features</h2>
        <ul class="sublist">
            <li class="subelt-reverse text-muted-one">Message encryption</li>
            <li class="subelt-reverse text-muted-one">Room hexaCode</li>
        </ul>
      </div>

    </div>
    <footer>

      <div class="technos">
        <img src="vue.png" alt="Vue.js logo" class="logo">
        <div class="tile">
          <h2 class="subtitle-one">Vue.js</h2>
          <ul class="sublist">
              <li class="subelt text-muted-one">Open source</li>
              <li class="subelt text-muted-one">Frontend framework</li>
          </ul>
        </div>
      </div>

      <div class="technos">
        <img src="socket.png" alt="Socket.io logo" class="logo">
        <div class="tile">
          <h2 class="subtitle-one">Socket.io</h2>
          <ul class="sublist">
              <li class="subelt text-muted-one">Javascript library</li>
              <li class="subelt text-muted-one">Live communication</li>
          </ul>
        </div>
      </div>

      <div class="technos">
        <img src="node.png" alt="Node.js logo" class="logo">
        <div class="tile">
          <h2 class="subtitle-one">Node.js</h2>
          <ul class="sublist">
              <li class="subelt text-muted-one">Open source</li>
              <li class="subelt text-muted-one">Sockets manager</li>
          </ul>
        </div>
      </div>

      <div class="break"></div>
      <p class="text-muted-two"> Logos : Flaticon   |   ChatAnywhere &#8480; 2020-2021   |   Picture : Unsplash(Rendiansyah Nugroho)</p>
    </footer>
  </div>
</template>

<script>

function getUrlVars(){
  let vars = {}
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(m, key, value) => {
    vars[key] = value
  })
  return vars
}

export default {
  name: 'Home',
  data() {
    return {
      username : null,
      usernameValid : false,
      room: null,
      roomValid : false,
      color : 'royalblue'
    }
  },
  watch:{
    username(newUsername){
      if(newUsername.match(/^[a-zA-Z0-9]{3,15}$/)){
        this.usernameValid = true
      }
      else{
        this.usernameValid = false
      }
    },
    room(newRoom){
      if(newRoom.match(/^[a-fA-F0-9]{12}$/)){
        this.roomValid = true
      }
      else{
        this.roomValid = false
      }
    }
  },
  computed : {
    usernameColor: function () {
      if(this.usernameValid){
        return 'color:'+this.color+';'
      }
      else{
        return ''
      }
    },
    roomColor: function () {
      if(this.roomValid){
        return 'color:'+this.color+';'
      }
      else{
        return ''
      }
    }
  },
  mounted(){
    if(window.location.href.indexOf('room') > -1){
      this.room = getUrlVars()['room']
      this.scroll()
    }
    if(localStorage.getItem("color")){
      this.color = localStorage.getItem("color")
    }
    if(localStorage.getItem("username")){
      this.username = localStorage.getItem("username")
    }
  },
  methods: {
    newRoom(){
      this.room = this.randHex(12)
    },
    randHex(len) {
      let maxlen = 8
      let min = Math.pow(16,Math.min(len,maxlen)-1) 
      let max = Math.pow(16,Math.min(len,maxlen)) - 1
      let n = Math.floor( Math.random() * (max-min+1) ) + min
      let r = n.toString(16)
      while ( r.length < len ) {
        r = r + this.randHex( len - maxlen );
      }
      return r;
    },
    join(){
      if(this.usernameValid && this.roomValid){
        this.$router.push("/chat/" + this.username + '/' + this.room)
      }
    },
    scroll(){
      var elmnt = document.getElementById("focal");
      elmnt.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>
