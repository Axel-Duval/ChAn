<template>
    <div class="chat-container">

        <div class="user">
            <div class="form">

                <div class="tile-two">
                    <p class="number">/03</p>
                    <div class="hrr1"><hr class="hr1"></div>
                    <h2 class="subtitle-one">Informations</h2>
                    <ul class="sublist">
                        <li class="subelt text-muted-one">
                            <p class="text-muted-one">Room : <span :style="clientColor">{{room}}</span></p>
                        </li>
                        <li class="subelt text-muted-one">
                            <p class="text-muted-one">Username : <span :style="clientColor">@{{username}}</span></p>
                        </li>
                        <li class="subelt text-muted-one">
                            <p class="text-muted-one">Connected : <span :style="clientColor">{{nb_members}}</span></p>
                        </li>
                    </ul>
                </div>
                
                <div class="tile-two">
                    <p class="number">/04</p>
                    <div class="hrr1"><hr class="hr1"></div>
                    <h2 class="subtitle-one">Encryption</h2>
                    <ul class="sublist">
                        <li class="subelt text-muted-one">
                            <div class="test">
                                <input type="text" placeholder="Secret key" v-model="key" id="inputKey" :style="clientColor">
                                <button class="generate" v-on:click="newKey()">
                                    <img src="/plus.svg" alt="plus" class="plus blk-one" id="plus-one">
                                    <img src="/plus.svg" alt="plus" class="plus blk-two" id="plus-two">
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="tile-two">
                    <p class="number">/05</p>
                    <div class="hrr1"><hr class="hr1"></div>
                    <h2 class="subtitle-one">Custom</h2>
                    <ul class="sublist">
                        <li class="subelt text-muted-one">
                            <p class="text-muted-one">Color : <label :style="getInputColor" ><input type="color" v-model="color" @change="sendColor()"></label></p>
                        </li>
                    </ul>
                </div>
                <div class="tile-two">
                    <div class="leaveShare">
                        <button class="join" v-on:click.prevent="quit()" tabindex=2>Leave</button>
                        <button class="join" v-on:click.prevent="copy()" tabindex=3>Share</button>
                    </div>
                </div>           
            </div>
        </div>     
        <div class="appl">
            <div id="rectangle-20"></div>
            <div id="rectangle-21"></div>
            <div class="msg-container">
                <div class="message-area">
                    <ul>
                        <li class="text-muted-one" v-for="msg in messages" :key="msg.id">
                            <div class="msg-left" v-if="msg.username != username && !msg.name">
                                <p class="msg" :style="colorFromMessageId(msg.id)">@{{msg.username}}</p>
                                <p class="msg" :style="colorFromMessageId(msg.id)">-</p>
                                <p class="msg">{{read(msg.message)}}</p>
                                <p class="msg timestamp">{{getTime(msg.timestamp)}}</p>
                            </div>
                            <div class="msg-center" v-else-if="msg.name">
                                <p class="msg"><strong>@{{msg.username}}</strong>{{msg.message}}</p>
                            </div>
                            <div class="msg-right" v-else>
                                <p class="msg" :style="colorFromMessageId(msg.id)">@{{msg.username}}</p>
                                <p class="msg" :style="colorFromMessageId(msg.id)">-</p>
                                <p class="msg">{{read(msg.message)}}</p>
                                <p class="msg timestamp">{{getTime(msg.timestamp)}}</p>
                            </div>
                        </li>
                        <li id="focusMsg"></li>
                    </ul>
                </div>
                <div class="message-input">
                    <div class="msg-input">
                        <textarea placeholder="Aa" class="text-input text-muted-one" v-model="message" id="area" v-on:keyup.13.exact.prevent.self="sendMessage()" autofocus></textarea>
                        <img src="/send.svg" alt="sending" class="send blk-two" v-on:click.prevent="sendMessage()">
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <div class="members">
                <ul class="memberUl">
                    <li class="text-muted-one member" v-for="item in membersID" :key="item.id" :style="colorFromId(item)">@{{usernameFromId(item)}}</li>
                </ul>
            </div>
        </div>
	</div>
