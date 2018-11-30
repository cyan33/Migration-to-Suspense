# Migration to React Suspense

Let’s forget about the buzzword “Suspense” and solve some real world problems instead.

The problems are narrowed down to code splitting & async data fetching.

(Show the demo)

1. Code Splitting
	* What is code splitting?
		* To stay fast, only load JavaScript needed for the current page.
		* This gives you the best chance at loading and getting interactive fast.
		* Route-based & Component based
		* Encourage people to lazy load as much as they can
	* Demo React.lazy and `<Suspense>`

2. Async data fetching
	* What’s the problems behind the spinners?
		* as shown in slides
	* Show how to use `resource.read` in demo
	* How to understand the `<Suspense>`?
		* Similar to an ErrorBoundary
		* And is composable

3. ConcurrentMode
	* Another question: Is the spinner always necessary?
	* Concurrent Rendering
	* A git branching metaphor
	* Now, do you get the point why it’s called “Suspense”? :)

4. Road map
Tell people that a big part of Suspense is not ready yet.
