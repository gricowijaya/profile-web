// import adapter from '@sveltejs/adapter-auto';
import adapter from 'svelte-adapter-appengine';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ nodejsRuntime: 18 })
	}
};

export default config;
