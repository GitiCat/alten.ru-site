const initialParallax = (root: HTMLDivElement, classes: string, depth: number | number[]) => {
	const cs: string | string[] = classes.split(' ').length > 1 ? classes.split(' ') : classes
	const elements: Array<Object> = []

	if (typeof cs === 'string') {
		root.querySelectorAll(cs).forEach(element => elements.push(element))
	} else if (typeof cs === 'object') {
		if (cs.length > 1) {
			for (let i = 0; i < cs.length; i++) {
				const object: Array<Element> = []
				root.querySelectorAll(cs[i]).forEach(element => object.push(element))
				elements.push(object)
			}
		} else {
			root.querySelectorAll(String(cs)).forEach(element => elements.push(element))
		}
	}

	if (elements.length == 0) {
		throw new Error('Initial Parallax Error: missing elements...')
	}

	parallaxScrolling(elements, depth)
	window.onscroll = () => parallaxScrolling(elements, depth)
}

const parallaxScrolling = (elems: Array<Object>, depth: number | number[]) => {
	const isElement = elems[0] instanceof HTMLElement
	const scrolled: number = window.scrollY

	if (isElement) {
		elems.map((elem: HTMLElement) => {
			const posY: number = elem.offsetTop,
				h: number = elem.getBoundingClientRect().height

			const diff = scrolled - posY
			const ratio = Math.round(diff / h * 100)

			elem.style.cssText = `transform: translateY(${ratio * Number(depth)}px)`
		})
	}
}

export {
	initialParallax,
}
