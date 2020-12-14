<template>
  <div>
    <h2 v-if="jobdetailLoading">Loading...</h2>
    <h2 v-else>{{ jobdetail.positionName }}</h2>
    <Detail />
  </div>
</template>

<script>
import Detail from "../components/Detail.vue";
import { mapState, mapActions } from "vuex";

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
  computed: {
    ...mapState(["jobdetail", "jobdetailLoading"])
  },
  methods: {
    ...mapActions(["getJobdetail"])
  },
  mounted() {
    this.getJobdetail({ id: this.id });
  }
};
</script>
