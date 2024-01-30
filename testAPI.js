const loadData = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();

  console.log(data);
};
