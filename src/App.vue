<template>
	<full-page ref="fullpage" :options="options" id="fullpage">
		<main-views class="section" />
		<about class="section" />
	</full-page>
	<header-page />
	<preloader />
</template>

<script>
import preloader from "./views/preloader";
import MainViews from "./views/MainViews";
import about from "./views/About";
import HeaderPage from "./components/HeaderPage";
export default {
	name: "App",
	components: {
		preloader,
		MainViews,
		about,
		HeaderPage,
	},
};
</script>

<style lang="scss">
#app {
	background: 000000;
}
</style>
