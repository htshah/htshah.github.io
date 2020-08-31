<svelte:head>
	<title>Het Shah | Website Under Development</title>
</svelte:head>

<style>
	@import '../assets/pcss/core/variables';
	.main-wrapper{
		min-height: 100vh;
	}

	p{
		margin-left: auto;
		margin-right: auto;
		max-width: 600px;
		font-size: 25px;
		font-weight: 500;
		line-height: 37px;
		text-align: center;
	}

	a{
		font-size: 20px;
		font-weight: 500;
		line-height: 37px;
		color: #EB2F96;
		text-decoration: none;
		&:hover{
			text-decoration: underline;
		}

		&:not(:last-child){
			margin-right: 20px;
		}
	}

	.social{
		text-align: center;
	}

	.me{
		color: $(color--accent-3);
		font-weight: bold;
	}

	@media (max-width: 767px){
		h1{
			font-size: 30px;
		}
		p{
			font-size: 15px;
			line-height: 22px;
		}

		a{
			font-size: 13px;
			line-height: 22px;
		}
	}
</style>

<div class="main-wrapper flex middle-xs center-xs">
	<div class="container">
		<h1>🚧 Website under construction! 🚧</h1>
		<p>Hey there! I'm <span class="me">Het</span>. This site is still under development and will be launching it soon. It's the first version of my personal website which is being built using <i>Svelte/Sapper, PostCSS, Github Pages,</i> etc.</p>
		<div class="social">
			<a href="https://github.com/htshah">Github</a>
			<a href="https://www.instagram.com/htshah/">Instagram</a>
			<a href="https://www.linkedin.com/in/htshah">LinkedIn</a>
		</div>
	</div>
</div>