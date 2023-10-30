type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegetive?: never
    isZero?: never
}

type NegetiveNumber = RandomNumberType & {
    isNegetive: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumber = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegetive?: never
}

type RandomNumberProps = PositiveNumber | NegetiveNumber | ZeroNumber

export const RandomNumber = ({ value, isPositive, isNegetive, isZero }: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegetive && 'Negetive'} {' '} {isZero && 'zero'}
        </div>
    )
}