class NEvent {
	/**
	 * @constructor
	 * @param {Element} DOMElement - HTMLElement to watch
	 * @param {object} options - additional options
	 * @returns {NEvent}  - Instance of NEvent
	 */
	constructor(DOMElement, options = {}) {
		if (!(DOMElement instanceof Element)) {
			throw new Error('DOMElement is not a valid HTML Element');
		}

		this.element = DOMElement;

		this.eventMap = {};
	}

	/**
	 * Adds namespaced event handler.
	 * @return {NEvent} - Current Instance
	 */
	addEventListener(...param) {
		this.element.addEventListener(...param);
		return this;
	}

	/**
	 *  Removes namespaced event handler
	 * @return {NEvent} - Current Instance
	 */
	removeEventListener(...param) {
		this.element.removeEventListener(...param);

		return this;
	}
}

export default NEvent;
