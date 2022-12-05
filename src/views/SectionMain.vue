<template>
	<div class="section section-main" data-anchor="main">
		<div class="section-bg"></div>
		<div class="wrapper">
			<h1>Привіт!</h1>
			<p>Мене звати Микола Мойсеєв.<br />Я Junior Frond-end розробник команди SlicePlanet.</p>
			<div class="next-slide-wrap"><a href="#about" class="next-slide">Детальніше</a></div>
		</div>
		<div class="ball" ref="ball"></div>
	</div>
</template>
<script>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

export default {
	setup() {
		const ball = ref(null);

		onMounted(() => {
			gsap.set(ball.value, { xPercent: -50, yPercent: -50 });
		});

		function moveCircle(e) {
			gsap.to(ball.value, 0.3, {
				left: e.pageX,
				top: e.pageY,
			});
		}

		window.addEventListener('mousemove', (e) => {
			moveCircle(e);
		});

		return {
			ball,
		};
	},
};
</script>
<style land="scss" scoped>
.ball {
	width: 50px;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	background: #fff;
	box-shadow: 0 0 80px 110px white;
	border-radius: 50%;
	pointer-events: none;
}
.section-main {
	background-image: url(../assets/img/section-main.jpg);
}
</style>
