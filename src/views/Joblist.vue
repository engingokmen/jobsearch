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
    <Listing :error="error" :loading="loading" :list="filteredData" />
  </div>
</template>

<script>
import Listing from "../components/Listing.vue";
export default {
  components: {
    Listing
  },
  data() {
    return {
      loading: false,
      error: null,
      items: null,
      searchLocation: null,
      searchKeyword: null
    };
  },
  computed: {
    filteredData: function() {
      if (this.searchLocation != null) {
        return this.items.filter(item => {
          return (
            item.cityName
              .toLocaleLowerCase("tr")
              .match(this.searchLocation.toLocaleLowerCase("tr")) !== null
          );
        });
      } else if (this.searchKeyword != null) {
        return this.items.filter(item => {
          return (
            Object.values(item).filter(x => {
              return (
                String(x)
                  .toLocaleLowerCase("tr")
                  .match(this.searchKeyword.toLocaleLowerCase("tr")) !== null
              );
            }).length !== 0
          );
        });
      } else {
        return this.items;
      }
    }
  },
  methods: {
    clearSearchLocation() {
      this.searchLocation = null;
    },
    clearSearchKeyword() {
      this.searchKeyword = null;
    }
  },
  mounted() {
    fetch("/api/joblist")
      .then(res => {
        this.loading = true;
        return res.json();
      })
      .then(data => {
        this.items = data.items;
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
