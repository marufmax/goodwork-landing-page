<template>
  <section class="">
    <div class="container mx-auto py-16 flex flex-row items-center">
      <div>
        <g-image src="~/assets/images/developer_activity.svg" class="w-128 h-128"/>
      </div>

      <div>
        <div class="text-4xl text-grey-darker flex justify-center items-center pb-4">
          <div>Contributors</div>
          <div class="bg-indigo flex items-center justify-center align-bottom w-10 h-10 ml-2 rounded-full text-white text-base font-semibold">58+</div>
        </div>

        <div class="flex flex-col items-center pb-4">
          <div class="border-2 border-dashed mb-2 py-2 px-16">
            <div class="pb-2 text-xl text-grey-darker">Core Members</div>
            <div class="flex flex-row flex-wrap justify-center">
              <a :href="contributor.html_url" v-for="contributor of coreMembers" class="m-2 bg-white p-2 rounded-full flex items-center shadow-md" :title="contributor.login">
                  <img :src="contributor.avatar_url" alt="" class="w-16 h-16 rounded-full shadow-lg">
              </a>
            </div>
          </div>
          <div class="flex flex-row flex-wrap justify-center pb-2">
            <a :href="contributor.html_url" v-if="contributor.contributions > 9" v-for="contributor of contributors" class="m-2 bg-white p-1 rounded-full flex items-center shadow-md" :title="contributor.login">
                <img :src="contributor.avatar_url" alt="" class="w-12 h-12 rounded-full shadow-lg">
            </a>
          </div>
          <div class="flex flex-row flex-wrap justify-center pb-2 w-128">
            <a :href="contributor.html_url" v-if="contributor.contributions < 10 && contributor.contributions > 4" v-for="contributor of contributors" class="m-2 rounded-full flex items-center shadow-md" :title="contributor.login">
              <img :src="contributor.avatar_url" alt="" class="w-8 h-8 rounded-full">
            </a>
          </div>
          <!-- <div class="flex flex-row flex-wrap justify-center w-128">
            <a :href="contributor.html_url" v-if="contributor.contributions < 4" v-for="contributor of contributors" class="m-2 flex items-center" :title="contributor.login">
              <img :src="contributor.avatar_url" alt="" class="w-8 h-8 rounded-full">
            </a>
          </div> -->
        </div>

        <div class="flex justify-center">
          <a href="https://github.com/iluminar/goodwork/graphs/contributors" class="text-blue px-2">All Contributors</a>
          <div class="border-r border-grey-dark"></div>
          <a href="https://github.com/iluminar/goodwork/wiki/Contribution-Guideline" class="text-blue px-2">Start Contributing</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    collaborators: [
      'Hasnayeen'
    ],
    coreMembers: [],
    contributors: []
  }),
  created () {
    axios.get('https://api.github.com/repos/iluminar/goodwork/contributors')
      .then((response) => {
        this.contributors = response.data.filter(contributor => this.collaborators.indexOf(contributor.login) === -1)
        this.coreMembers = response.data.filter(contributor => this.collaborators.indexOf(contributor.login) !== -1)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style>

</style>
