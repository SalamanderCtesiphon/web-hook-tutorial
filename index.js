const myObj = {
  id: 1,
  title: "myObj",
  myNestedObjs: [
    {
      id: 2,
      title: "nested1"
    },
    {
      id: 3,
      title: "nested2"
    }, 
    {
      id: 4,
      title: "nested3"
    }
  ]
}

const data = myObj.myNestedObjs.filter((obj) => {
  return obj.id === 4
}) 

const newData = data[0].title
console.log(newData)