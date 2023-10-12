<script>
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStat from "./components/FeedbackStat.svelte";
	import FeedbackForm from "./components/FeedbackForm.svelte";


	const addFeedback = (e)=>{
		const newFeedback = e.detail
		feedback = [newFeedback,...feedback]
	}
	const delteFeedback = (e) =>{
	const itemId =  e.detail;
	feedback = feedback.filter((item)=> item.id !== itemId)
	}
</script>

<main class="container">
	<FeedbackForm/>
	<FeedbackStat />
	<FeedbackList />
</main>