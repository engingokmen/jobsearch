<template>
  <div>
    <h2>İş Listesi</h2>
    <div class="input-container">
      <input
        class="input"
        id="text-input-location"
        type="text"
        placeholder="Lokasyon"
        v-model="searchLocation"
        @focus="clearSearchKeyword"
      />
      <input
        class="input"
        id="text-input-keyword"
        type="text"
        placeholder="Anahtar Kelime"
        v-model="searchKeyword"
        @focus="clearSearchLocation"
      />
    </div>
    <Listing :searchLocation="searchLocation" :searchKeyword="searchKeyword" />
  </div>
</template>

<script>
import Listing from "../components/Listing.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    Listing
  },
  data() {
    return {
      searchLocation: null,
      searchKeyword: null
    };
  },
  computed: {
    ...mapState(["joblist"]),
    ...mapGetters(["getListFiltered"])
    // filteredData: function() {
    //   if (this.searchLocation != null) {
    //     return this.joblist.filter(item => {
    //       return (
    //         item.cityName
    //           .toLocaleLowerCase("tr")
    //           .match(this.searchLocation.toLocaleLowerCase("tr")) !== null
    //       );
    //     });
    //   } else if (this.searchKeyword != null) {
    //     return this.joblist.filter(item => {
    //       return (
    //         Object.values(item).filter(x => {
    //           return (
    //             String(x)
    //               .toLocaleLowerCase("tr")
    //               .match(this.searchKeyword.toLocaleLowerCase("tr")) !== null
    //           );
    //         }).length !== 0
    //       );
    //     });
    //   } else {
    //     return this.joblist;
    //   }
    // }
  },
  methods: {
    ...mapActions(["getJoblist"]),
    clearSearchLocation() {
      this.searchLocation = null;
    },
    clearSearchKeyword() {
      this.searchKeyword = null;
    }
  },
  mounted() {
    this.getJoblist();
  }
};
</script>
