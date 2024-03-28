<template>
  <div class="relative w-full flex flex-col">
    <div class="flex-none border-b border-slate-500/30">
      <div class="flex items-center h-8 space-x-1.5 px-3">
        <div class="w-2.5 h-2.5 bg-red-600 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
        <div class="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
      </div>
    </div>
    <div class="relative min-h-0 flex-auto flex flex-col">
      <div class="w-full flex-auto flex min-h-0 overflow-auto">
        <div class="w-full relative flex-auto">
          <pre class="flex min-h-full text-sm leading-6">
              <code class="flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                {{ "Hi I am a" }}
              </code>
            </pre>
        </div>
      </div>
    </div>
  </div>
</template>
