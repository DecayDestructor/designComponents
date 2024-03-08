const cards = document.querySelectorAll('.card')
// log(cards)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      //   if (entry.isIntersecting) observer.unobserve(entry.target)
    })
    console.log(entries)
  },
  {
    threshold: 1,
  }
)
cards.forEach((card) => {
  observer.observe(card)
})
const lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0]
  if (!lastCard.isIntersecting) return
}, {})
lastCardObserver.observe(document.querySelector('.card:last-child'))
