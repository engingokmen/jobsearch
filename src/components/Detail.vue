<template>
  <section v-if="error">
    <p>
      Bir sorunla karşılaşıldı, lütfen daha sonra tekrar deneyiniz.
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else class="detail">
      <ul>
        <li
          class="list-item"
          v-for="info in data &&
            Object.entries(data).filter(
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
          <a :href="`https://maps.google.com/?q=${get(data, 'address')}`">
            <address>{{ get(data, "address") }}</address>
          </a>
        </li>
        <li class="list-item">
          <a
            :href="
              `tel:${get(data, 'contactPhone.countryCallingCode')}${get(
                data,
                'contactPhone.areaCode'
              )}${get(data, 'contactPhone.number')}`
            "
          >
            {{ get(data, "contactPhone.countryCallingCode") }}
            {{ get(data, "contactPhone.areaCode") }}
            {{ get(data, "contactPhone.number") }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { screenSizes } from "../helper/constants";
import { get } from "lodash";
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
