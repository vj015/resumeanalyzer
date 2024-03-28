<template>
  <div class="flex flex-col items-center mt-20 sm:mt-32 ml-5 mr-5">
    <div
      class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
    >
      {{
        "Unleash Your Resume and Code Quality: Dive into the Cutting-Edge Capabilities of OpenAI with"
      }}
      <span class="font-mono font-medium text-sky-500 dark:text-sky-400">
        {{ resumeGPT ? `ResumeGPT` : `CodeGPT` }}</span
      >
    </div>
    <p
      class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"
    >
      {{
        "Revolutionize Your Resume and Coding Skills: Unleash the Power of OpenAI with ResumeGPT! Plus, Empower HR with Insightful Resume Parsing for Streamlined Recruitment"
      }}
    </p>

    <div class="mt-10 w-full md:w-7/12 m-auto">
      <resumeInput v-if="resumeGPT" />
      <codeInput v-else />
    </div>
  </div>
</template>
<script>
export default {
  props: ["resumeGPT"],
};
</script>
