const getScores = (arr) => {
  const slicedArr = arr.slice(3, 11);
  const table = document.createElement("table")
  slicedArr.forEach(item => {
    const tr = document.createElement("tr");
    item.forEach(value => {
      const td = document.createElement("td")
      td.appendChild(document.createTextNode(value));
      tr.appendChild(td)
    })
    table.appendChild(tr)
  
  })

  return table;
};

export default getScores;
