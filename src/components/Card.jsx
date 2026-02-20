const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
                <div className='w-48 h-48 overflow-hidden rounded-lg'>
                    <img src={props.elem.download_url} alt={props.elem.author} className='w-full h-full object-cover' />
                </div>
                <h2 className="font-bold text-lg">{props.elem.author}</h2>
            </a>
        </div>
    )

}
export default Card