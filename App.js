const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [React.createElement("div",{id: "child"},
    [
      React.createElement("h1", {}, "Hello this is a h1 tag"),
      React.createElement("h2", {}, "Hello this is a h2 tag"),
    ]
  ),

  React.createElement("div",{id: "child2"},
  [
    React.createElement("h1", {}, "Hello this is a h1 tag"),
    React.createElement("h2", {}, "Hello this is a h2 tag"),
  ]
)
]

);

console.log(parent);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(parent);