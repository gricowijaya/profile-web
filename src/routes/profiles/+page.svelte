<!-- src/routes/index.svelte -->
<svelte:head>
	<title>Profile Web</title>
</svelte:head>

<div class="container">
        <article class="content-description">
          <h1 class="title">
            <div class="greet">Hello There!</div>
          </h1>
          <p>
            Call me <b class="my-name">Rico</b>, currently I'm learning Cloud
            Computing at Google Bangkit 2023. Big thanks to all my friends to
            help me grow in this vast world of technology. Stay Awesome and have
            a great day!
          </p>
          <br />
          <section>
            <h3 class="my-journey">My Journey</h3>
            <p>
              I was a High School Graduate when the covid 19 hits in 2020, It
              was a tough decision to learning Information Technology. The
              learning process was hard because I don't really have an IT
              background, but many of my friends inspired me to learn more and
              more.
            </p>
          </section>
        </article>
</div>

<div class="background-div" />

<style>
	.info {
		text-align: center;
		position: relative;
	}

	.info-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		align-items: start;
	}

	.container {
		max-width: 1400px;
		margin: 190px 0 0 2.5rem;
	}

	.info h1 {
		font-size: 4rem;
		margin: 0;
	}

	.info h1 p {
		position: relative;
		font: inherit;
		margin: 0;
		text-align: left;
		line-height: 130%;
		width: fit-content;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.info h2 {
		max-width: 65ch;
		font-weight: 200;
		margin-top: 0.5rem;
	}

	.background-div {
		background-color: var(--background);
		width: 100%;
		height: 56vh;
		margin: -155px auto;
	}

	.info .info-text {
		position: relative;
	}

	.scroll-button {
		display: flex;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.scroll-button .arrow {
		margin-left: 0.5rem;
	}
</style>
