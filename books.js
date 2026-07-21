let books = [
    { bookId: 101, title: "Introduction to Programming", author: "A. Sharma", category: "Programming", copies: 5 },
    { bookId: 102, title: "C Programming", author: "Dennis Ritchie", category: "Programming", copies: 4 },
    { bookId: 103, title: "Data Structures", author: "S. Malik", category: "Computer Science", copies: 3 },
    { bookId: 104, title: "Operating Systems", author: "Galvin", category: "Computer Science", copies: 6 },
    { bookId: 105, title: "Database Management", author: "Korth", category: "Database", copies: 5 },
    { bookId: 106, title: "Java Programming", author: "James Gosling", category: "Programming", copies: 7 },
    { bookId: 107, title: "Python Basics", author: "Guido van Rossum", category: "Programming", copies: 8 },
    { bookId: 108, title: "Computer Networks", author: "Tanenbaum", category: "Networking", copies: 4 },
    { bookId: 109, title: "Cloud Computing", author: "Rajkumar Buyya", category: "Cloud", copies: 3 },
    { bookId: 110, title: "Software Engineering", author: "Ian Sommerville", category: "Software", copies: 6 },
    { bookId: 111, title: "Web Development", author: "John Duckett", category: "Web", copies: 5 },
    { bookId: 112, title: "Machine Learning", author: "Tom Mitchell", category: "AI", copies: 2 },
    { bookId: 113, title: "Artificial Intelligence", author: "Stuart Russell", category: "AI", copies: 3 },
    { bookId: 114, title: "Cyber Security", author: "William Stallings", category: "Security", copies: 4 },
    { bookId: 115, title: "Digital Electronics", author: "Morris Mano", category: "Electronics", copies: 5 }
];

// Task 1
console.log("===== TASK 1 =====");

for (let i = 0; i < books.length; i++) {
    console.log("Book ID:", books[i].bookId);
    console.log("Title:", books[i].title);
    console.log("Author:", books[i].author);
    console.log("Category:", books[i].category);
    console.log("Copies:", books[i].copies);
    console.log("-------------------");
}

// Task 2
console.log("===== TASK 2 =====");
console.log("Total Books:", books.length);

// Task 3
console.log("===== TASK 3 =====");

for (let i = 0; i < books.length; i++) {
    if (books[i].copies < 3) {
        console.log(books[i].title + " - " + books[i].copies + " Copies");
    }
}

// Task 4
console.log("===== TASK 4 =====");

let searchId = 105;
let found = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].bookId === searchId) {
        console.log("Book Found");
        console.log("Title:", books[i].title);
        console.log("Author:", books[i].author);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Book Not Found");
}

// Task 5
console.log("===== TASK 5 =====");

let categoryCount = {};

for (let i = 0; i < books.length; i++) {
    let category = books[i].category;

    if (categoryCount[category]) {
        categoryCount[category]++;
    } else {
        categoryCount[category] = 1;
    }
}

for (let category in categoryCount) {
    console.log(category + " : " + categoryCount[category]);
}

// Task 6
console.log("===== TASK 6 =====");

let maxBook = books[0];

for (let i = 1; i < books.length; i++) {
    if (books[i].copies > maxBook.copies) {
        maxBook = books[i];
    }
}

console.log("MOST AVAILABLE BOOK");
console.log("Book ID:", maxBook.bookId);
console.log("Title:", maxBook.title);
console.log("Author:", maxBook.author);
console.log("Copies:", maxBook.copies);

// Task 7
console.log("===== TASK 7 =====");

for (let i = 0; i < books.length; i++) {

    let status;

    if (books[i].copies >= 5) {
        status = "Available";
    } else if (books[i].copies >= 3) {
        status = "Limited";
    } else {
        status = "Critical";
    }

    console.log(books[i].title + " - " + status);
}

// Task 8
console.log("===== TASK 8 =====");

let available = 0;
let limited = 0;
let critical = 0;

for (let i = 0; i < books.length; i++) {

    if (books[i].copies >= 5) {
        available++;
    } else if (books[i].copies >= 3) {
        limited++;
    } else {
        critical++;
    }
}

console.log("Available :", available);
console.log("Limited :", limited);
console.log("Critical :", critical);

// Task 9
console.log("===== TASK 9 =====");

for (let i = 0; i < books.length; i++) {
    if (books[i].category === "Programming") {
        console.log(books[i].title);
    }
}

// Task 10
console.log("===== TASK 10 =====");

let highestCopies = books[0].copies;

for (let i = 1; i < books.length; i++) {
    if (books[i].copies > highestCopies) {
        highestCopies = books[i].copies;
    }
}

console.log("Total Book Records :", books.length);
console.log("Available Books :", available);
console.log("Limited Books :", limited);
console.log("Critical Books :", critical);
console.log("Highest Copies Available :", highestCopies);

// Task 11 - Delete Book
console.log("===== TASK 11 =====");

let deleteId = 105;
let deleted = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].bookId === deleteId) {
        books.splice(i, 1);
        deleted = true;
        console.log("Book Deleted Successfully");
        break;
    }
}

if (!deleted) {
    console.log("Book Not Found");
}

// Print Updated List
console.log("===== UPDATED BOOK LIST =====");

for (let i = 0; i < books.length; i++) {
    console.log("Book ID:", books[i].bookId);
    console.log("Title:", books[i].title);
    console.log("Author:", books[i].author);
    console.log("Category:", books[i].category);
    console.log("Copies:", books[i].copies);
    console.log("-------------------");
}