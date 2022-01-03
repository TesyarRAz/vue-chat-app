<template>
  <b-container class="mt-5">
    <b-row cols-lg="2" cols="1" align-h="center">
      <b-col style="height: 500px">
        <h5 v-text="room.name"></h5>
        <div class="border p-2 h-100">
          <div class="d-flex flex-column h-100">
            <div class="flex-grow-1 overflow-auto" style="max-height: 500px">
                <Chat v-for="chat in chats" :key="chat.id" :chat="chat"/>
            </div>
            <b-input-group class="mt-2">
              <b-form-input placeholder="Masukan Pesan" v-model="chat.message" @keydown.enter="store()" />
              <b-input-group-append>
                <b-button variant="primary">
                  <font-awesome-icon icon="paper-plane" />
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firestore from '@/database/firestore'
import Chat from './Chat.vue'

let rooms = firestore.collection('rooms')
let room = id => rooms.doc(id)
let chats = id => room(id).collection('chats')

export default {
  data: () => ({
    room: {},
    chats: [],
    chat: {
      message: '',
      name: ''
    }
  }),
  components: {
    Chat
  },
  created() {
    this.$bind('room', room(this.$route.params.id))
    this.$bind('chats', chats(this.$route.params.id))
  },
  methods: {
    store() {
      chats(this.room.id).add(this.chat)

      this.reset()
    },
    reset() {
      Object.assign(this.chat, this.$options.data().chat)
    }
  }
}
</script>