<template>
  <div>
    <div class="absolute z-n10">
      <div class="top-image"></div>
    </div>

    <navbar></navbar>

    <main>
      <section class="lg:mt-16 lg:px-32 flex flex-row w-full lg:items-center hero">
        <div class="lg:w-1/2 hidden lg:flex justify-center relative">
          <div class="w-128 h-128 z-n10 -m-32 p-16 bg-teal-lightest opacity-10 absolute rounded-full"></div>
          <img src="./../../assets/images/illustrations-1.svg" alt="" class="h-64">
        </div>
        <section class="w-full px-6 pt-8 lg:pt-0 lg:w-1/2 top flex flex-col lg:justify-center">
          <div class="pb-4 lg:pb-0 text-xl lg:text-4xl text-white lg:font-bold">
            <div>
              Sensible Approach to Work &
            </div>
            <div>
              Collaboration for Software Teams
            </div>
          </div>
          <div class="text-white lg:text-lg pt-2">
            <div class="py-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Single source of truth
            </div>
            <div class="py-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Discuss, Plan, Track and Complete
            </div>
            <div class="py-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Know what's happening without asking
            </div>
            <div class="py-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Distraction free communication
            </div>
          </div>
          <div class="my-8 flex flex-col lg:flex-row">
            <a href="" class="flex justify-center px-6 py-3 mb-4 lg:mb-0 lg:mr-4 rounded-full text-white border-white border-2 text-lg font-semibold no-underline">Get Started</a>
            <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="flex justify-center items-center bg-white px-6 py-3 rounded-full text-orange text-lg font-semibold no-underline">Install Goodwork</a>
          </div>
          <div class="text-sm text-grey-lighter">
            Open-source <a href="https://github.com/iluminar/goodwork/blob/master/LICENSE" class="text-grey-lighter">MIT Licensed.</a>
          </div>
        </section>
      </section>

      <section class="mx-auto flex justify-center my-16">
        <div class="flex flex-col items-center justify-center bg-white lg:rounded shadow py-8 px-6 lg:px-16" style="width: 60rem;">
          <div class="text-2xl font-bold text-grey-darkest">
            Why <span class="text-teal ml-2 border-b-2 border-teal">Goodwork</span> ?
          </div>
          <div class="text-grey-darker text-base pt-6 leading-loose">
            Goodwork brings you all the components required for your project to run smoothly in one place so that you have single source of truth. Instead of using a collection of tools or services which makes everything messy and hard to find important details from stuff scattered all over the place, Goodwork organizes everything in a central place where everyone in the company knows what to do, knows where things stand and find stuff without having to ask around all the time.
          </div>
        </div>
      </section>

      <section class="w-full py-16">
        <div class="container mx-auto flex flex-col items-center">
          <div class="text-2xl text-grey-darker font-semibold pb-8">
            Technologies used in Goodwork
          </div>
          <div class="flex flex-row">
            <a href="https://laravel.com" class="px-8 flex flex-col items-center no-underline">
              <g-image src="~/assets/images/laravel.svg" class="h-16 w-16 shadow-md border-2 border-grey-lightest rounded-full"/>
              <div class="text-xl text-grey-darker text-center pt-2">
                Laravel
              </div>
            </a>
            <a href="https://vuejs.org" class="px-8 flex flex-col items-center no-underline">
              <g-image src="~/assets/images/vuejs.svg" class="h-16 w-16 mx-2 shadow-md border-2 border-grey-lightest rounded-full"/>
              <div class="text-xl text-grey-darker text-center pt-2">
                VueJS
              </div>
            </a>
            <a href="https://tailwindcss.com" class="px-8 flex flex-col items-center no-underline">
              <g-image src="~/assets/images/tailwind.png" class="h-16 w-16 mx-2 shadow-md border-2 border-grey-lightest rounded-full"/>
              <div class="text-xl text-grey-darker text-center pt-2">
                TailwindCSS
              </div>
            </a>
            <a href="https://socket.io" class="px-8 flex flex-col items-center no-underline">
              <g-image src="~/assets/images/socket-io.svg" class="h-16 w-16 mx-2 shadow-md border-2 border-grey-lightest rounded-full"/>
              <div class="text-xl text-grey-darker text-center pt-2">
                Socket.io
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="w-full py-16 bg-white">
        <div class="container mx-auto flex flex-row items-center justify-between">
          <div class="flex flex-col items-center lg:w-1/2">
            <div class="text-4xl text-grey-darker pb-12">Sponsors</div>
            <div class="flex flex-row flex-wrap pb-12">
              <a href="https://www.patreon.com/bePatron?u=19641984" class="text-5xl text-grey-dark border-2 border-blue-lighter border-dashed rounded-full w-16 h-16 lg:w-32 lg:h-32 mx-4 flex items-center justify-center cursor-pointer bg-grey-lightest hover:shadow-lg hover:-mt-1" title="Become a patron - add your logo here">
                <g-image src="~/assets/images/iluminar-logo.svg" class="w-32 h-32 opacity-25 hover:opacity-100"/>
              </a>
              <a href="https://www.patreon.com/bePatron?u=19641984" v-for="x in 2" class="no-underline text-5xl text-grey-dark border-2 border-blue-lighter border-dashed rounded-full w-16 h-16 lg:w-32 lg:h-32 mx-4 flex items-center justify-center cursor-pointer bg-grey-lightest hover:shadow-lg hover:-mt-1" title="Become a patron - add your logo here">
                +
              </a>
              <div></div>
            </div>
            <div class="pb-12 px-6 text-grey-darker">
              You can support Goodwork project to keep moving by becoming a patron
            </div>
            <div>
              <a href="https://www.patreon.com/bePatron?u=19641984" target="_blank" rel="noopener noreferrer" class="px-6 py-3 text-white flex items-center no-underline rounded-full shadow" style="background-color: hsl(7.8, 77.9%, 59.2%)">
                  <svg class="w-4 h-4 mr-2" viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg"><g><circle fill="#fff" id="Oval" cx="362.589996" cy="204.589996" r="204.589996"></circle><rect fill="#000" id="Rectangle" x="0" y="0" width="100" height="545.799988"></rect></g></svg>
                Become a Patron!
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 hidden lg:flex justify-center">
            <g-image src="~/assets/images/make_it_rain.svg" class="w-128 h-128"/>
          </div>
        </div>
      </section>

      <contributors></contributors>

      <section class="w-full py-16">
        <div class="container mx-auto flex flex-col items-center">
          <div class="text-2xl lg:text-4xl text-grey-darker pb-8">Join The Community</div>
          <div class="flex flex-col lg:flex-row">
            <a href="https://join.slack.com/t/iluminar/shared_invite/enQtNDY0Mzc3NDkwOTY1LTJhZTNiYmMxZmE4NGU5MTJhODI5OWMyNjc4ZmIyNDVhODRhMGUzNDU0MmM1OGRmZjBiYWM0NjcwNWRjMDJjNTA" class="no-underline bg-white text-pink shadow px-4 py-3 mb-2 lg:mb-0 mx-2 rounded-full">Join Slack Community</a>
            <a href="#" class="no-underline bg-white text-pink shadow px-4 py-3 mx-2 rounded-full">Join Goodwork Project</a>
          </div>
        </div>
      </section>
    </main>

  <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import Navbar from './../../components/Navbar'
import Contributors from './../../components/Contributors'
import BottomFooter from './../../components/BottomFooter'
export default {
  metaInfo: {
    title: 'Homepage',
    bodyAttrs: {
      class: 'bg-blue-lightest font-display overflow-x-hidden'
    },
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-61716953-5',
        async: true
      },
      {
        innerHTML: 'window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-61716953-5");'
      }
    ]
  },
  components: {Contributors, BottomFooter, Navbar},
}
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('./../../assets/fonts/Montserrat-Regular.ttf');
  font-weight: 100;
}

body {
  font-family: 'Montserrat';
}

.top-image {
  width: 100vw;
  height: 620px;
  background-image: linear-gradient(to bottom, #13547a 0%, #80d0c7 100%);
}

.hero {
  height: 480px;
}

@media (min-width: 768px) {
  .top {
    height: 70vh;
  }

  .top-image {
    height: 880px;
  }

  .hero {
    height: 640px;
  }
}
</style>
