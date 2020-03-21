"use strict"

const request = require("sync-request")

const joinUrl = (base, extension) => new URL(base, extension).href

const retus = (url, options = {}) => {
	options = {
		method: "get",
		prefixUrl: "",
		retry: {
			limit: 2,
			delay: 0,
		},
		timeout: 10000,
		responseType: options.json ? "json" : "text",
		...options,
	}

	const requestOptions = {
		qs: options.searchParams,
		headers: options.headers,
		body: options.body,
		json: options.json,
		timeout: options.timeout,
	}

	if (options.prefixUrl) {
		url = joinUrl(options.prefixUrl, url)
	}

	if (options.retry.limit > 0) {
		requestOptions.retry = true
		requestOptions.maxRetries = options.retry.limit
		requestOptions.retryDelay = options.retry.delay
	}

	const response = request(options.method, url, requestOptions)

	let body
	if (["text", "json"].includes(options.responseType)) body = response.getBody("utf8")
	if (options.responseType === "json") body = JSON.parse(body)

	return {
		statusCode: response.statusCode,
		headers: response.headers,
		body,
	}
}

const createInstance = (defaults = {}) => {
	const newRetus = retus

	for (const method of ["get", "post", "put", "patch", "head", "delete"]) {
		newRetus[method] = (url, options = {}) => newRetus(url, { method, ...options })
	}

	newRetus.create = (newDefaults) => createInstance(newDefaults)
	newRetus.extend = (newDefaults) => createInstance({ ...defaults, ...newDefaults })

	return newRetus
}

module.exports = createInstance()
