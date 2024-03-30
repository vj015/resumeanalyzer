<template>
  <div>
    <div v-if="flagMark">
      <div class="relative w-full flex flex-col">
        <div class="flex-none border-b border-green-950">
          <div class="flex items-center h-8 space-x-1.5 px-3">
            <div class="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
            <div class="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
            <div class="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
          </div>
        </div>
        <div class="relative min-h-0 flex-auto flex flex-col mb-3">
          <div class="w-full flex-auto flex min-h-0 overflow-auto">
            <div class="w-full relative flex-auto">
              <pre class="flex min-h-full text-sm leading-6">
              <textarea class="flex-auto relative block text-green-950 pt-4 pb-4 px-4 overflow-auto" v-model="val" placeholder="//Please paste your code here"></textarea>
            </pre>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        @click="analyzecode()"
      >
        {{ "Optimize Code" }}
      </button>
    </div>
    <div class="relative md:w-full mt-5 mb-20">
      <div
        class="absolute -inset-2 rounded-lg bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-600 via-emerald-600 to-slate-600 opacity-50 blur-2xl"
      ></div>
      <div
        class="card w-full bg-base-100 shadow-xl md:w-100"
        v-show="!flagMark"
      >
        <div class="card-body">
          <div class="flex flex-row justify-between">
            <h2
              class="text-xl md:text-2xl font-mono bg-gradient-to-r from-green-500 via-teal-500 to-green-500 text-transparent bg-clip-text sticky z-10 backdrop-blur-md rounded-lg"
            >
              {{ "Here is the code" }}
            </h2>
            <button
              class="text-white text-2xl cursor-pointer opacity-55"
              @click="logClicked()"
            >
              {{ isCopied ? `&#9989;` : `&#x1F4CB;` }}
            </button>
          </div>
          <div
            class="text-sm md:text-base text-justify ml-2 mt-2 text-white"
            id="codeToCopy"
          ></div>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "",
      isCopied: false,
      flagMark: true,
    };
  },
  methods: {
    analyzecode() {
      console.log("inside analyze code");
      console.log(this.val);
      if (this.val.trim().length === 0) {
        console.log("Code Not Found");
      } else {
        console.log("Triggering Api call to analyze code");
        this.triggerEndpoint();
      }
    },
    async triggerEndpoint() {
      try {
        console.log("Endpoint triggering to optimize code");
        this.$emit("showloader", true);
        const res = await useFetch("/api/code", {
          method: "POST",
          body: {
            code: this.val,
          },
        });
        console.log(res);
        if (res.pending.value === false) {
          this.$emit("showloader", false);
          this.flagMark = false;
          console.log(res.data.value.message.content);
          document.getElementById("codeToCopy").innerHTML =
            res.data.value.message.content;
        }
      } catch (error) {
        console.log(error);
        console.log("Error from triggerendpoint func");
      }
    },
    logClicked(e) {
      try {
        var str = document.getElementById("codeToCopy").innerHTML;
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.isCopied = true;
      } catch (error) {
        console.log("Inside from try catch err");
        console.log(error);
        this.isCopied = false;
      }
    },
  },
};
</script>
