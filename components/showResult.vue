<template>
  <div>
    <div class="flex flex-col justify-start items-start p-3 mb-5">
      <h1 class="text-2xl md:text-4xl font-mono text-sky-500 dark:text-sky-400">
        {{ "Overview" }}
      </h1>
      <p class="text-sm md:text-base text-slate-300">
        {{ nameText }}
      </p>
    </div>
    <div
      class="h-full rounded-lg flex flex-col lg:flex-row justify-between items-center gap-3 mt-4 mb-4"
    >
      <div class="relative md:w-full">
        <div
          class="absolute -inset-2 rounded-lg bg-[conic-gradient(var(--tw-gradient-stops))] from-cyan-600 via-emerald-600 to-slate-600 opacity-50 blur-2xl"
        ></div>
        <div class="card w-full bg-base-100 shadow-xl md:w-100">
          <div class="card-body">
            <h2
              class="text-xl md:text-2xl font-mono bg-gradient-to-r from-green-500 via-teal-500 to-green-500 text-transparent bg-clip-text sticky top-3 z-10 backdrop-blur-md rounded-lg p-1 -mt-4"
            >
              {{ "Positives" }}
            </h2>
            <p
              class="text-sm md:text-base text-slate-300 text-justify ml-2 mt-2"
            >
              {{ positivesText }}
            </p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="relative md:w-full">
        <div
          class="absolute -inset-2 rounded-lg bg-[conic-gradient(var(--tw-gradient-stops))] from-red-600 via-rose-600 to-red-600 opacity-50 blur-2xl"
        ></div>
        <div class="card w-full bg-base-100 shadow-xl md:w-100">
          <div class="card-body">
            <h2
              class="text-xl md:text-2xl font-mono bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-transparent bg-clip-text sticky top-3 z-10 backdrop-blur-md rounded-lg p-1 -mt-4"
            >
              {{ "Negatives" }}
            </h2>
            <p
              class="text-sm md:text-base text-slate-300 text-justify ml-2 mt-2"
            >
              {{ negativesText }}
            </p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="relative md:w-full">
        <div
          class="absolute -inset-2 rounded-lg bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-600 via-sky-600 to-orange-600 opacity-50 blur-2xl"
        ></div>
        <div class="card w-full bg-base-100 shadow-xl md:w-100">
          <div class="card-body">
            <h2
              class="text-xl md:text-2xl font-mono bg-gradient-to-r from-teal-300 via-blue-200 to-teal-500 text-transparent bg-clip-text sticky top-3 z-10 backdrop-blur-md rounded-lg p-1 -mt-4"
            >
              {{ "Improvements" }}
            </h2>
            <p
              class="text-sm md:text-base text-slate-300 text-justify ml-2 mt-2"
            >
              {{ improvementsText }}
            </p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["nameText", "positivesText", "negativesText", "improvementsText"],
};
</script>
