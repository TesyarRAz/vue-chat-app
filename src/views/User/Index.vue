<template>
  <b-container class="mt-3">
    <b-row cols-lg="2" cols="1" align-h="center">
      <b-col>
        <b-card>
          <b-card-title>Informasi User</b-card-title>

          <b-form-group>
            <label>Nama</label>
            <b-form-input v-model="user.name"></b-form-input>
          </b-form-group>
          <b-button @click="save()">
            <font-awesome-icon icon="save" />
            Save
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data: () => ({
    user: {
        name: ''
    },
  }),
  mounted() {
      this.user.name = this.$store.state.user.name
  },
  methods: {
    save() {
      this.SET_USER(this.user)
    },
    ...mapMutations('user', ['SET_USER'])
  },
};
</script>