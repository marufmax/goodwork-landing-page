<template>
  <footer class="bg-indigo-800 text-white">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between py-16 px-4">
      <div class="lg:w-96">
        <div class="flex flex-row items-center">
          <g-image src="~/assets/images/logo-white-bg.svg" class="h-8 w-8"/>
          <div class="text-white text-xl font-semibold pl-2 uppercase tracking-wide">Goodwork</div>
        </div>
        <div class="text-gray-400 py-4 leading-normal font-medium">
          Goodwork is a self hosted project management and collaboration tool for all kind of teams.
        </div>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div class="lg:px-4 py-4 lg:py-0 lg:mx-8 flex flex-col border-b lg:border-0">
          <g-link to="/features" class="text-blue-100 no-underline py-1 font-medium">Features</g-link>
          <g-link to="/how-it-works" class="text-blue-100 no-underline py-1 font-medium">How It Works?</g-link>
          <g-link to="/faq" class="text-blue-100 no-underline py-1 font-medium">FAQ</g-link>
          <a href="https://github.com/iluminar/goodwork/releases" class="text-blue-100 no-underline py-1 font-medium">Releases</a>
        </div>
        <div class="lg:px-4 py-4 lg:py-0 lg:mx-8 flex flex-col border-b lg:border-0">
          <a href="https://github.com/iluminar/goodwork/issues" class="text-white no-underline py-1 font-medium">Issues</a>
          <a href="https://github.com/iluminar/goodwork/blob/master/CHANGELOG.md" class="text-white no-underline py-1 font-medium">Changelog</a>
          <a href="https://join.slack.com/t/iluminar/shared_invite/enQtNDY0Mzc3NDkwOTY1LTJhZTNiYmMxZmE4NGU5MTJhODI5OWMyNjc4ZmIyNDVhODRhMGUzNDU0MmM1OGRmZjBiYWM0NjcwNWRjMDJjNTA" class="text-white no-underline py-1 font-medium">Join Slack</a>
          <a href="https://goodworkfor.life/register/invite-link/ovCPAFpnwIhrvqUrlvynarP9HVRBC5mH" class="text-white no-underline py-1 font-medium">Join Goodwork</a>
        </div>
        <div class="lg:px-4 pt-4 lg:pt-0 lg:mx-8 flex flex-col lg:border-0">
          <a href="http://localhost:3000/docs/contribution-guideline" class="text-white no-underline py-1 font-medium">Contributing</a>
          <a href="" class="text-white no-underline py-1 font-medium">Knowledge Base</a>
          <a href="http://localhost:3000/docs/contribution-guideline" class="text-white no-underline py-1 font-medium">Developer Guide</a>
          <a href="https://github.com/iluminar/goodwork" class="text-white no-underline py-1 font-medium">Github</a>
        </div>
      </div>
    </div>
    <div class="py-8 flex justify-center w-full border-t border-gray-500 text-gray-200">
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
