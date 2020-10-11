let books = localStorage.getItem('books');
books = books ? JSON.parse(books).filter(book => book.moderatorApproved && book.adminApproved) : [];
export default books;

// export default [
//     {
//         id: 1,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 2,
//         authors: ["Mauricio Aniche", "Marco Aurelio Gerosa"],
//         title: 'Most common mistake in test-driven development practice: result from an online survey with developers',
//         year: 2010,
//     },
//     {
//         id: 3,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 4,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 5,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 6,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 7,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 8,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 9,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//     {
//         id: 10,
//         authors: ["Janzen, D S", "Saiedian, H"],
//         title: 'Does Test-Driven Development Really Improve Software Design Quality?',
//         year: 2001,
//         pages: '77–84',
//     },
//
// ];
let users = [
    {email: "moderator1@gmail.com", password: "123", role: "moderator"},
    {email: "moderator2@gmail.com", password: "123", role: "moderator"},
    {email: "moderator3@gmail.com", password: "123", role: "moderator"},
    {email: "moderator4@gmail.com", password: "123", role: "moderator"},
    {email: "moderator5@gmail.com", password: "123", role: "moderator"},
    {email: "analyst1@gmail.com", password: "123", role: "analyst"},
    {email: "analyst2@gmail.com", password: "123", role: "analyst"},
    {email: "analyst3@gmail.com", password: "123", role: "analyst"},
    {email: "analyst4@gmail.com", password: "123", role: "analyst"},
    {email: "analyst5@gmail.com", password: "123", role: "analyst"},
    {email: "admin@gmail.com", password: "123", role: "admin"},
];

if(!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify(users));