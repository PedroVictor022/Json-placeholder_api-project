import { ButtonContent } from "../style/UI"

export const ButtonFN = ({ children, ...props }) => {
   return <ButtonContent {...props}>{children}</ButtonContent>
}