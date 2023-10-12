<script>
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStat from "./components/FeedbackStat.svelte";
	import FeedbackForm from "./components/FeedbackForm.svelte";
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
	$: count = feedback.length
	$: average = (feedback.reduce((a,{rating})=>a+rating,0)/feedback.length).toFixed(2)

	const delteFeedback = (e) =>{
	const itemId =  e.detail;
	feedback = feedback.filter((item)=> item.id !== itemId)
	}
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStat {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={delteFeedback}/>
</main>