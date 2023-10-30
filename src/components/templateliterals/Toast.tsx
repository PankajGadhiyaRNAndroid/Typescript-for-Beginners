
type HorizontalPosition = 'let' | 'right' | 'center'
type VertiocalPosition = 'top' | 'bottom' | 'center'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VertiocalPosition}`, 'center-center'> | 'center'
}
export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}