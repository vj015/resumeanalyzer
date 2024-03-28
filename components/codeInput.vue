<template>
  <div>
    <div>
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
              <textarea class="flex-auto relative block text-green-950 pt-4 pb-4 px-4 overflow-auto" :value="val" />
            </pre>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      >
        {{ "Optimize Code" }}
      </button>
    </div>
    <div class="relative md:w-full mt-5 mb-20">
      <div
        class="absolute -inset-2 rounded-lg bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-600 via-emerald-600 to-slate-600 opacity-50 blur-2xl"
      ></div>
      <div class="card w-full bg-base-100 shadow-xl md:w-100">
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
            class="text-sm md:text-base text-slate-300 text-justify ml-2 mt-2"
            id="codeToCopy"
          >
            {{
              "Sanctus nonumy et justo erat et vero amet, clita sed diam duo dolor diam sea. Stet sed sed et elitr eos, gubergren kasd takimata accusam magna et et diam diam diam. Nonumy stet tempor tempor et et. No clita nonumy et et amet dolore gubergren. Voluptua lorem dolor sed dolore accusam, aliquyam dolores ipsum et labore no, et clita elitr vero sanctus eos est kasd, diam tempor eos clita at. Magna sit gubergren lorem sed. Amet sed magna erat duo ipsum vero. Magna duo dolor diam ea dolore. Kasd magna ipsum ipsum sanctus vero elitr sed lorem stet, ea justo rebum stet erat dolore tempor elitr, magna et erat consetetur rebum clita ipsum amet kasd, eirmod ut no ea sed aliquyam sit ipsum takimata, et sit rebum ut ea tempor, tempor ut tempor clita ut. Kasd dolore magna ea duo sanctus aliquyam aliquyam ipsum, lorem ut erat clita sadipscing amet stet invidunt diam at. Nonumy est dolores eos voluptua sit sit erat duo justo. Clita dolor no sanctus dolor et, dolor ut sanctus magna sanctus sit, amet tempor diam takimata nonumy. Ut et nonumy sit lorem est stet, clita dolor tempor ipsum tempor rebum, duo amet et eirmod et dolores."
            }}
          </div>
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
      val: "//Paste your code here",
      isCopied: false,
    };
  },
  methods: {
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
