<template>
  <div>
    <h2 v-if="data == null">Loading...</h2>
    <h2 v-else>{{ data.positionName }}</h2>
    <Detail :data="data" />
  </div>
</template>

<script>
import Detail from "../components/Detail.vue";
export default {
  components: {
    Detail
  },
  data() {
    return {
      id: this.$route.params.id,
      data: null
    };
  },
  mounted() {
    fetch(`/api/jobdetail/${this.id}`)
      .then(res => {
        this.loading = true;
        return res.json();
      })
      .then(data => {
        this.data = data;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>
