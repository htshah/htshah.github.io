<script>
	import GlobalStyle from '../components/GlobalStyle.svelte';
	import Navbar from '../components/Navbar.svelte';

	export let segment;
</script>

<svelte:head>
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&family=Fugaz+One&display=swap" rel="stylesheet">
</svelte:head>

<GlobalStyle/>

<Navbar {segment}/>
<main>
	<slot></slot>
</main>