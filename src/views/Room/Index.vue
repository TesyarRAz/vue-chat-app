<template>
  <b-container class="mt-3">
    <b-row cols="1" cols-md="2" cols-lg="3">
      <b-col v-for="room in rooms" :key="room.id" class="mb-2">
        <Room :room="room"/>
      </b-col>
      <b-col class="mb-2">
        <NewRoom/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Room from './Room.vue'
import NewRoom from './NewRoom.vue'
import { firestore } from '@/database/firestore'

export default {
  data: () => ({
    rooms: []
  }),
  components: {
    Room,
    NewRoom
  },
  firestore: {
    rooms: firestore.collection('rooms').orderBy('createdAt', 'desc')
  }
}
</script>