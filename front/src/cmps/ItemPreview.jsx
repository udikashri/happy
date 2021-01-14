
export function ItemPreview(props){
    const {item} = props;
    console.log(item)
    return <div>
        <p>{item.title}</p>
        <img src={item.imgUrl} alt=""/>
    </div>
}

