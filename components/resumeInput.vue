<template>
  <div>
    <div v-if="flagMark">
      <input
        type="file"
        class="file-input file-input-bordered file-input-primary md:w-5/6 w-11/12 cursor-pointer font-mono font-medium text-sky-500 dark:text-sky-400"
        accept="application/pdf"
        ref="fileatt"
      />
      <input
        type="text"
        placeholder="Job Discription(Optional)"
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center mt-5"
      />
      <button
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 mt-5"
        @click="analyze()"
      >
        {{ "Analyze Resume " }}
      </button>
    </div>
    <div id="result" class="text-white font-mono text-2xl"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flagMark: true,
    };
  },
  methods: {
    analyze() {
      if (this.$refs.fileatt.files[0] === undefined) {
        console.log("File Not Found");
      } else {
        this.triggerEndpoint();
      }
    },
    async triggerEndpoint() {
      try {
        const formData = new FormData();
        formData.append("resume", this.$refs.fileatt.files[0]);
        this.$emit("showloader", true);
        const res = await useFetch("/api", {
          method: "POST",
          body: formData,
        });
        if (res.pending.value === false) {
          this.$emit("showloader", false);
          this.flagMark = false;
          document.getElementById(
            "result"
          ).innerHTML = `<div> ${res.data.value.message.content} </div>`;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
