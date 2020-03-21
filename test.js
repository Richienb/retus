const test = require("ava")
const retus = require(".")

test("main", (t) => {
	const { statusCode, headers, body } = retus("https://google.com")
	t.is(statusCode, 200)
	t.is(typeof headers, "object")
	t.is(typeof body, "string")
})
