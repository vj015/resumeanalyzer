<template>
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
</template>
<script>
export default {
  data() {
    return {
      val: "//Paste your code here",
    };
  },
};
</script>
