<template>
  <nav :class="navbarBG">
    <div class="flex flex-row justify-between items-center mx-32 h-16">
      <div class="flex flex-row items-center">
        <a href="/goodwork">
          <g-image src="~/assets/images/logo-white-bg.svg" class="h-10 w-10"/>
        </a>
        <a href="/goodwork" class="text-white text-2xl font-semibold pl-2 uppercase no-underline">Goodwork</a>
        <div class="bg-teal-dark ml-4 px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wide">v0.9</div>
      </div>
      <div class="flex flex-row items-center justify-center text-lg">
        <g-link to="/goodwork/how-it-works" class="no-underline px-4 text-white">How It Works</g-link>

        <div class="px-4">
          <div id="developer-menu" class="text-white list-reset cursor-default">Developers</div>
          <div id="developer-dropdown" class="absolute pt-2">
            <div class="bg-white rounded shadow-lg px-6 py-4">
              <div class="w-2 h-2 mt-1 bg-white absolute pin-t arrow"></div>
              <div class="flex flex-col">
                <a href="https://github.com/iluminar/goodwork/wiki/Contribution-Guideline" class="no-underline hover:text-blue-darker text-blue py-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-1"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  Developer Guide
                </a>
                <g-link to="/goodwork/contributors" class="no-underline hover:text-blue-darker text-blue py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
                  Contributors
                </g-link>
              </div>
            </div>
          </div>
        </div>


        <g-link to="/goodwork/sponsors" class="no-underline pl-4 pr-8 text-white">Sponsors</g-link>

        <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="no-underline px-4 py-3 rounded text-white font-semibold bg-blue-darker">Install</a>

        <a href="https://github.com/iluminar/goodwork" class="ml-4 flex items-center text-white border-white border-2 rounded-full">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github w-10 h-10 rounded-full p-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          <!-- <div class="p-2 font-bold text-pink text-center">420</div> -->
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navbarBG: {
      type: String
    }
  }
}
</script>

<style scoped>
#developer-dropdown {
  display: none;
}

#developer-menu:hover + #developer-dropdown {
  display: block;
}

#developer-dropdown:hover {
  display: block;
}

.arrow {
  transform: rotate(45deg);
}
</style>
