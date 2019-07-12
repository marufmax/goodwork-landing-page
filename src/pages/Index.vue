<template>
  <div>
    <div class="absolute z-n10">
      <div class="top-image"></div>
    </div>

    <navbar></navbar>

    <main>
      <section class="px-4 lg:px-0 lg:my-12 lg:max-w-4xl xl:max-w-6xl lg:mx-auto xxl:max-w-8xl flex flex-row w-full lg:items-center hero text-gray-700">
        <div class="lg:w-1/2 lg:mr-8 hidden lg:flex justify-center relative rounded shadow-2xl">
          <g-image src="./../assets/images/hero-image.png" />
        </div>
        <section class="w-full lg:pl-16 pt-8 lg:pt-0 lg:w-1/2 top flex flex-col lg:justify-center">
          <div class="pb-4 lg:pb-0 text-xl lg:text-3xl xl:text-4xl lg:font-bold">
            <div>
              Build Software Faster.
            </div>
            <div>
              No Stress Required.
            </div>
          </div>
          <div class=" lg:text-lg pt-2">
            <div class="bg-teal-200 inline-block p-2 rounded text-teal-800 font-semibold mb-4">Goodwork is not an app, it's a sensible style of work.</div>
            <div class="">
              Adopting <span class="text-indigo-600">healthier work style</span> enables your team to build
            </div>
            <div class="">
              <span class="text-indigo-600">quality software</span> without sacrificing <span class="text-indigo-600">mental health</span>.
            </div>
            <div class="">
              Why? Because your team deserves it.
            </div>
          </div>
          <div class="mt-8 mb-4 flex flex-col lg:flex-row">
            <!-- <a href="" class="flex justify-center px-6 py-3 mb-4 lg:mb-0 lg:mr-4 rounded-full border-teal-700 text-teal-700 border-2 text-lg font-semibold no-underline">Get Started</a> -->
            <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="flex justify-center items-center bg-teal-700 px-6 py-3 rounded-full text-white text-lg hover:bg-teal-500 hover:shadow-2xl font-semibold no-underline">Install Goodwork</a>
            <a href="https://github.com/iluminar/goodwork" class="lg:ml-4 mt-4 lg:mt-0 flex items-center justify-center border-teal-700 lg:border-white border-2 rounded-full">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github w-12 h-12 text-teal-700 rounded-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
          </div>
          <div class="text-sm text-gray-700">
            Open source <a href="https://github.com/iluminar/goodwork/blob/master/LICENSE" class="text-gray-700 underline">MIT Licensed</a>.
          </div>
        </section>
      </section>

      <section class="mx-auto flex justify-center lg:bg-teal-500 py-16">
        <div class="flex flex-col items-center justify-center bg-white lg:rounded lg:shadow-2xl py-8 px-4 lg:px-16 lg:max-w-4xl">
          <div class="text-2xl font-bold text-gray-700">
            Why <span class="text-teal-600 ml-2 border-b-2 border-teal-600">Goodwork</span> ?
          </div>
          <div class="text-gray-700 text-base pt-6 leading-loose">
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Single source of truth. Replace the need for multiple apps.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Enable deep work by ensuring distraction free communication.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Know what's happening without asking. Forget status meeting.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Get insights on what features to build and when to ship.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Track progress of task and see who is stuck and needs help.
              </div>
            </div>
            <div class="py-1 flex items-start lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lg:w-4 w-8 mr-2 pt-3 lg:pt-0 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <div>
                Know your team members current mental state & condition.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-white">
        <div class="container mx-auto px-4 lg:px-0 lg:flex flex-row items-center justify-between">
          <div class="lg:w-1/2 hidden lg:flex justify-center">
            <g-image src="~/assets/images/open-source.svg" class="w-128 h-128"/>
          </div>
          <div class="flex flex-col items-start lg:w-1/2">
            <div class="text-3xl lg:text-4xl text-gray-700 pb-4">Technology behind Goodwork</div>
            <div class="text-gray-700">
              Goodwork is built using popular robust open source technology that
              are battle tested and trusted by millions.
            </div>
            <div class="flex justify-between w-full lg:w-128 text-blue-700 lg:text-2xl pt-4">
              <div class="flex flex-col">
                <a href="https://www.laravel.com" class="no-underline">
                  Laravel
                </a>
                <a href="https://www.docker.com/" class="no-underline">
                  Docker
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://vuejs.org/" class="no-underline">
                  VueJS
                </a>
                <a href="https://socket.io/" class="no-underline">
                  Socket.io
                </a>
              </div>
              <div class="flex flex-col">
                <a href="https://tailwindcss.com/" class="no-underline">
                  TailwindCSS
                </a>
                <a href="https://www.mysql.com/" class="no-underline">
                  MySQL
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-16 bg-white">
        <div class="container mx-auto flex flex-row items-center justify-between">
          <div class="flex flex-col items-center lg:w-1/2">
            <div class="text-4xl text-gray-700 pb-12">Sponsors</div>
            <div class="flex flex-row flex-wrap pb-12">
              <a href="https://www.patreon.com/bePatron?u=19641984" class="text-5xl text-gray-600 border-2 border-blue-200 border-dashed rounded-full w-16 h-16 lg:w-32 lg:h-32 mx-4 flex items-center justify-center cursor-pointer bg-gray-100 hover:shadow-lg hover:-mt-1" title="Become a patron - add your logo here">
                <g-image src="~/assets/images/iluminar-logo.svg" class="w-32 h-32 opacity-25 hover:opacity-100"/>
              </a>
              <a href="https://www.patreon.com/bePatron?u=19641984" v-for="x in 2" class="no-underline text-5xl text-gray-600 border-2 border-blue-200 border-dashed rounded-full w-16 h-16 lg:w-32 lg:h-32 mx-4 flex items-center justify-center cursor-pointer bg-gray-100 hover:shadow-lg hover:-mt-1" title="Become a patron - add your logo here">
                +
              </a>
              <div></div>
            </div>
            <div class="pb-12 px-6 text-gray-700">
              You can support Goodwork project to keep moving by becoming a patron
            </div>
            <div>
              <a href="https://www.patreon.com/bePatron?u=19641984" target="_blank" rel="noopener noreferrer" class="px-6 py-3  flex items-center no-underline rounded-full shadow" style="background-color: hsl(7.8, 77.9%, 59.2%)">
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

      <section class="py-16 bg-blue-100">
        <div class="container mx-auto">
          <div class="flex justify-center pb-8 text-teal-800 text-3xl font-semibold">
            Pricing
          </div>
          <div class="flex justify-center">
            <div class="w-96 bg-white rounded-l-lg shadow flex flex-col items-center justify-between p-8">
              <div class="text-teal-700 uppercase font-semibold">
                Self Hosted
              </div>
              <div class="text-5xl text-gray-700">
                Free<span class="text-base">/Forever</span>
              </div>
              <div class="text-center text-gray-700 py-4 px-8">
                For teams who wants to maintain everything by themselves.
              </div>
              <div>
                <a href="https://github.com/iluminar/goodwork/wiki/Installation" class="flex justify-center items-center border-teal-700 border-2 px-6 py-3 rounded-full text-teal-700 text-lg hover:shadow-2xl font-semibold no-underline">Install Goodwork</a>
              </div>
            </div>
            <div class="w-96 bg-white rounded-r-lg shadow flex flex-col items-center justify-between p-8">
              <div class="text-indigo-600 uppercase font-semibold">
                Managed Solution
              </div>
              <div class="text-5xl text-gray-700">
                Custom
              </div>
              <div class="text-center text-gray-700 py-4 px-8">
                Get your own individual hosted solution with full privacy of your data.
              </div>
              <div>
                <a href="mailto:searching.nehal@gmail.com" class="flex justify-center items-center border-indigo-600 border-2 px-6 py-3 rounded-full text-indigo-600 text-lg hover:shadow-2xl font-semibold no-underline">Send a Query</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-16">
        <div class="container mx-auto flex flex-col items-center">
          <div class="text-2xl lg:text-4xl text-gray-700 pb-8">Join The Community</div>
          <div class="flex flex-col lg:flex-row">
            <a href="https://join.slack.com/t/iluminar/shared_invite/enQtNDY0Mzc3NDkwOTY1LTJhZTNiYmMxZmE4NGU5MTJhODI5OWMyNjc4ZmIyNDVhODRhMGUzNDU0MmM1OGRmZjBiYWM0NjcwNWRjMDJjNTA" class="no-underline bg-white text-pink-700 shadow px-4 py-3 mb-2 lg:mb-0 mx-2 rounded-full">Join Slack Community</a>
            <a href="https://goodworkfor.life/register/invite-link/ovCPAFpnwIhrvqUrlvynarP9HVRBC5mH" class="no-underline bg-white text-pink-700 shadow px-4 py-3 mx-2 rounded-full">Join Goodwork Project</a>
          </div>
        </div>
      </section>
    </main>

  <bottom-footer></bottom-footer>
  </div>
</template>

<page-query>
query {
  allDocs {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<script>
import Navbar from './../components/Navbar'
import Contributors from './../components/Contributors'
import BottomFooter from './../components/BottomFooter'
export default {
  metaInfo: {
    title: 'Homepage',
    bodyAttrs: {
      class: 'font-display overflow-x-hidden'
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
  src: url('./../assets/fonts/Montserrat-Regular.ttf');
  font-weight: 100;
}

body {
  font-family: 'Montserrat';
}

.top-image {
  width: 100vw;
  height: 620px;
  /* background-image: linear-gradient(to bottom, #13547a 0%, #80d0c7 100%); */
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
