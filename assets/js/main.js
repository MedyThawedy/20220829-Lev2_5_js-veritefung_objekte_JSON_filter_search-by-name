const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    {
        name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre:
            "Progressive rock / Psychedelic rock"
    },
];

let tableParentElement = document.createElement('table');
let divParent = document.getElementById('table-container');
let inputName = document.getElementById('searchInput');

const showSingers1 = () => {
    divParent.innerHTML = '';
    tableParentElement.innerHTML = '';
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow
    let row1 = tableParentElement.insertRow();
    let cell1 = row1.insertCell()
    cell1.innerHTML = 'Name';
    let cell2 = row1.insertCell()
    cell2.innerHTML = 'Country';
    let cell3 = row1.insertCell()
    cell3.innerHTML = 'Period_Active';
    let cell4 = row1.insertCell()
    cell4.innerHTML = 'Genre';
    divParent.append(tableParentElement);
    showSingers2();
}

const showSingers2 = () => {

    singers.forEach(
        element => {

            let row2 = tableParentElement.insertRow(1);
            let cell1 = row2.insertCell()
            cell1.innerHTML = element.name;
            let cell2 = row2.insertCell()
            cell2.innerHTML = element.country;
            let cell3 = row2.insertCell()
            cell3.innerHTML = element.period_active.start + ' - ' + element.period_active.end;
            let cell4 = row2.insertCell()
            cell4.innerHTML = element.genre;
            divParent.append(tableParentElement);

        }
    );
}

showSingers1();


const handleSearchClicked = () => {
    singerName = inputName.value;
    if (singerName == '') {
        alert('Please type a name!');
        showSingers1();
        return;
    }

    divParent.innerHTML = '';
    tableParentElement.innerHTML = '';
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow
    /*let row1 = tableParentElement.insertRow();
    let cell1 = row1.insertCell()
    cell1.innerHTML = 'Name';
    let cell2 = row1.insertCell()
    cell2.innerHTML = 'Country';
    let cell3 = row1.insertCell()
    cell3.innerHTML = 'Period_Active';
    let cell4 = row1.insertCell()
    cell4.innerHTML = 'Genre';
    divParent.append(tableParentElement);*/

    singers.forEach(
        element => {
            if (element.name == singerName) {

                let row1 = tableParentElement.insertRow();
                let cell1 = row1.insertCell()
                cell1.innerHTML = 'Name';
                let cell2 = row1.insertCell()
                cell2.innerHTML = 'Country';
                let cell3 = row1.insertCell()
                cell3.innerHTML = 'Period_Active';
                let cell4 = row1.insertCell()
                cell4.innerHTML = 'Genre';
                divParent.append(tableParentElement);

                let row2 = tableParentElement.insertRow(1);
                cell1 = row2.insertCell()
                cell1.innerHTML = element.name;
                cell2 = row2.insertCell()
                cell2.innerHTML = element.country;
                cell3 = row2.insertCell()
                cell3.innerHTML = element.period_active.start + ' - ' + element.period_active.end;
                cell4 = row2.insertCell()
                cell4.innerHTML = element.genre;
                divParent.append(tableParentElement);
            }
        }
    );


}

