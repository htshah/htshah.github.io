<script>
    export let list;
</script>

<ul class="badges">
    {#each list as item}
        <li>{item}</li>
    {/each}
</ul>

<style>
    @import '~/core/_core-utils';

    li {
        background: $color--accent-3-disabled;
        border-radius: 15px;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
        padding: 0 15px;
        margin: 0 15px 15px 0;
        color: #000;
    }
</style>
