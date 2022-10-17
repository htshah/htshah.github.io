<script>
    import Badges from './Badges.svelte';
    import SectionTitle from './SectionTitle.svelte';

    let languages = ['ReactJS', 'PostCSS', 'HTML', 'CSS', 'PHP', 'Java', 'SQL'];
</script>

<div class="banner">
    <div class="container container-fluid">
        <div class="row center-xs between-md middle-sm">
            <div class="col profile-img__wrap">
                <div class="profile-img">
                    <img src="profile.png" alt="Het Shah" />
                </div>
            </div>
            <div class="col-xs-12 banner-body col-md start-md">
                <div class="container no-gutters">
                    <SectionTitle subtitle="I&apos;m a">Hey there!</SectionTitle
                    >
                    <h1 class="profile-job-title">Full Stack Web Dev</h1>
                    <h3 class="profile-currently">
                        Pursuing MS in
                        <b class="accent-2__text">Computer Science</b>
                        from
                        <b class="primary__text">Northeastern Univ</b>
                    </h3>
                    <div class="row badges">
                        <!-- TODO: refactor to <Badge></Badge> -->
                        <Badges list={languages} />
                    </div>
                    <a
                        href="https://www.linkedin.com/in/htshah"
                        class="profile-url"
                        target="_blank"
                    >
                        linkedin.com/in/htshah
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import '../assets/pcss/core/_core-utils.pcss';

    .banner {
        margin-bottom: 30px;
    }

    .banner :global(.section-title) {
        margin-bottom: 3px;
    }

    .profile-job-title {
        font-size: 25px;
        font-weight: 700;
        line-height: 1.3;
        text-transform: capitalize;
        color: #000;
        margin-bottom: 13px;
    }

    .profile-currently {
        &,
        & * {
            font-size: 16px;
            line-height: 1.3;
        }

        font-weight: normal;

        max-width: 420px;
        text-align: center;
        color: $color--text-light;

        margin: 0 auto 24px;
    }

    .profile-url {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
        color: $color--accent-2;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .banner > .container {
        background: linear-gradient(
                180deg,
                #ffffff 0%,
                rgba(255, 255, 255, 0) 225px,
                #ffffff 450px
            ),
            url('../pattern.png') repeat-x 0 0 / auto;
    }

    .profile-img {
        font-size: 0;
        margin-bottom: 18px;
        max-width: 290px;
        transition: all 0.2s ease;
    }

    .badges {
        max-width: 360px;
        margin: 0 auto 11px;

        & :global(.badges) {
            justify-content: center;
        }
    }

    @media (--from-sm) {
        .profile-job-title {
            font-size: 32px;
        }

        .profile-currently {
            &,
            & * {
                font-size: 20px;
            }

            max-width: 450px;
        }
        .profile-url {
            font-size: 18px;
        }
    }

    @media (--between-sm-md) {
        .banner-body {
            padding-top: 50px;
            padding-bottom: 50px;
        }
    }

    @media (--from-md) {
        .banner {
            margin-bottom: 50px;
        }
        .banner > .container {
            background: none;
        }

        .banner-body {
            flex: 1;
        }

        .profile-img__wrap {
            order: 1;
            max-width: 475px;
            width: 40%;
        }

        .profile-img {
            max-width: none;
        }

        .profile-currently {
            text-align: left;
            margin-left: 0;
        }

        .profile-url {
            font-size: 17px;
        }

        .badges {
            margin-left: -7px;
            margin-right: -7px;
            max-width: 350px;

            & :global(.badges) {
                justify-content: flex-start;
            }
        }
    }

    @media (--from-container) {
        .profile-currently {
            &,
            & * {
                font-size: 25px;
            }
            max-width: 550px;
        }

        .profile-job-title {
            font-size: 44px;
        }

        .profile-url {
            font-size: 20px;
        }

        .badges {
            max-width: 400px;
        }
    }
</style>
