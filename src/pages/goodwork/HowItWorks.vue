<template>
<div>
  <navbar navbarBG="bg-white" shadow="true"></navbar>
  <div class="container mx-auto lg:max-w-6xl">
    <div class="flex flex-col justify-center items-start text-gray-800">
      <div class="text-5xl text-teal-600 pt-16 pb-8">How Goodwork works.</div>
      <div class="text-xl leading-normal">
        Goodwork is very opinionated in how a team should build softwares. While you can use Goodwork however way you like,
        but goodwork is built in a certain way following few key principles.
      </div>
      <!-- <div class="flex flex-col w-full">
        <div class="py-16">
          <div class="text-2xl pb-4">The Ideal Team</div>
          <div>
            Too many voices make it noisy. Depending on context you need right kind of people. Keep it to 3-5 members.
          </div>
        </div>
        <div class="py-16">
          <div class="text-2xl pb-4">Discussion Board</div>
          <div>
            Discuss about new features and ideas with your teams.
          </div>
        </div>
        <div class="py-16 self-end w-1/2">
          <div class="text-2xl pb-4">Task Board</div>
          <div>
            Breakdwon features in task and sub-task and assigned them to appropriate member.
          </div>
        </div>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './../../components/Navbar'
import BottomFooter from './../../components/BottomFooter'
export default {
  metaInfo: {
    title: 'How It Works',
    bodyAttrs: {
      class: 'bg-indigo-100 font-display overflow-x-hidden'
    }
  },
  components: {BottomFooter, Navbar},
}
</script>

<style>
.illustration {
  width: 64rem;
}
</style>
