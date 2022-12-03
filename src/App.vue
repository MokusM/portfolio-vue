<template>
	<div class="main-wrapper" :class="{ load: loader }">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<main-views class="section" />
			<about class="section" />
		</full-page>
		<header-page />
	</div>
	<preloader :class="{ load: loader }" />
</template>

<script>
import preloader from './views/preloader';
import MainViews from './views/MainViews';
import about from './views/About';
import HeaderPage from './components/HeaderPage';

import { ref } from 'vue';
export default {
	name: 'App',
	components: {
		preloader,
		MainViews,
		about,
		HeaderPage,
	},

	setup() {
		const loader = ref(false);

		setTimeout(() => {
			loader.value = true;
		}, 4000);

		return {
			loader,
		};
	},
};
</script>

<style lang="scss">
.main-wrapper:not(.load) {
	visibility: hidden;
}
</style>
