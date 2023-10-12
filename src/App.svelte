<script>
	import FeedbackList from "./components/FeedbackList.svelte";

	let feedback = [
		{
		id:1,
		rating: 10,
		text: "some random text here",
		},
		{
		id:2,
		rating: 9,
		text: "some random text here",
		},
		{
		id:3,
		rating: 10,
		text: "some random text here",
		},
	]
</script>

<main class="container">
	<FeedbackList {feedback} />
</main>