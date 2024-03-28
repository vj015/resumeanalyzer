<template>
  <div class="flex flex-col items-center md:items-end">
    <button
      class="font-mono font-medium text-sky-500 dark:text-sky-400 border-sky-500 border-2 rounded mt-5 mr-1 p-2 w-4/12 md:w-2/12"
      @click="enablecodeGPT()"
    >
      {{ resumeGPT ? `CodeGPT` : `ResumeGPT` }}
    </button>
    <NuxtPage :resumeGPT="resumeGPT" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      resumeGPT: true,
    };
  },
  methods: {
    enablecodeGPT() {
      this.resumeGPT = !this.resumeGPT;
    },
  },
};
</script>
