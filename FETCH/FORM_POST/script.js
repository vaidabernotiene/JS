const form =document.getElementById('form')

form.addEventListener('submit', (e)=>{
e.preventDefault()

    const prePayload = new FormData(form)
    const payload = new URLSearchParams(prePayload)

    fetch('http://httpbin.org/post', {
        method: 'POST',
        body: payload,
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})