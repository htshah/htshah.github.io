<script>
    import Badges from './Badges.svelte';
    import SectionTitle from './SectionTitle.svelte';

    let languages = ['ReactJS', 'PostCSS', 'HTML', 'CSS', 'PHP', 'Java', 'SQL'];
</script>

<div class="banner">
    <div class="container">
        <div class="row center-xs between-md middle-sm">
            <div class="col col-md-5 profile-img">
                <img src="profile.png" alt="Het Shah" />
            </div>
            <div class="col col-md-7 start-md">
                <SectionTitle title="Hey there!" subtitle="I&apos;m a" />
                <h1>Full Stack Web Dev.</h1>
                <h3>
                    Pursuing MS in
                    <b class="accent-2__text">Computer Science</b>
                    from
                    <b class="primary__text">Northeastern Univ.</b>
                </h3>
                <div class="row badges">
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

<style>
    @import '../assets/pcss/core/_core-utils.pcss';

    .banner :global(.section-title) {
        margin-bottom: 3px;
    }
    h1 {
        font-size: 25px;
        font-weight: 700;
        line-height: 1.3;
        text-transform: capitalize;
        color: #000;
        margin-bottom: 13px;
    }

    h3 {
        &,
        & * {
            font-size: 16px;
            line-height: 1.3;
        }

        font-weight: normal;

        max-width: 360px;
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

    .profile-img {
        font-size: 0;
        margin-bottom: 18px;

        & img {
            max-width: 340px;
            width: calc(100% - 20px);
            transition: all 0.2s ease;
        }
    }

    .badges {
        max-width: 360px;
        margin: 0 auto 11px;

        & :global(.badges) {
            justify-content: center;
        }
    }

    @media (--from-xs) {
        .profile-img img {
            max-width: 410px;
            width: 100%;
        }
    }

    @media (--from-md) {
        .profile-img {
            order: 1;

            img {
                max-width: 100%;
            }
        }

        h3 {
            text-align: left;
            margin-left: 0;
        }

        .badges {
            margin-left: -7px;
            margin-right: -7px;

            & :global(.badges) {
                justify-content: flex-start;
            }
        }
    }
</style>
