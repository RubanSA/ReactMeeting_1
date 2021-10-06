function ShowUser(){
    let styleObj = {color: "green", border: "1px solid darkorange", "background-color": "#EEE", "text-decoration": "line-through"}
    return (
        <div>
            <div>Сегодня: {new Date().toLocaleDateString()}</div>
            <div style={styleObj}>Мне сегодня {user.age} лет</div></div>)
}