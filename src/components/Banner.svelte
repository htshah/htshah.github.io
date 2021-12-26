<script>
    import Badges from './Badges.svelte';
    import SectionTitle from './SectionTitle.svelte';

    let languages = ['ReactJS', 'PostCSS', 'HTML', 'CSS', 'PHP', 'Java', 'SQL'];
</script>

<div class="banner">
    <div class="container">
        <div class="row middle-md">
            <div class="col profile-img">
                <img src="profile.png" alt="Het Shah" />
            </div>
            <div class="col">
                <SectionTitle title="Hey there!" subtitle="I&apos;m a" />
                <h2>Full Stack Web Dev.</h2>
                <h3>
                    Pursuing MS in
                    <b class="company">Computer Science</b>
                    from
                    <b class="job-title">Northeastern Univ.</b>
                </h3>
                <Badges list={languages} />
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
    h2 {
        font-size: 50px;
        font-weight: bold;
        line-height: 1.3;
        text-transform: capitalize;
        color: #000;
        margin-bottom: 20px;
    }

    h3 {
        font-weight: normal;
        font-size: 25px;
        color: $color--text-light;
        margin-bottom: 34px;
        max-width: 426px;
    }

    .company {
        color: $color--accent-2;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .job-title {
        color: $color--primary;
    }

    .profile-url {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: $color--accent-2;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .profile-img {
        transition: width 0.2s ease;
    }

    .banner :global(.badges) {
        max-width: 400px;
        margin-bottom: 25px;
    }

    @media (--from-sm) {
        .banner {
            padding: 100px 0 162px;
        }

        .profile-img {
            position: absolute;
            width: 350px;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }
    }

    @media (width > 800px) {
        .profile-img {
            width: 400px;
        }
    }

    @media (--from-md) {
        .profile-img {
            width: 500px;
        }
    }

    @media (width >= 1161px) {
        .profile-img {
            width: 550px;
        }
    }

    @media (--till-md) {
        h2 {
            font-size: 30px;
        }

        h3 {
            font-size: 17px;
            max-width: 280px;
        }

        .profile-url {
            font-size: 13px;
        }

        .banner :global(.badges) {
            max-width: 280px;
        }
    }
</style>
