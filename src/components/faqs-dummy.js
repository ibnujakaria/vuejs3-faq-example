export default [
  {
    title: 'What are the advantages/differences of Vue Native over React Native',
    detail: `Vue Native is layer based on top of React Native. The template definition is based on Vuejs which is then converted into suitable react native code. With this, we are able to take advantage of the existing react native ecosystem where a lot of third party libraries and support are available.`,
    expand: false,
  },
  {
    title: 'Can I reuse vuejs web app code?',
    detail: `No. You cannot, since vue-native does not make use of html tags. It’s not possible to reuse the vuejs web app code.`,
    expand: false,
    mouseHover: true,
  },
  {
    title: 'How to Register?',
    detail: `
      <p>All the react-native libraries are supported by vue-native. You can look into third party libraries section for some of the examples.</p>

      <section class="flex gap-4 mt-4">
        <a 
          href="#"
          class="bg-blue-400 text-white px-8 gap-2 py-2 rounded-full flex items-center"
        >
          Register <i class="ri-arrow-right-s-line text-xl"></i>
        </a>
        <a 
          href="#"
          class="bg-blue-400 text-white px-8 gap-2 py-2 rounded-full flex items-center"
        >
          Login <i class="ri-arrow-right-s-line text-xl"></i>
        </a>
      </section>

      <section class="mt-4">
        <p>Requirements:</p>

        <ul>
          <li>User must aggree with our terms of services</li>
          <li>User should be a human</li>
          <li>User is at least 18 years old</li>
        </ul>
      </section>
    `,
    expand: true,
  },
  {
    title: 'What about third party libraries for vue-native',
    detail: `All the react-native libraries are supported by vue-native. You can look into third party libraries section for some of the examples.`,
    expand: false,
  },
]