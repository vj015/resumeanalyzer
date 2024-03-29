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
        :value="jd"
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
    <!-- <showResult
      :nameText="nameText"
      :positivesText="positivesText"
      :negativesText="negativesText"
      :improvementsText="improvementsText"
    /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // nameText: "",
      // positivesText: "",
      // negativesText: "",
      // improvementsText: "",
      jd: "",
      flagMark: true,
    };
  },
  methods: {
    analyze() {
      if (this.$refs.fileatt.files[0] === undefined) {
        console.log("File Not Found");
      } else {
        console.log("Processing ....");
        this.triggerEndpoint();
      }
    },
    async triggerEndpoint() {
      console.log("Endpoint triggering");
      const formData = new FormData();
      formData.append("resume", this.$refs.fileatt.files[0]);
      this.$emit("showloader", true);
      const res = await useFetch("/api", {
        method: "POST",
        body: formData,
      }).catch(console.error);
      console.log(res);
      if (res.pending.value === false) {
        this.$emit("showloader", false);
        this.flagMark = false;
        document.getElementById(
          "result"
        ).innerHTML = `<div> ${res.data.value.message.content} </div>`;
      }
    },
    // prepareResult(response) {
    //   const pattern = /([^\n:]+):([\s\S]*?)(?=\n[A-Z]|$)/g;

    //   // Define an object to hold the parsed data
    //   const parsedData = {};

    //   // Match the pattern in the response and extract the headings and content
    //   let match;
    //   while ((match = pattern.exec(response)) !== null) {
    //     const heading = match[1].trim();
    //     const content = match[2].trim();
    //     parsedData[heading] = content
    //       .split("\n")
    //       .map((line) => line.trim())
    //       .filter((line) => line !== "");
    //   }

    //   // Log the parsed data
    //   console.log(parsedData);
    //   this.nameText = this.getAllData(parsedData["Overview"]);
    //   this.positivesText = this.getAllData(parsedData["Positives"]);
    //   this.negativesText = this.getAllData(parsedData["Negatives"]);
    //   this.improvementsText = this.getAllData(parsedData["Enhancements"]);
    // },
    // getAllData(arr) {
    //   let allText = "";
    //   if (Array.isArray(arr) === false) {
    //     return arr;
    //   }
    //   arr.forEach((text) => {
    //     allText += text + " ";
    //   });
    //   return allText;
    // },
  },
};
</script>
