<script>
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<svelte:head>
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<GlobalStyle/>

<Nav {segment}/>
<main>
	<slot></slot>
</main>