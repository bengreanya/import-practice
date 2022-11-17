export function renderFirstData(first) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = first.animal;

    const p = document.createElement('p');
    p.textContent = `${first.animal} has a scientific name of ${first.scientific} and could look like `;

    const img = document.createElement('img');
    img.src = first.avatar;

    div.append(h2, p, img);
    return div;
}
export function renderSecondData(second) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = second.equipment;

    const p = document.createElement('p');
    p.textContent = `${second.equipment} might be used with ${second.material} to do ${second.service} `;

    div.append(h2, p);
    return div;
}
export function renderThirdData(third) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = third.company;

    const p = document.createElement('p');
    p.textContent = `${third.company} might make ${third.medication} that could possibly treat ${third.ailment} `;

    div.append(h2, p);
    return div;
}
export function renderForthData(forth) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = forth.city;

    const p = document.createElement('p');
    p.textContent = `${forth.city} is in ${forth.country} and has a country code of ${forth.countrycode} `;

    div.append(h2, p);
    return div;
}
