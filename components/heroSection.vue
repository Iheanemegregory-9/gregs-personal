<template>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                <div class="flex justify-center xl:w-1/2">
                    <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover rounded-full"
                        src="/greg.jpg"
                        alt="Greg's selfie">
                </div>

                <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                    <h2 class="text-2xl font-semibold tracking-tight text-green-500 xl:text-3xl">
                        Chibuzor Gregory Iheaneme | AI Automation Expert & Full Stack Developer
                    </h2>

                    <p class="block max-w-2xl mt-4 text-gray-950">Tech-driven professional transitioning from technical support to full-stack development, with 4 years of experience in the web hosting industry. Passionate about problem-solving,
                        continuous learning, and contributing to impactful web solutions in a dynamic team setting. </p>

                    <div class="mt-6 sm:-mx-2">
                        <NuxtLink to="https://docs.google.com/document/d/1DG3NqaIpx5ix9sFjtJTwev5SR-_ooHwroJC_cqoN1u8/edit?usp=sharing" target="_blank"
                            class="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <span class="mx-2">
                                Download CV
                            </span>
                        </NuxtLink>

                        <NuxtLink to="#projects"
                            class="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-green-500 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-green-600 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <span class="mx-2">
                                See Projects
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
    </div>
</template>