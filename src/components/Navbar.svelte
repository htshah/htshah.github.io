<script>
    import GithubIcon from '../assets/images/icon-github.svelte';
    import TwitterIcon from '../assets/images/icon-twitter.svelte';
    import InstagramIcon from '../assets/images/icon-instagram.svelte';
</script>
<style>
    /* TODO How to remove this repetitve import
    statement. */
    @import '../assets/pcss/core/_core-utils';

    :global(body) {
        padding-top: 15px;
    }

    .nav-container {
        padding: 20.5px 0;
    }

    h1 {
        font-size: 28px;
        font-weight: 400;
        line-height: 1.1;

        & a {
            color: $color--black;
            text-decoration: none;
            transition: all .2s ease;

            &:hover {
                text-decoration: underline;
            }
        }

        & span {
            font-weight: 700;
        }
    }

    ul {
        list-style-type: none;
        padding-left: 0;

        & li {
            display: inline-flex;
        }
    }

    ul.nav-links {

        & li {
            &:not(:last-child) {
                padding-right: 30px;
            }
        }

        & a {
            font-weight: 500;
            font-size: 16px;
            line-height: 1;
            text-decoration: none;
            color: $color--text-light;
            transition: all .2s ease;
            
            &:hover {
                color: $color--black;
            }
        }
    }

    ul.social-links {
        & li {
            &:not(:last-child) {
                padding-right: 13px;
            }
        }

        & a {
            font-size: 0;
        }
    }
</style>

<nav>
    <div class="container">
        <div class="nav-container flex between-xs middle-xs">
            <h1>
                <a href="/">
                    het<span>shah</span>
                </a>
            </h1>
            <ul class="nav-links hidden-till-sm">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul class="social-links hidden-till-sm">
                <li>
                    <a href="https://github.com/htshah" target="_blank" rel="noopener noreferrer">
                        <GithubIcon/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/htshah60" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon/>
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com/htshah" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>