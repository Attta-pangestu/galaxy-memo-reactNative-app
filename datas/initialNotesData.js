export const initialListNotes = [
  {
    id: 1,
    title: "Note pertama",
    description: "Lorem Ipsum is simply dummy text",
    createdAt: new Date(), // Hari ini
  },
  {
    id: 2,
    title: "Note kedua",
    description: "Sed ut perspiciatis unde omnis iste natus error",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)), // Kemarin
  },
  {
    id: 3,
    title: "Note ketiga",
    description: "At vero eos et accusamus et iusto odio dignissimos",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)), // Dua hari yang lalu
  },
  {
    id: 4,
    title: "Note keempat",
    description: "Et harum quidem rerum facilis est et expedita distinctio",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)), // Tiga hari yang lalu
  },
  {
    id: 5,
    title: "Note kelima",
    description: "Nam libero tempore, cum soluta nobis est eligendi optio",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 7)), // Seminggu yang lalu
  },
  {
    id: 6,
    title: "Note keenam",
    description: "Temporibus autem quibusdam et aut officiis debitis",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 30)), // Sebulan yang lalu
  },
];
