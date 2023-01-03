<template>
  <div class="relative bg-neutral-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Reactivities</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-neutral-600 p-2 text-gray-300 hover:bg-neutral-700 hover:text-gray-500 focus:outline-none"
            aria-expanded="false"
            @click="showMobileMenu = false"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <a
            href="#"
            class="text-base font-medium text-gray-200 hover:text-gray-400"
            >Home</a
          >
          <a
            href="#"
            class="text-base font-medium text-gray-200 hover:text-gray-400"
            >Item 2</a
          ><a
            href="#"
            class="text-base font-medium text-gray-200 hover:text-gray-400"
            >Item 3</a
          >
        </nav>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            class="whitespace-nowrap text-base font-medium text-gray-200 hover:text-gray-300"
            >Sign in</a
          >
          <a
            href="#"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >Sign up</a
          >
        </div>
      </div>
    </div>

    <div
      :class="{ hidden: showMobileMenu }"
      class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
    >
      <div
        class="divide-y-2 divide-neutral-700 rounded-lg bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-neutral-600 p-2 text-gray-300 hover:bg-neutral-700 hover:text-gray-500 focus:outline-none"
                @click="showMobileMenu = true"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="space-y-6 py-6 px-5">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="#"
              class="text-base font-medium text-gray-200 hover:text-gray-400"
              >Item 1</a
            >
            <a
              href="#"
              class="text-base font-medium text-gray-200 hover:text-gray-400"
              >Item 2</a
            >
            <a
              href="#"
              class="text-base font-medium text-gray-200 hover:text-gray-400"
              >Item 3</a
            >
          </div>
          <div>
            <a
              href="#"
              class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >Sign up</a
            >
            <p class="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="#" class="text-indigo-600 hover:text-indigo-500"
                >Sign in</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showMobileMenu: false,
    };
  },
});
</script>

<style scoped></style>

<style scoped></style>

<style lang="scss" scoped></style>
