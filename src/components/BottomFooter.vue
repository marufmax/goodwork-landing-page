<template>
  <footer class="bg-indigo-darkest text-white">
    <div class="container mx-auto flex flex-row justify-between py-16">
      <div class="w-96">
        <div class="flex flex-row items-center">
          <g-image src="~/assets/images/logo-white-bg.svg" class="h-8 w-8"/>
          <div class="text-white text-xl font-semibold pl-2 uppercase tracking-wide">Goodwork</div>
        </div>
        <div class="text-teal py-4 leading-normal font-medium">
          Goodwork is a self hosted project management and collaboration tool for all kind of teams.
        </div>
      </div>
      <div class="flex flex-row">
        <div class="px-4 mx-4 flex flex-col">
          <a href="" class="text-blue-lightest no-underline py-1 font-medium">What is Goodwork?</a>
          <a href="" class="text-blue-lightest no-underline py-1 font-medium">How It Works?</a>
          <a href="" class="text-blue-lightest no-underline py-1 font-medium">FAQ</a>
          <a href="" class="text-blue-lightest no-underline py-1 font-medium">Releases</a>
        </div>
        <div class="px-4 mx-4 flex flex-col">
          <a href="" class="text-white no-underline py-1 font-medium">Issues</a>
          <a href="" class="text-white no-underline py-1 font-medium">Changelog</a>
          <a href="" class="text-white no-underline py-1 font-medium">Join Slack</a>
          <a href="" class="text-white no-underline py-1 font-medium">Join Goodwork Project</a>
        </div>
        <div class="px-4 mx-4 flex flex-col">
          <a href="" class="text-white no-underline py-1 font-medium">Contributing</a>
          <a href="" class="text-white no-underline py-1 font-medium">Knowledge Base</a>
          <a href="" class="text-white no-underline py-1 font-medium">Developer Guide</a>
          <a href="" class="text-white no-underline py-1 font-medium">Github</a>
        </div>
      </div>
    </div>
    <div class="py-8 flex justify-center w-full border-t border-grey text-grey-lighter">
      © {{ new Date().getFullYear() }} Iluminar, All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
