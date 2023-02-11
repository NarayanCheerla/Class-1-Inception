export const filterData = (searchText, allRestaurants) => {
  let filterdRestaurants = [];
  filterdRestaurants = allRestaurants.filter((rest) => {
    return rest.data.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filterdRestaurants;
};
