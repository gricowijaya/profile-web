<script>
	const Profile = 'https://storage.cloud.google.com/profile-web-svelte.appspot.com/profile.jpg';
</script>

<svelte:head>
	<title>Profile Web</title>
</svelte:head>

<div class="container">
	<div class="info">
		<div class="container info-container">
			<h1>
				<p class="animate-text-1">IT Student Universitas Udayana</p>
				<p class="text-2">Bangkit Cloud Computing Cohort</p>
			</h1>
			<div class="profile-container">
				<div class="image">
					<img src={Profile} alt="profile" />
				</div>
				<div class="profile-biodata">
					<h2>
						I'm Rico. I'm very passionate on learning IT and Security. It is fun thing in the world.
						I'm currently learning Cloud Computing in Bangkit 2023 as Cloud Computing Cohort. I'm
						also learning about Web Development and Security.
					</h2>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.info {
		text-align: center;
		margin: auto;
		position: relative;
	}

	.info-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
		align-items: start;
	}

	.container {
		max-width: 1400px;
		margin: 2.5rem;
	}
	.profile-container {
		position: relative;
		font: inherit;
		display: flex;
		flex-direction: row;
		margin: 30px 0 0 2.5rem;
	}

	.profile-container .profile-biodata {
		text-align: justify;
	}

	.info h1 {
		font-size: 4rem;
		margin: 0;
	}

	.info h1 p {
		position: relative;
		font: inherit;
		text-align: left;
		line-height: 130%;
		width: fit-content;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.info h2 {
		max-width: 65ch;
		font-weight: 200;
	}
	@media screen and (max-width: 1024px) {
		.info h1 {
			font-size: 3rem;
		}
		.profile-container {
			flex-direction: row;
			margin: 30px 0 0 0;
		}
		.profile-container .image {
			margin-right: 20px;
		}
	}
	@media screen and (max-width: 768px) {
		.info h1 {
			font-size: 2rem;
		}
		.info h1 p {
			font-weight: 600;
			font-size: 1.8rem;
		}
		.info h2 {
			font-size: 1.6rem;
		}
		.profile-container {
			flex-direction: column;
			align-items: center;
			margin-top: 20px;
		}

		.profile-container .image {
			margin-right: 0;
			margin-bottom: 20px;
		}
	}

	@media screen and (max-width: 400px) {
		.profile-container .profile-biodata {
			margin: 2rem;
		}
		.info h1 {
			font-size: 2rem;
		}
		.info h1 p {
			font-weight: 600;
			font-size: 1.8rem;
		}
		.info h2 {
			font-size: 1.6rem;
		}
		.profile-container {
			flex-direction: column;
			align-items: center;
			margin-top: 20px;
		}

		.profile-container .image {
			margin-right: 0;
			margin-bottom: 20px;
		}
	}
</style>
