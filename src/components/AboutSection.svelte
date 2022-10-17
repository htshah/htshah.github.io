<script>
    import NumberItem from './NumberItem.svelte';
    import SectionTitle from './SectionTitle.svelte';
</script>

<div class="about">
    <div class="container">
        <div class="row end-md">
            <div class="col-xs-12 col-md" />
            <div class="col-xs-12 col-md">
                <SectionTitle subtitle="What I can do for you"
                    >MY SKILLS</SectionTitle
                >

                <p class="about-description">
                    I can help you with building softwares tailored to your
                    needs. I am skilled at building websites, web applications,
                    and dashboards.
                </p>

                <div class="row center-xs start-md about-achievements">
                    <div class="col-xs-6 col-md">
                        <NumberItem title="Projects completed">30+</NumberItem>
                    </div>
                    <div class="col-xs-6 col-md">
                        <NumberItem title="Years of Experience">2+</NumberItem>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @import '../assets/pcss/core/_core-utils.pcss';

    .about-description {
        text-align: center;
        line-height: 1.3;
        max-width: 500px;
        margin: 0 auto 23px;
    }

    .about-achievements > :first-child {
        margin-bottom: 10px;
    }

    @media (--from-sm) {
        .about-description {
            font-size: 18px;
        }
    }

    @media (--from-md) {
        .about-description {
            text-align: left;
            font-size: 20px;
            line-height: 1.5;
            margin: 0 0 30px;
        }
    }

    @media (--from-container) {
        .about-description {
            font-size: 25px;
        }
    }
</style>
