<template>
  <section v-if="jobdetailError">
    <p>
      Bir sorunla karşılaşıldı, lütfen daha sonra tekrar deneyiniz.
    </p>
  </section>

  <section v-else>
    <div v-if="jobdetailLoading">Loading...</div>
    <div v-else class="detail">
      <ul>
        <li
          class="list-item"
          v-for="info in jobdetail &&
            Object.entries(jobdetail).filter(
              x =>
                x[0] !== 'contactPhone' &&
                x[0] !== 'imageUrl' &&
                x[0] !== 'address'
            )"
          :key="info.key"
        >
          {{ info[0] }}: {{ info[1] }}
        </li>
        <li class="list-item">
          <a :href="`https://maps.google.com/?q=${get(jobdetail, 'address')}`">
            <address>{{ get(jobdetail, "address") }}</address>
          </a>
        </li>
        <li class="list-item">
          <a
            :href="
              `tel:${get(jobdetail, 'contactPhone.countryCallingCode')}${get(
                jobdetail,
                'contactPhone.areaCode'
              )}${get(jobdetail, 'contactPhone.number')}`
            "
          >
            {{ get(jobdetail, "contactPhone.countryCallingCode") }}
            {{ get(jobdetail, "contactPhone.areaCode") }}
            {{ get(jobdetail, "contactPhone.number") }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { screenSizes } from "../helper/constants";
import { get } from "lodash";
import { mapState } from "vuex";

export default {
  props: {
    error: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      scrSizes: screenSizes,
      screenWidth: window.screen.width
    };
  },
  computed: {
    ...mapState(["jobdetail", "jobdetailLoading", "jobdetailError"])
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
