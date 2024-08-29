let vehicle1 = prompt('Digite o nome do primeiro veículo:')
let vehicle2 = prompt('Digite o nome do segundo veículo:')
const vehicleSpeed1 = prompt(`Digite a velocidade do primeiro veículo:`)
const vehicleSpeed2 = prompt(`Digite a velocidade do segundo veículo:`)

if (vehicleSpeed1 > vehicleSpeed2) {
    alert(`${vehicle1} está a ${vehicleSpeed1}km/h, e mais rápido que o ${vehicle2}, que está a ${vehicleSpeed2}km/h.`)
} else if (vehicleSpeed1 < vehicleSpeed2) {
    alert(`${vehicle2} está a ${vehicleSpeed2}km/h, e mais rápido que o ${vehicle1}, que está a ${vehicleSpeed1}km/h.`)
} else {
    alert(`Tanto ${vehicle1} e ${vehicle2} estão a ${vehicleSpeed1 || vehicleSpeed2}km/h.`)
}