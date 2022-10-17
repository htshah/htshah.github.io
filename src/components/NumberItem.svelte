<script>
    export let title;
</script>

<div class="number-item">
    <p><slot /></p>
    <small>{title}</small>
</div>

<style>
    @import '../assets/pcss/core/_core-utils.pcss';
    p {
        color: $color--primary;
        font-weight: 700;
        font-size: 40px;
        line-height: 1.3;
    }

    small {
        font-weight: 600;
        font-size: 11.5px;
        line-height: 1.3;
        text-transform: uppercase;
    }

    @media (--from-sm) {
        p {
            font-size: 50px;
        }

        small {
            font-size: 16px;
        }
    }
</style>
