export default async (req, res) => {
    const data = await fetch('http://127.0.0.1:8000/demoapp')
        .then(res => res.json())
        .catch(error => console.log(error))
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(
        {
            name: 'Nextjs',
            data: data ? data : {}
        }
    ))
}