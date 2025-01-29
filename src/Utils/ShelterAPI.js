export let data = [];

export const search = () => {
  console.log("Searching");
  data = Array.from(
    {
      length: 10,
    },
    () => Math.floor(Math.random() * 10)
  );
};
