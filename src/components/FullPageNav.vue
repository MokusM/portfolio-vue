<template>
	<div class="fullpage-nav">
		<ul id="js-menu" class="main-pagination">
			<li data-menuanchor="main" class="main-pagination__item active">
				<a href="#main" class="main-pagination__link"><span class="main-pagination__text"></span><span class="main-pagination__point"></span></a>
			</li>
			<li data-menuanchor="about" class="main-pagination__item">
				<a href="#about" class="main-pagination__link"><span class="main-pagination__text">Про мене</span><span class="main-pagination__point"></span></a>
			</li>
			<li data-menuanchor="tecnhology" class="main-pagination__item">
				<a href="#tecnhology" class="main-pagination__link"><span class="main-pagination__text">Технології</span><span class="main-pagination__point"></span></a>
			</li>
			<li data-menuanchor="paint" class="main-pagination__item">
				<a href="#paint" class="main-pagination__link"><span class="main-pagination__text">Редактори</span><span class="main-pagination__point"></span></a>
			</li>
			<li data-menuanchor="study" class="main-pagination__item">
				<a href="#study" class="main-pagination__link"><span class="main-pagination__text">Уміння</span><span class="main-pagination__point"></span></a>
			</li>
			<li data-menuanchor="portfolio" class="main-pagination__item">
				<a href="#portfolio" class="main-pagination__link"><span class="main-pagination__text">Портфоліо</span><span class="main-pagination__point"></span></a>
			</li>
			<li data-menuanchor="contact" class="main-pagination__item">
				<a href="#contact" class="main-pagination__link"><span class="main-pagination__text">Контакти</span><span class="main-pagination__point"></span></a>
			</li>
		</ul>
		<div class="fullpage-nav-icon"></div>
	</div>
</template>
<style lang="scss" scoped>
.fullpage-nav {
	position: fixed;
	right: 180px;
	top: 0;
	height: 100%;
	width: 27px;
	&:before {
		top: 0;
		height: 30%;
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		width: 1px;
		background-color: #fff;
	}
	&:after {
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		width: 1px;
		background-color: #fff;
		height: 10%;
		bottom: 0;
	}
}
@keyframes scrollPoint {
	0% {
		transform: translateY(-8px);
	}
	to {
		transform: translateY(8px);
	}
}
.fullpage-nav-icon {
	position: absolute;
	width: 28px;
	height: 42px;
	display: block;
	margin: 0 auto 0;
	border: 1px solid #fff;
	border-radius: 14px;
	bottom: 120px;
	right: 0;
	&:before {
		top: 15px;
		height: 8px;
		animation-name: scrollPoint;
		animation-duration: 1.2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		width: 1px;
		background-color: #fff;
	}
	&:after {
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		width: 1px;
		background-color: #fff;
		height: 50px;
		bottom: calc(100% + 20px);
	}
}

.main-pagination {
	position: fixed;
	right: 185px;
	top: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.main-pagination__item {
	transition: all 0.3s;
	margin-bottom: 9px;
	&:last-child {
		margin-bottom: 0;
	}
}
.main-pagination__item.active {
	.main-pagination__text {
		transition: all 0.3s ease-in-out 0.2s;
		pointer-events: auto;
		transform: translate(0);
	}
	.main-pagination__point {
		background-color: #fff;
	}
}
.main-pagination__link {
	display: flex;
	align-items: center;
}
.main-pagination__text {
	color: #fff;
	font-size: 16px;
	font-weight: 400;
	line-height: 20px;
	text-transform: uppercase;
	opacity: 0;
	-webkit-transform: translate(-10px);
	transform: translate(-10px);
	pointer-events: none;
	display: inline-block;
	margin-right: 8px;
	position: absolute;
	left: -100px;
	text-align: right;
}
.main-pagination__point {
	width: 15px;
	height: 15px;
	display: block;
	border-radius: 50%;
	position: relative;
	&:before {
		content: '';
		display: block;
		position: absolute;
		left: 5px;
		top: 5px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: #fff;
	}
}
</style>
