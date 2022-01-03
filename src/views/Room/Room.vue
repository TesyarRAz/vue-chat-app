<template>
    <b-card role="button" @click="$router.push('/room/chat/' + room.id)">
        <span v-text="room.name"></span>
    </b-card>
</template>

<script>
export default {
    props: ['room']
}
</script>