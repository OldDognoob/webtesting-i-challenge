module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
 const enhancement = item.enhancement;
  if (enhancement < 20) {
    item.enhancement=item.enhancement +1;
  }
  return { ...item, enhancement };
}

function fail(item) {
  const enhancement = item.enhancement;
  const durability = item.durability;
  if (enhancement < 15) {
    item.durability = durability - 5;
  } else {
    item.durability = durability - 10;
    if (enhancement >= 17) {
      item.enhancement-1;
    }
  }
  return { ...item, enhancement, durability };
}

// function repair(item) {
//   return { ...item, durability: 100 };
// }

// function get(item) {
//   return { ...item };
// }
// function succeed(item) {
//   if(item.enhancement === 20) {
//   } else {
//     item.enhancement = item.enhancement + 1
//   }
//   return { ...item };
// }

// function fail(item) {
//   if(item.enhancement < 15 && item.durability < 5) {
//     item.durability = 0
//     // if item enhancement is < 15, durability -5
//   } else if (item.enhancement < 15) {
//     item.durability = item.durability - 5
//   } else if(item.enhancement === 15 || item.enhancement === 16) {
//     item.durability = item.durability - 10
//   } else if(item.enhancement > 16) {
//     item.enhancement = item.enhancement - 1
//   }
//   return { ...item };
// }

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  const newItem ={...item};
  if(newItem.enhancement > 0)
  newItem.name=`[+${newItem.enhancement}]${newItem.name}`
  return { ...item };
}