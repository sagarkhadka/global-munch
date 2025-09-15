const displayStip = () => {
  const strip = document.getElementById('strip')
  const stripUI = `
		<div class="w-full bg-[url(/images/strip.png)] bg-cover bg-center">
		<div class="bg-black/70">
		<h5 class="text-center py-3.5 font-nunito text-lg font-semibold text-white">Free Shipping From $50 Purchase Now</h5>
		</div>
		</div>
	`
  strip.innerHTML = stripUI
}

displayStip()
