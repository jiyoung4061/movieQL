export const people = [
  {
    id: "0", //id부여
    name: "Jiyoung",
    age: 27,
    gender: "Female",
  },
  {
    id: "1",
    name: "sansuryeo",
    age: 17,
    gender: "male",
  },
  {
    id: "2",
    name: "react",
    age: 45,
    gender: "Female",
  },
  {
    id: "3",
    name: "docker",
    age: 7,
    gender: "male",
  },
];

export const getById = id => {
    const filteredPeople =people.filter(person => person.id === String(id));
    return filteredPeople[0];
}