<template>
  <section v-if="joblistError">
    <p>
      Bir sorunla karşılaşıldı, lütfen daha sonra tekrar deneyiniz.
    </p>
  </section>

  <section v-else>
    <div v-if="joblistLoading">Loading...</div>
    <table v-else>
      <tr>
        <th>Şirket</th>
        <th>Pozisyon</th>
        <th v-if="screenWidth > scrSizes.xs">Şehir</th>
      </tr>
      <tr
        v-for="item in getListFiltered(searchLocation, searchKeyword)"
        :key="item.id"
      >
        <td>{{ item.companyName }}</td>
        <td>
          <router-link
            :to="{
              name: 'jobdetail',
              params: { id: item.jobId }
            }"
          >
            {{ item.positionName }}
          </router-link>
        </td>
        <td v-if="screenWidth > scrSizes.xs">{{ item.cityName }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import { screenSizes } from "../helper/constants";
import { get } from "lodash";
import { mapState, mapGetters } from "vuex";
export default {
  props: ["searchLocation", "searchKeyword"],
  data() {
    return {
      scrSizes: screenSizes,
      screenWidth: window.screen.width
    };
  },
  computed: {
    ...mapState(["joblist", "joblistLoading", "joblistError"]),
    ...mapGetters(["getListFiltered"])
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.screen.width;
    },
    get
  }
};
</script>
