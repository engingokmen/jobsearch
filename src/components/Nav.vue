<template>
  <nav aria-label="Main Navigation">
    <ul>
      <li>
        <router-link to="/jobpost">İşveren</router-link>
      </li>
      <li>
        <router-link to="/joblist">Arama</router-link>
      </li>
      <li class="dropdown">
        <!-- aria-expanded needs managed with Javascript -->
        <button
          type="button"
          class="dropdown__title"
          aria-expanded="false"
          aria-controls="just-dropdown"
        >
          Ayarlar
        </button>
        <ul class="dropdown__menu" id="just-dropdown">
          <li><a href="javascript:;">ABC1</a></li>
          <li><a href="javascript:;">ABC2</a></li>
          <li><a href="javascript:;">ABC3</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
