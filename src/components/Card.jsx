const Card = (props) => {

    return (
        <div className="card" key={props.id} id={props.id}>
            <div className="card__image">
                <img src={props.image} alt="Not found" />
            </div>

            <div className="card__description card-description">
                <div className="card-description__name">{props.name}</div>
                <div className="card-description__cost">{props.cost}$</div>
            </div>

            <a href="https://store.steampowered.com/app/379720/DOOM/?l=russian">
                <button className="card__button">order</button>
            </a>
        </div>
    )
}

export default Card