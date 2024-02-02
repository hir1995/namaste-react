
const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" },
    [React.createElement('h1', {}, "i'm H1 Tag"), React.createElement('h2', {}, "i'm H2 Tag")]))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);