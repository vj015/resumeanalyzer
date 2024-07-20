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
        @click="upload()"
        v-if="text.length === 0"
      >
        {{ "Upload Resume " }}
      </button>
      <button
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 mt-5"
        @click="analyze()"
        v-if="text.length != 0"
      >
        {{ "Analyze Resume " }}
      </button>
    </div>
    <div
      class="flex flex-col flex-wrap md:flex-row items-center justify-center"
      v-show="showRes"
    >
      <div
        id="resultpositive"
        class="text-green-600 font-mono text-2xl m-2 p-2 border-2 border-green-600"
      ></div>
      <div
        id="resultnegative"
        class="text-red-600 font-mono text-2xl m-2 border-2 border-red-600 p-2"
      ></div>
      <div
        id="resultsuggestion"
        class="text-yellow-500 font-mono text-2xl m-2 border-2 border-yellow-500 p-2"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flagMark: true,
      text: "",
      showRes: false,
    };
  },
  methods: {
    upload() {
      if (this.$refs.fileatt.files[0] === undefined) {
        console.log("File Not Found");
      } else {
        this.triggerUploadEndpoint();
      }
    },
    async triggerUploadEndpoint() {
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
          this.text = res.data.value;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async analyze() {
      if (this.text.length <= 0) {
        console.log("File Not Found");
      } else {
        try {
          this.$emit("showloader", true);
          const res = await useFetch("/api/analyze", {
            method: "POST",
            body: {
              code: this.text,
            },
          });
          if (res.pending.value === false) {
            this.$emit("showloader", false);
            this.flagMark = false;
            this.showRes = true;
            document.getElementById(
              "resultpositive"
            ).innerText = `${res.data.value[0].message.content}`;
            document.getElementById(
              "resultnegative"
            ).innerText = `${res.data.value[1].message.content}`;
            document.getElementById(
              "resultsuggestion"
            ).innerText = `${res.data.value[2].message.content}`;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
