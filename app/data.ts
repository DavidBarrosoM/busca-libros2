export type Book = {
    id: string;
    title: string;
    author: string;
    year: number;
    isRead: boolean;
  };
  
  let books: Book[] = [
    {
      id: "1",
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967,
      isRead: true,
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      year: 1949,
      isRead: true,
    },
    {
      id: "3",
      title: "El nombre del viento",
      author: "Patrick Rothfuss",
      year: 2007,
      isRead: false,
    },
    {
      id: "4",
      title: "Sapiens",
      author: "Yuval Noah Harari",
      year: 2011,
      isRead: true,
    },
    {
      id: "5",
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      year: 2001,
      isRead: false,
    },
    {
      id: "6",
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: 1953,
      isRead: true,
    },
    {
      id: "7",
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      year: 1943,
      isRead: false,
    }
  ];