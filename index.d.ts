/** Synchronous HTTP request library. */
declare const retus: {
	/**
	 * Fetch the given `url`.
	 * @param url The URL to fetch.
	 * @example
	 * ```
	 * const retus = require("retus");
	 *
	 * const { body } = retus("https://google.com");
	 * //=> "<!doctype html>..."
	 * ```
	*/
	<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Fetch the given url with `{ method: "get" }`.
	 * @param url The URL to fetch.
	*/
	get<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Fetch the given url with `{ method: "post" }`.
	 * @param url The URL to fetch.
	*/
	post<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Fetch the given url with `{ method: "put" }`.
	 * @param url The URL to fetch.
	*/
	put<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Fetch the given url with `{ method: "patch" }`.
	 * @param url The URL to fetch.
	*/
	patch<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Fetch the given url with `{ method: "head" }`.
	 * @param url The URL to fetch.
	*/
	head<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Fetch the given url with `{ method: "delete" }`.
	 * @param url The URL to fetch.
	*/
	delete<ReturnType = unknown>(url: string, options?: retus.Options): retus.ReturnData<ReturnType>

	/**
	 * Create a new Retus instance with the provided default options.
	 * @param defaultOptions The options to extend with.
	*/
	create(defaultOptions: retus.Options): typeof retus

	/**
	 * Create a new Retus instance, extending the current default options with the provided ones.
	 * @param defaultOptions The options to extend with.
	*/
	extend(defaultOptions: retus.Options): typeof retus
}

declare namespace retus {
	export interface Options {
		/**
		 * The HTTP method.
		 * @default get
		*/
		method?: "get" | "head" | "post" | "put" | "delete" | "connect" | "options" | "trace" | "patch"

		/** The URL to prefix the request url with. */
		prefixUrl?: string

		/** Retry failed requests. */
		retry?: {
			/**
			 * The retry limit.
			 * @default 2
			*/
			limit?: number

			/**
			 * The delay between retries.
			 * @default 0
			*/
			delay?: number
		}

		/**
		 * The timeout in milliseconds for getting a response. If set to `false` a timeout won't be set.
		 * @default 10000
		*/
		timeout?: number | false

		/**
		 * The type of data returned by the url. Set to `none` to return raw data.
		 * @default text
		*/
		responseType?: "text" | "json" | "none"

		/** The search parameters for the request. */
		searchParams?: Record<string, string | number | boolean>

		/**
		 * The JSON to send with the request. If specified, `responseType` automatically defaults to `json`.
		*/
		json?: object

		/** The headers to send with the request. */
		headers?: Record<string, string | string[] | undefined>

		/** The body to send with the request. */
		body?: string
	}

	export interface ReturnData<ReturnType = unknown> {
		/** The HTTP status code returned by the request. */
		statusCode: number

		/** The HTTP headers returned by the request. */
		headers: response.headers

		/** The data returned by the request. */
		body: ReturnType
	}
}

export = retus
