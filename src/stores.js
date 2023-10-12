import { Writable, writable } from "svelte/store";

export const FeedbackStore = writable(
    [
		{
		id:1,
		rating: 10,
		text: "some random text here",
		},
		{
		id:2,
		rating: 8,
		text: "some random text here",
		},
		{
		id:3,
		rating: 10,
		text: "some random text here",
		},
	]
)