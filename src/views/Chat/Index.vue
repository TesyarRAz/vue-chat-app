<template>
  <b-container class="mt-5">
    <b-row cols-lg="2" cols="1" align-h="center">
      <b-col style="height: 500px">
        <h5 v-text="room.name"></h5>
        <div class="border p-2 h-100">
          <div class="d-flex flex-column h-100">
            <div
              class="flex-grow-1 overflow-auto"
              style="max-height: 500px"
              ref="chat-container"
            >
              <Chat v-for="chat in chats" :key="chat.id" :chat="chat" />
            </div>
            <b-input-group class="mt-2">
              <b-form-input
                placeholder="Masukan Pesan"
                v-model="chat.message"
                @keydown.enter="store()"
              />
              <b-input-group-append>
                <b-button variant="primary" @click="store()">
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
import { firestore, Timestamp } from "@/database/firestore";
import Chat from "./Chat.vue";

export default {
  data: () => ({
    room: {},
    chats: [],
    chat: {
      message: "",
      name: "",
    },
  }),
  components: {
    Chat,
  },
  watch: {
    room() {
      this.$bind("chats", this.$firestoreRefs.room.collection('chats').orderBy('createdAt'))
    },
    chats() {
      this.$nextTick(() => {
        this.setScrollPosition();
      });
    },
  },
  firestore() {
    return {
      room: firestore.collection('rooms').doc(this.$route.params.id),
    }
  },
  methods: {
    store() {
      this.$firestoreRefs.room.collection('chats').add({
        ...this.chat,
        userId: this.$store.state.user.id,
        name: this.$store.state.user.name,
        createdAt: Timestamp.now(),
      });

      this.reset();
    },
    reset() {
      Object.assign(this.chat, this.$options.data().chat);
    },
    setScrollPosition() {
      let node = this.$refs["chat-container"];
      node.scrollTop = node.scrollHeight;
    },
  },
};
</script>