<template>
  <b-card role="button" @click="create()">
    <b-form-input
      v-if="createMode"
      placeholder="Masukan Nama Room"
      v-model="room.name"
      @keydown.enter="store()"
      @blur="reset()"
      @keydown.esc="reset()"
    />
    <b-row align-h="center" v-else>
      <font-awesome-icon icon="plus" />
    </b-row>
  </b-card>
</template>

<script>
import { firestore, Timestamp }  from "@/database/firestore";

let rooms = firestore.collection("rooms")

export default {
  data: () => ({
    createMode: false,
    room: {
      name: "",
    },
  }),
  methods: {
    create() {
      this.createMode = true;
    },
    reset() {
      Object.assign(this.$data, this.$options.data());
    },
    store() {
      rooms.add({
        ...this.room,
        createdAt: Timestamp.now()
      });

      this.reset();
    },
  },
};
</script>