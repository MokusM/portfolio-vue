<template>
	<div class="main-nav">
		<div class="wrapper">
			<ul class="main-nav-list">
				<li class="main-nav-list__item"><a href="#main" class="main-nav-list__link">Головна</a></li>
				<li class="main-nav-list__item"><a href="#about" class="main-nav-list__link">Про мене</a></li>
				<li class="main-nav-list__item"><a href="#tecnhology" class="main-nav-list__link">Технології</a></li>
				<li class="main-nav-list__item"><a href="#paint" class="main-nav-list__link">Графічні редактори </a></li>
				<li class="main-nav-list__item"><a href="#study" class="main-nav-list__link">Курси</a></li>
				<li class="main-nav-list__item"><a href="#portfolio" class="main-nav-list__link">Портфоліо</a></li>
				<li class="main-nav-list__item"><a href="#contact" class="main-nav-list__link">Контакти</a></li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.main-nav {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: url(../assets/img/nav-bg.jpg);
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: cover;
	background-color: #000;
	z-index: 1000;
	overflow: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.wrapper {
		padding-left: 18%;
		width: 100%;
	}
}
.fade-enter-active {
	transition: opacity 0.5s;
	transition: opacity 0.2s ease;
}
.fade-leave-active {
	transition: opacity 0.5s;
	transition: opacity 0.2s ease;
}
.main-nav-list {
	transform-origin: 0 50%;
}
.main-nav-list__item {
	margin-bottom: 25px;
	&:last-child {
		margin: 0;
	}
}
.main-nav-list__item.active {
	.main-nav-list__link {
		color: #fff;
		font-weight: 900;
	}
}
.main-nav-list__link {
	font-size: 50px;
	line-height: 80px;
	color: #b5b5b5;
	font-weight: 300;
	&:hover {
		color: #fff;
	}
}
</style>
