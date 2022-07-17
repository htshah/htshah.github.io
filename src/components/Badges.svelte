<script>
    export let list;
</script>

<ul class="badges">
    {#each list as item}
        <li><span>{item}</span></li>
    {/each}
</ul>

<style>
    @import '../assets/pcss/core/_core-utils.pcss';

    $badge-spacing: 10px;

    ul {
        margin: 0 auto;
    }

    li {
        padding: 0 calc($badge-spacing / 2) $badge-spacing;
    }

    span {
        display: inline-block;
        background: $color--accent-3-disabled;
        border-radius: 16px;
        font-size: 12px;
        line-height: 1.3;
        text-align: center;
        padding: 7px 15px;
        color: #000;
    }

    @media (--from-md) {
        span {
            border-radius: 30px;
            font-size: 14px;
            padding: 9px 19px;
        }
    }
</style>
