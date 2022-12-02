<template>
	<div class="preloader" :class="{ load: loader }">
		<div class="preloader__center" ref="logo">
			<div class="preloader__logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.5 306.6" role="presentation" x="0px" y="0px" xml:space="preserve">
					<polygon fill="#FFFFFF" points="110.8,90.8 0,1.3 0.1,217.2 30.7,195.3 30.9,65.9 111,130.7 222,41 222,1.3 " class="logo-top"></polygon>
					<polygon fill="#FFFFFF" points="191.3,105.3 191.1,234.8 111.1,169.9 0,259.7 0,299.3 111.2,209.8 222,299.3 221.9,83.5 " class="logo-bottom"></polygon>
					<g>
						<defs><rect id="SVGID_1_" width="299.5" height="306.6"></rect></defs>
						<clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" style="overflow: visible"></use></clipPath>
						<g class="st1">
							<path fill="#FFFFFF" d="M238.2,254.5h46.1v1.6h-42.8l29.9,20.5v1l-29.9,20.5h42.8v1.6h-46.1v-1.3l31.1-21.3l-31.1-21.4V254.5z"></path>
							<path
								fill="#FFFFFF"
								d="M237.6,220.4c0-15.9,12.3-23.8,23.7-23.8s23.7,7.8,23.7,23.8c0,15.9-12.3,23.8-23.7,23.8
			S237.6,236.3,237.6,220.4z M239.1,220.4c0,14.8,11.4,22.1,22.1,22.1s22.1-7.3,22.1-22.1s-11.4-22.1-22.1-22.1
			S239.1,205.6,239.1,220.4z"
							></path>
							<path fill="#FFFFFF" d="M238.2,184.7h46.1v1.6h-46.1V184.7z"></path>
							<path
								fill="#FFFFFF"
								d="M237.6,159.5c0-4.7,1.2-9.6,3.1-13h1.6c-2,3.4-3.2,8.6-3.2,13c0,6.5,2.8,12.8,9.5,12.8
			c14.5,0,8.6-28.9,25.1-28.9c8.1,0,11.2,7.3,11.1,15.3c0,5.7-1.4,11.4-3.8,15.7h-1.6c2.5-4.5,3.9-10.2,3.9-15.5
			c0-7.4-2.4-13.8-9.5-13.8c-15.3,0-9.2,28.9-25.2,28.9C240.9,173.9,237.6,166.7,237.6,159.5z"
							></path>
							<path fill="#FFFFFF" d="M238.2,103.8h1.6v28.3h20.5v-26.3h1.6v26.3h20.8v-28.9h1.6v30.5h-46.1V103.8z"></path>
							<path fill="#FFFFFF" d="M238.2,90.8h46.1v1.6h-46.1V90.8z"></path>
							<path fill="#FFFFFF" d="M238.2,47.1h1.6v28.3h20.5V49h1.6v26.3h20.8V46.5h1.6V77h-46.1V47.1z"></path>
							<path fill="#FFFFFF" d="M284.3,21.7l-46.1,20.1v-1.8l44.2-19.2L238.2,1.6v-1.7l46.1,20.1V21.7z"></path>
						</g>
					</g>
				</svg>
			</div>
		</div>
	</div>
</template>
<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
export default {
	setup() {
		const loader = ref(false);
		const logo = ref(null);

		setTimeout(() => {
			loader.value = true;
		}, 4000);

		onMounted(() => {
			gsap.to(logo.value, { rotation: "+=360" });
		});

		return {
			loader,
			logo,
		};
	},
};
</script>
<style lang="scss" scoped>
.loaded .main-wrapper {
	visibility: hidden;
}
.preloader {
	position: fixed;
	z-index: 200;
	transition: all 0.4s cubic-bezier(0.63, 1, 0.3, 1);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;

	&::before,
	&::after {
		position: absolute;
		width: 100%;
		height: 50%;
		content: "";
		background-color: #000;
		transition: all 0.4s cubic-bezier(0.63, 1, 0.3, 1) 0.4s;
		background-attachment: fixed;
	}

	&::after {
		top: 50%;
		transform-origin: right top;
	}

	&__center {
		position: absolute;
		left: 0;
		height: 27px;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		transition: all 0.2s ease-in-out;
		transform: translate(0);
		opacity: 1;
		letter-spacing: 0.7em;
		transform-origin: bottom;
		z-index: 10;
		perspective: 1000;
		text-align: center;

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 11px;
			height: 1px;
			width: 100%;
			background-color: #333;
			animation-name: expand;
			animation-duration: 4s;
			animation-fill-mode: both;
			z-index: -1;
			background: linear-gradient(90deg, #111 0, #333);
		}
	}

	&__logo {
		width: 80px;
		display: inline-block;
		top: -24px;
		position: relative;

		img {
			width: 100%;
		}

		.st1 {
			opacity: 0;
			transform: translateX(80px);
			transition: all 4s 0.3s;
		}
		.logo-bottom {
			transform: translateY(80px);
		}

		.logo-bottom,
		.logo-top {
			opacity: 0;
			transition: all 3s 0.1s;
		}

		.logo-top {
			transform: translateY(-80px);
		}
	}

	&.load {
		top: 30px;
		bottom: 30px;
		left: 30px;
		right: 30px;
		pointer-events: none;
		height: calc(100% - 60px);
		width: calc(100% - 60px);

		&::before {
			width: 0;
		}

		&::after {
			transform: scaleX(0);
		}

		.preloader__center {
			opacity: 0;
			transform: translateY(-10px);
		}
	}
}
@keyframes expand {
	0% {
		width: 0;
	}
	to {
		width: 100%;
	}
}

.web .st1 {
	opacity: 1;
	transform: translateX(0);
}
.web .logo-bottom,
.web .logo-top {
	opacity: 1;
	transform: translateY(0);
}
</style>
