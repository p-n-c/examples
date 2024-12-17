document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(document.location.href)
  const searchParams = new URLSearchParams(url.search)
  document.getElementById('submit-value-text').innerText =
    searchParams.get('text-input')
})
