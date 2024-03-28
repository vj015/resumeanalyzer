<template>
  <div>
    <div class="fixed top-0 sm:right-0 right-12">
      <button
        class="font-mono font-medium text-sky-500 dark:text-sky-400 border-sky-500 border-2 rounded mt-5 mr-8 p-2"
        @click="enablecodeGPT()"
      >
        {{ resumeGPT ? `CodeGPT` : `ResumeGPT` }}
      </button>
    </div>
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
