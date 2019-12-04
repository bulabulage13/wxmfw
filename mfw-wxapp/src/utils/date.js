const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1900; i <= date.getFullYear(); i++) {
    years.push(i);
}
for (let i = 1; i <= 12; i++) {
    months.push(i);
}
for (let i = 1; i <= 31; i++) {
        days.push(i);
    }



export default {
    years, months, days
}