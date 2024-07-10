<template>
  <div
    class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
  >
    <p class="font-bold underline">Error!</p>
    <p>
      API Quota of Openai keys have expired! Please reach
      <span class="font-extrabold"><a href="https://vipuljain.in/">Vipul</a></span> to view the recorded demo of
      this application!
    </p>
  </div>
  <div class="relative flex flex-col items-center md:items-end mb-3">
    <button
      class="font-mono font-medium text-sky-500 dark:text-sky-400 border-sky-500 border-2 rounded mt-5 mr-1 p-2 w-4/12 md:w-2/12"
      @click="enablecodeGPT()"
    >
      {{ resumeGPT ? `CodeGPT` : `ResumeGPT` }}
    </button>
    <NuxtPage @showloader="showloader" :resumeGPT="resumeGPT" />
  </div>
  <div
    class="absolute text-white left-1/4 sm:left-1/3 md:left-1/2 top-1/2 flex flex-col items-center justify-center"
    v-if="loading"
  >
    <Loader />
  </div>
</template>
<script>
export default {
  data() {
    return {
      resumeGPT: true,
      loading: false,
    };
  },
  methods: {
    enablecodeGPT() {
      this.resumeGPT = !this.resumeGPT;
    },
    showloader(val) {
      this.loading = val;
    },
  },
};
</script>
