<template>
	<div class="main-wrapper" :class="{ load: loader }">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<section-main />
			<section-about />
		</full-page>
		<header-page v-model="draw" />
		<main-nav v-show="draw" />
	</div>
	<preloader :class="{ load: loader }" />
</template>

<script>
import preloader from './views/preloader';
import SectionMain from './views/SectionMain';
import SectionAbout from './views/SectionAbout';
import HeaderPage from './components/HeaderPage';
import FullPageNav from './components/FullPageNav';
import MainNav from './components/MainNav';

import { ref } from 'vue';
export default {
	name: 'App',
	components: {
		preloader,
		SectionMain,
		SectionAbout,
		HeaderPage,
		FullPageNav,
		MainNav,
	},

	setup() {
		const loader = ref(false);
		const draw = ref(false);

		const options = {
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			//anchors: ['main', 'about', 'tecnhology', 'paint', 'study', 'portfolio', 'contact'],
			anchors: ['main', 'about'],
			menu: '#js-menu',
			scrollingSpeed: 400,
			navigation: !0,
		};

		setTimeout(() => {
			loader.value = true;
		}, 4000);

		return {
			loader,
			options,
			draw,
		};
	},
};
</script>

<style lang="scss"></style>
