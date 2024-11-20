const button = document.querySelector('button')
button.addEventListener('click', Ciag())

function Ciag() {
    const input1 = document.getElementsByClassName('input1')
    const input2 = document.getElementsByClassName('input2')
    const input3 = document.getElementsByClassName('input3')

    let ciagArytmetyczny = []
    for (let i = 0; i < input3; i++) {
        ciagArytmetyczny.push(input1 + i * input2)
    }
    document.getElementsByClassName("wynik").textContent = `Ciąg arytmetyczny zawiera wyrazy: ${ciagArytmetyczny.join(", ")}`;
}
