interface ISquareProps  {
   onClick: () => void,
   value: 'X' | 'O' | null
}

const Square: React.FunctionComponent<ISquareProps> = (props) => {

    if (!props.value) {
     return (
        <button className={"board-square"}
        onClick={props.onClick}
        >
            {props.value}
        </button>
     )} else { return (
        <button className={`board-square square_${props.value}`}
        disabled
        >
            {props.value}
        </button>
     )}
}

export default Square;