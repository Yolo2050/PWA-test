<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="border-gray-200 bg-white dark:bg-gray-900">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <a
        href="http://feinschule.co.kr/"
        class="flex items-center"
      >
        <img
          src="/assets/icons/2023logo10.jpg"
          class="mr-3 h-8"
          alt="Feinschule Logo"
        />
        <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >Feinschule</span
        >
      </a>
      <div
        id="navbar-default"
        class="hidden w-full md:block md:w-auto"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900"
        >
          <li>
            <RouterLink
              to="/"
              class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >About</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
