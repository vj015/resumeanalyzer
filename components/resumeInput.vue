<template>
  <div>
    <div>
      <input
        type="file"
        class="file-input file-input-bordered file-input-primary md:w-5/6 w-11/12 cursor-pointer font-mono font-medium text-sky-500 dark:text-sky-400"
        accept="application/pdf"
      />
      <input
        type="text"
        :value="jd"
        placeholder="Job Discription(Optional)"
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center mt-5"
      />
      <button
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 mt-5"
      >
        {{ "Analyze Resume " }}
      </button>
    </div>
    <showResult
      :name="name"
      :nameText="nameText"
      :positives="positives"
      :positivesText="positivesText"
      :negatives="negatives"
      :negativesText="negativesText"
      :improvements="improvements"
      :improvementsText="improvementsText"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Name",
      nameText:
        "Ipsum vero lorem et eos ipsum dolores erat sanctus voluptua. Et eos lorem sea stet tempor. Ea sed voluptua sanctus diam aliquyam at accusam, amet lorem invidunt clita magna at eirmod, vero duo diam sit ut labore ea amet gubergren. Accusam duo sed duo magna et justo erat. Invidunt diam rebum kasd labore et nonumy, at sit sadipscing et erat sit takimata. Rebum sit et magna magna lorem. No kasd clita eirmod erat ut sea. Sit rebum erat et no.",
      positives: "Positives",
      positivesText:
        "Ipsum vero lorem et eos ipsum dolores erat sanctus voluptua. Et eos lorem sea stet tempor. Ea sed voluptua sanctus diam aliquyam at accusam, amet lorem invidunt clita magna at eirmod, vero duo diam sit ut labore ea amet gubergren. Accusam duo sed duo magna et justo erat. Invidunt diam rebum kasd labore et nonumy, at sit sadipscing et erat sit takimata. Rebum sit et magna magna lorem. No kasd clita eirmod erat ut sea. Sit rebum erat et no.",
      negatives: "Negatives",
      negativesText:
        "Ipsum vero lorem et eos ipsum dolores erat sanctus voluptua. Et eos lorem sea stet tempor. Ea sed voluptua sanctus diam aliquyam at accusam, amet lorem invidunt clita magna at eirmod, vero duo diam sit ut labore ea amet gubergren. Accusam duo sed duo magna et justo erat. Invidunt diam rebum kasd labore et nonumy, at sit sadipscing et erat sit takimata. Rebum sit et magna magna lorem. No kasd clita eirmod erat ut sea. Sit rebum erat et no.",
      improvements: "Improvements",
      improvementsText:
        "Ipsum vero lorem et eos ipsum dolores erat sanctus voluptua. Et eos lorem sea stet tempor. Ea sed voluptua sanctus diam aliquyam at accusam, amet lorem invidunt clita magna at eirmod, vero duo diam sit ut labore ea amet gubergren. Accusam duo sed duo magna et justo erat. Invidunt diam rebum kasd labore et nonumy, at sit sadipscing et erat sit takimata. Rebum sit et magna magna lorem. No kasd clita eirmod erat ut sea. Sit rebum erat et no.",
      jd: "",
    };
  },
};
</script>
