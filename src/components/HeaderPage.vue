<template>
	<header class="">
		<div class="wrapper">
			<a href="#main" class="logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.5 306.6" role="presentation" x="0px" y="0px" xml:space="preserve">
					<polygon fill="#FFFFFF" points="110.8,90.8 0,1.3 0.1,217.2 30.7,195.3 30.9,65.9 111,130.7 222,41 222,1.3 " class="logo-part-first"></polygon>
					<polygon fill="#FFFFFF" points="191.3,105.3 191.1,234.8 111.1,169.9 0,259.7 0,299.3 111.2,209.8 222,299.3 221.9,83.5 " class="logo-part-second"></polygon>
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
						<g class="st1"></g>
					</g>
				</svg>
			</a>
			<a href="#contact" class="btn btn-border">????'?????????????? ???? ????????</a>
			<button class="button-nav" :class="{ active: draw }" @click="onDrawChange"><span></span></button>
		</div>
	</header>
</template>
<script>
import { ref } from 'vue';
import { gsap, Power1 } from 'gsap';
export default {
	props: {
		isMenu: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const draw = ref(props.isMenu);

		const onDrawChange = () => {
			draw.value = !draw.value;
			var tl = gsap.timeline();
			emit('update:modelValue', draw.value);

			if (draw.value) {
				tl.set('.main-nav', { x: 1.3 * window.innerWidth, rotate: -14, scale: 1.5, transformOrigin: '50% 50%' });
				tl.to('.main-nav', 0.5, { x: 0, ease: Power1.easeOut });
				tl.to('.main-nav', 1, { rotate: 0, scale: 1, ease: Power1.easeOut }).fromTo('.main-nav-list', 1, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, ease: Power1.easeOut });
			} else {
				tl.to('.main-nav-list', 1, { autoAlpha: 0, ease: Power1.easeOut })
					.to('.main-nav-list', 1, { scale: 0, ease: Power1.easeOut }, '-=0.7')
					.to('.main-nav', 1, { rotate: -14, scale: 1.5, autoAlpha: 0, ease: Power1.easeOut }, '-=0.9');
			}
		};

		return {
			onDrawChange,
			draw,
		};
	},
};
</script>
<style lang="scss" scoped>
header {
	background: transparent;
	width: 100%;
	min-width: 320px;
	text-align: left;
	order: 1;
	z-index: 2555;
	padding-top: 38px;
	position: fixed;
	left: 0;
	top: 0;
	.wrapper {
		display: flex;
		align-items: center;
		padding-right: 110px;
	}
	.btn-border {
		margin: 0 50px 0 auto;
	}
}
.logo {
	width: 80px;
	display: block;
	img {
		display: block;
		width: 100%;
	}
	svg {
		width: 100%;
	}
}
.btn {
	display: inline-block;
}
.btn-border {
	color: #fff;
	font-size: 16px;
	line-height: 18px;
	font-weight: 700;
	text-transform: uppercase;
	height: 54px;
	border: 1px solid #fff;
	padding: 17px 28px 0;
	position: relative;
	&:before {
		width: 0;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		background: #fff;
		transition: all 0.26s ease-in-out 0s;
		z-index: -1;
	}
	&:hover {
		color: #000;
		&:before {
			width: 100%;
		}
	}
}
.button-nav {
	width: 38px;
	height: 38px;
	position: fixed;
	right: 108px;
	top: 60px;
	z-index: 125;
	background: transparent;
	padding: 0;
	border: none;
	display: block;
	&:hover {
		span {
			opacity: 0.6;
		}
	}
	span {
		position: absolute;
		width: 100%;
		top: 50%;
		margin-top: -2px;
		transition-duration: 0.2s;
		display: block;
		height: 4px;
		border-radius: 3px;
		background-color: #fff;
		&:after {
			display: block;
			height: 4px;
			border-radius: 3px;
			background-color: #fff;
			content: '';
			position: absolute;
			width: 38px;
			transition-duration: 0.15s;
			transition-property: transform;
			transition-delay: 0.1s;
			transition-duration: 0s;
			bottom: -10px;
		}
		&:before {
			display: block;
			height: 4px;
			border-radius: 3px;
			background-color: #fff;
			content: '';
			position: absolute;
			width: 38px;
			transition-duration: 0.15s;
			transition-property: transform;
			transition-delay: 0.1s;
			transition-duration: 0s;
			top: -10px;
		}
	}

	&.active {
		span {
			z-index: 255;
			transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
			transform: rotate(765deg);
			&:after {
				transition-delay: 0s;
				bottom: 0;
				transform: rotate(90deg);
				transition-property: bottom, transform;
			}
			&:before {
				transition-delay: 0s;
				top: 0;
				opacity: 0;
				transition-property: top, opacity;
			}
		}
	}
}
</style>