</template>


<script>
import io from 'socket.io-client';
import SimpleCrypto from "simple-crypto-js";

export default {
    name: 'Chat',
    data(){
        return {
            username: this.$route.params.username,
            room: this.$route.params.room,
            color: '#4169e1',
            message: '',
            key: '',
            socket: io('localhost:3000'),
            messages: [],
            members: new Array(),
            membersID: [],
            cpt: 0
        }
    },
    beforeMount() {
        window.addEventListener("beforeunload", () => {
            this.leave()
        })
        if(localStorage.getItem("color")){
            this.color = localStorage.getItem("color")
        }
        localStorage.setItem("username",this.username)
    },
    mounted() {
        this.socket.on('member_new', member => {
            this.messages.push({username: member.username, message: " joined the conversation", name:'root'})
            this.members[member.id] = member
            this.membersID.push(member.id)
        })
        this.socket.on('member_lost', data => {
            if(this.members[data.id]){
                this.messages.push({username: data.username, message: " left the conversation", name:'root'})
                delete this.members[data.id]
                this.membersID = this.membersID.filter(function(id){ return id != data.id})
            }
        })
        this.socket.on('color_update', data => {
            if(this.members[data.id]){
                this.members[data.id].color = data.color
            }
            this.$forceUpdate()
        })
        this.socket.on('message', message => {
            this.messages.push(message)
            this.scroll()
        })
        this.socket.emit('init',{username: this.username, color: this.color, room : this.room})

        setInterval(()=>{
            this.$forceUpdate()
        }, 1000 * 60)
    },
    computed : {
        nb_members : function(){
            return this.membersID.length
        },
        getInputColor : function(){
            return 'border: solid 1px ' + this.color + ';'
        },
        clientColor : function(){
            return 'color:' + this.color + ';'
        }
    },
    methods: {
        sendMessage(){
            if(this.message != "" && this.message != " "){
                this.socket.emit('message', {'username': this.username, 'room': this.room, 'message': new SimpleCrypto(this.key).encrypt(this.message), timestamp: Date.now(), id: this.socket.id + '@' + this.getCpt()})
                this.message = ""
            }
        },
        getCpt(){
            this.cpt += 1
            return this.cpt
        },
        colorFromMessageId(id){
            if(this.members[id.split('@')[0]]){
                return 'color:'+ this.members[id.split('@')[0]].color + ';'
            }
            return 'color:#363636;'

        },
        colorFromId(id){
            return 'color:'+ this.members[id].color +';'
        },
        usernameFromId(id){
            return this.members[id].username
        },
        sendColor(){
            localStorage.setItem("color",this.color)
            this.socket.emit('color_update',{color: this.color, room: this.room})
        },
        leave(){
            this.socket.emit('leave',{sure: true,room: this.room})
            this.socket.disconnect()
        },
        quit(){
            this.leave()
            this.$router.push("/")
        },
        newKey(){
            this.key = SimpleCrypto.generateRandom(64)
        },
        read(msg){
            msg = new SimpleCrypto(this.key).decrypt(msg)
            if(msg == ''){
                return 'crypted message'
            }
            else{
                return msg
            }
        },
        getTime(t){
            const interval = Date.now()-t
            let min = Math.floor((interval/1000/60) << 0)
            min == 0 ? min = 'now' : min = min + 'min ago'
            return (min)
        },
        copy() {
            navigator.permissions.query({name: "clipboard-write"}).then(result => { 
                if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.writeText('localhost:8080?room=' + this.room).then(function() {
                        window.alert('Room url copied !')
                    });
                }
            });
        },
        scroll(){
            var elmnt = document.getElementById("focusMsg");
            elmnt.scrollIntoView()
        }
    }
}
</script>