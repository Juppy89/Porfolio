const filtered = ships.filter(el =>el.name == "Death Star");
console.log(filtered);

<!--Or-->
const filtered = ships.filter(el => el.cost_in_credits < 120000);
const filtered2 = ships.filter(el => el.manufacturer.toLowerCase().indexOf('Corp')>-1);
console.log(filtered,filtered2);

function searchManufacturer(ships, query){
    const filtered2 = ships.filter(el => el.manufacturer.toLowerCase().indexOf('query.toLowerCase())>-1);
      return filtered2;
}
console.log(filtered);
console.log(searchManufacturer('Corp'));
debugger;
