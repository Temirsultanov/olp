import { useState, useEffect } from 'react'

export const useAccordeon = (
	opened: number | null,
	setOpened: React.Dispatch<React.SetStateAction<number | null>>,
	id: number | null,
	accordeon: React.RefObject<HTMLElement>
) => {
	const [height, setHeight] = useState('auto')
	const open = () => setOpened(opened === id ? null : id)

	useEffect(() => {
		if (opened !== id) {
			setHeight('0px')
			return
		}

		if (accordeon.current === null) {
			setHeight('auto')
			return
		}

		const wrapper = accordeon.current as HTMLElement
		const content = wrapper.firstElementChild as HTMLElement

		if (wrapper === null || content === null) {
			setHeight('auto')
			return
		}

		setHeight(getComputedStyle(content).height)
	}, [opened])

	return { height, open }
}
