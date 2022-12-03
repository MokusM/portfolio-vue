<template>
	<svg class="g-symbol" v-bind="$attrs">
		<use v-bind:xlink:href="require(`@img/symbol-sprite.svg`) + `#${name}`" />
	</svg>
</template>
<script>
export default {
	name: 'GSymbol',
	props: ['name'],
};
</script>

<style scoped></style>
