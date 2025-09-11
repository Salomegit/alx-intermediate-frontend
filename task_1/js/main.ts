interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentList: Array<Student> = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        location: "New York",
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 30,
        location: "Los Angeles",
    }
];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headers = ["First Name", "Location"];

// Create headers
headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Create rows
studentList.forEach(student => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
});

// Add table to body
document.body.appendChild(table);

export {};
