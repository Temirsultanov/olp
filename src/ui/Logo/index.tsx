import * as React from 'react'
import WhiteLogo from '../../images/icons/logo-white.svg'
import ColorfulLogo from '../../images/icons/logo-colorful.svg'

interface IProps {
	className?: string
}

export const White = ({ className }: IProps) => {
	return <WhiteLogo className={className} />
}

export const Colorful = ({ className }: IProps) => {
	return <ColorfulLogo className={className} />
}
