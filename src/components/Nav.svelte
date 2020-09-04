<script>
	import GithubIcon from '../../static/icon-github.svg';
	import InstagramIcon from '../../static/icon-instagram.svg';
	import LinkedinIcon from '../../static/icon-linkedin.svg';
	import Hamburger from '../../static/hamburger.svg';

	const socialLinks = [
		{
			name:'Github',
			url:'https://github.com/htshah',
			icon: GithubIcon
		},
		{
			name:'Linkedin',
			url:'https://www.linkedin.com/in/htshah',
			icon: LinkedinIcon
		},
		{
			name:'Instagram',
			url:'https://instagram.com/htshah',
			icon: InstagramIcon
		},
	];

	export let segment;
</script>

<style>
	@import 'core/utils';
	nav{
		/* position: sticky; */
		/* top: 0; */
		height: 64px * 2;
		transition: all .2s ease;
	}

	.brand-logo{
		font-size: 25px;
		color: #000;
		text-decoration: none;
		user-select: none;
	}

	.nav-links{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);

		li{
			&:not(:last-child){
				margin-right: 42px;
			}

		}
		a{
			font-size: 18px;
			font-weight: 400;
			text-decoration: none;
			text-transform: capitalize;
			color: $color--text-light;
			transition: color .2s ease;

			&:hover,[aria-current]{
				color: #000;
			}
		}
	}

	.social-links{
		display: flex;
		justify-content: center;
		li{
			&:not(:last-child){
				margin-right: 30px;
			}
		}

		a{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0;

			&.icon-github:hover :global(svg path){
				fill: #000;
			}
			&.icon-instagram:hover :global(svg path){
				fill: #d6249f;
			}
			&.icon-linkedin:hover :global(svg path){
				fill: #0e76a8;
			}
		}

		& :global(svg){
			width: 30px;
			height: auto;

			& :global(path){
				transition: fill .2s ease;
				fill: $color--text-lighter;
			}
		}
	}

	@media (--till-md){
		nav{
			height: 50px * 2;
		}
		.nav-links{
			li{
				&:not(:last-child){
					margin-right: 25px;
				}
			}
			a{
				font-size: 17px;
			}
		}

		.social-links{
			li{
				&:not(:last-child){
					margin-right: 20px;
				}
			}
			& :global(svg){
				width: 25px;
				height: 25px;
			}
		}
	}

	@media (--till-sm){
		nav{
			height: 78px;
		}
	}
</style>

<nav class="flex middle-xs">
	<div class="container">
		<div class="row middle-xs between-xs">
			<div class="col">
				<a href="." class="brand-logo">het<b>shah</b></a>
			</div>

			<ul class="nav-links hidden-till-sm">
				<li>
					<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">About</a>
				</li>
				<li>
					<a aria-current="{segment === '/#projects' ? 'page' : undefined}" href=".">Projects</a>
				</li>
				<li>
					<a aria-current="{segment === '/#experience' ? 'page' : undefined}" href=".">Experience</a>
				</li>
				<li>
					<a aria-current="{segment === '/#contact' ? 'page' : undefined}" href=".">Contact</a>
				</li>
			</ul>

			<ul class="col social-links hidden-till-sm">
				{#each socialLinks as {icon: Icon,...link} }
					<li>
						<a 
							href="{link.url}" 
							target="_blank" 
							title="{link.name}"

							class:icon-github="{link.name.toLowerCase() === 'github'}"
							class:icon-instagram="{link.name.toLowerCase() === 'instagram'}"
							class:icon-linkedin="{link.name.toLowerCase() === 'linkedin'}"
						>
							<Icon/>
						</a>
					</li>
				{/each}
			</ul>

			<div class="col hidden-from-sm">
				<div class="flex middle-xs">
					<Hamburger />
				</div>
			</div>
		</div>
	</div>
</nav>
