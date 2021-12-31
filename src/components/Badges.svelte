<script>
    export let list;
</script>

<ul class="row badges">
    {#each list as item}
        <li>{item}</li>
    {/each}
</ul>

<style>
    @import '../assets/pcss/core/_core-utils.pcss';

    $badge-spacing: 10px;

    ul {
        margin: 0 auto;
    }

    li {
        background: $color--accent-3-disabled;
        border-radius: 16px;
        font-size: 12px;
        line-height: 1.3;
        text-align: center;
        padding: 7px 15px;
        margin: 0 calc($badge-spacing / 2) $badge-spacing;
        color: #000;
    }
</style>
