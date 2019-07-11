<template>
  <nav :class="[{'shadow': shadow}, navbarBG]">
    <div class="flex flex-row justify-between items-center mx-2 md:mx-auto lg:max-w-4xl xl:max-w-6xl xxl:max-w-8xl h-16">
      <div class="flex flex-row items-center">
        <a href="/">
          <g-image src="~/assets/images/logo-white-bg.svg" class="h-10 w-10"/>
        </a>
        <a href="/" class="hidden lg:block text-gray-700 text-2xl font-semibold pl-2 uppercase no-underline">Goodwork</a>
        <a href="https://github.com/iluminar/goodwork/releases" class="hidden lg:block bg-teal-200 ml-4 px-3 py-1 rounded-full text-teal-900 text-xs font-bold tracking-wide">v0.9</a>
      </div>

      <div @click="showMobileMenu" class="pr-2 cursor-pointer lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>

      <div class="hidden lg:flex flex-row items-center justify-center text-lg text-indigo-600">
        <div class="px-4">
          <div id="product-menu" class="cursor-default">Product</div>
          <div id="product-dropdown" class="absolute pt-2">
            <div class="bg-white rounded shadow-indigo-xl py-2">
              <div class="w-2 h-2 mt-1 ml-4 bg-white absolute top-0 arrow"></div>
              <div class="flex flex-col">
                <!-- <a href="/how-it-works" class="no-underline hover:bg-indigo-500 hover:text-white text-indigo-500 px-6 py-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  How It Works
                </a> -->
                <a href="/features" class="no-underline hover:bg-indigo-500 hover:text-white text-indigo-500 px-6 py-2 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="project-diagram" class="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg>
                  Features
                </a>
                <g-link to="/demo" class="no-underline flex items-center hover:bg-indigo-500 hover:text-white text-indigo-500 px-6 py-2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tv" class="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h245.1v32h-160c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160v-32H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"></path></svg>
                  Demo
                </g-link>
                <!-- <g-link to="/manifesto" class="no-underline flex items-center hover:bg-indigo-500 hover:text-white text-indigo-500 px-6 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  Manifesto
                </g-link> -->
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 pr-8">
          <div id="developer-menu" class="cursor-default">Developers</div>
          <div id="developer-dropdown" class="absolute pt-2">
            <div class="bg-white rounded shadow-indigo-xl py-2">
              <div class="w-2 h-2 mt-1 bg-white absolute top-0 arrow"></div>
              <div class="flex flex-col">
                <g-link to="/docs/contribution-guideline" class="no-underline hover:bg-indigo-500 hover:text-white text-indigo-500 px-6 py-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  Developer Guide
                </g-link>
                <g-link to="/contributors" class="no-underline flex items-center hover:bg-indigo-500 hover:text-white text-indigo-500 px-6 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
                  Contributors
                </g-link>
              </div>
            </div>
          </div>
        </div>

        <!-- <g-link to="/sponsors" class="no-underline pl-4 pr-8 ">Sponsors</g-link> -->

        <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="no-underline px-4 py-2 rounded font-semibold bg-indigo-600 text-white">Install</a>

        <a href="https://github.com/iluminar/goodwork" class="ml-4 flex items-center border-indigo-600 border-2 rounded-full">
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github w-10 h-10 rounded-full p-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
        </a>
      </div>
    </div>

    <div v-if="mobileMenuShown" class="lg:hidden fixed w-full h-full bg-indigo-700 text-white inset-0">
      <div @click="closeMobileMenu" class="p-4 absolute right-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      </div>
      <div class="flex flex-col justify-center h-full px-6">
        <g-link to="/how-it-works" class="no-underline py-2 text-xl">How It Works</g-link>
        <g-link to="/features" class="no-underline py-2 text-xl">Features</g-link>
        <a href="https://github.com/iluminar/goodwork" class="no-underline py-2 text-xl">Developer Guide</a>
        <a href="https://github.com/iluminar/goodwork" class="no-underline py-2 text-xl">Contributors</a>
        <g-link to="/sponsors" class="no-underline py-2 text-xl">Sponsors</g-link>
        <a href="https://github.com/iluminar/goodwork" class="no-underline py-2 text-xl">Github</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navbarBG: {
      type: String
    },
    shadow: {
      type: Boolean
    }
  },
  data: () => ({
    mobileMenuShown: false
  }),
  methods: {
    showMobileMenu () {
      this.mobileMenuShown = true
    },
    closeMobileMenu () {
      this.mobileMenuShown = false
    }
  }
}
</script>

<style scoped>
#product-dropdown {
  display: none;
}

#product-menu:hover + #product-dropdown {
  display: block;
}

#product-dropdown:hover {
  display: block;
}

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
