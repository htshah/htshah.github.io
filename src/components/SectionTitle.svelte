<script>
    export let title;
    export let subtitle;
</script>

<div class="section-title">
    <h2>{title}</h2>
    <p>{subtitle}</p>
</div>

<style>
    @import '../assets/pcss/core/_core-utils.pcss';

    div {
        margin-bottom: 10px;
        & * {
            transition: all 0.2s ease;
        }
    }

    h2 {
        font-family: $font-fugaz;
        font-weight: normal;
        text-transform: uppercase;
        color: $color--text-lighter;

        font-size: 44px;
        line-height: 1.1;

        user-select: none;
    }

    p {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        color: $color--primary;
        line-height: 1.1;

        transform: translateY(-8px);
    }

    @media (--from-md) {
        h2 {
            font-size: 100px;
            height: 82px;
            line-height: 82px;
        }

        p {
            font-size: 22px;
            transform: translateY(-1px);
        }
    }

    @media (width >= 1144px) {
        h2 {
            font-size: 120px;
            height: 104px;
            line-height: 120px;
        }

        p {
            transform: translateY(2px);
        }
    }
</style>
