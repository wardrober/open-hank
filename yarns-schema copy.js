// Schema for Twisted Henry yarn product data
var yarnSchema = {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "http://twistedhenry.com/schemas/yarnProducts.json",
	"title": "Twisted Henry Yarn Products",
	"description": "Schema for Twisted Henry yarn product data",
	"type": "array",
	"items": {
		"type": "object",
		"properties": {
			"yarn_id": {
				"type": "string", // brandname-yarnname
			},
			"vendor_name": {
				"type": "string", // the actual name of the distributor/person/company we buy the product from
			},
			"manufacturer_company": {
				"type": "string", // the actual name of the manufacturer/person/company on the label
			},
			"manufacturer_company": {
				"type": "string", // how the manufacturer is referenced when combined with a yarn name, e.g. Trendsetter Yarns is the brand, but their yarns are referenced as Trendsetter YarnName
			},
			"name": {
				"type": "string", // the name of the yarn
			},
			"published_content": {
				"type": "string", // the content as listed on the label
			},
			"content_data": {
				"type": "array", // each content component's detailed information
				"items": {
					"type": "object",
					"properties": {
						"percentage": {
							"type": "number",
						},
						"fiber_name": {
							"type": "string", // the content type as it appears on the label
						},
						"fiber_data": {
							"type": "array",
							"items": {
								"type": "string", // content type descriptions in decreasing specificity, e.g. ["Extrafine Merino", "Merino", "Wool", "Hair Fiber"]
							},
						},
					},
				},
			},
			"mass": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "null"], // weight [oz, g]
					},
				},
			},
			"distance": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "null"], // length [yds, m]
					},
				},
			},
			"knit_st_guage": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "string", "null"], // [lo(number), hi(number | null if no range given), stitch pattern(string[title case] | null if stockinette st only)]
					},
				},
			},
			"knit_row_guage": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "string", "null"], // [lo(number), hi(number | null if no range given), stitch pattern(string[title case] | null if stockinette st only)]
					},
				},
			},
			"croc_st_guage": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "string", "null"], // [lo(number), hi(number | null if no range given), stitch pattern(string[title case] | null if stockinette st only)]
					},
				},
			},
			"croc_row_guage": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "string", "null"], // [lo(number), hi(number | null if no range given), stitch pattern(string[title case] | null if stockinette st only)]
					},
				},
			},
			"wraps_per_inch": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "null"], // [lo(number), hi(number | null if no range given)]
					},
				},
			},
			"knit_needle_rec": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "null"], // [US(number | null if not given), mm(number | null if not given)]
					},
				},
			},
			"croc_hook_rec": {
				"type": "array",
				"items": {
					"type": "array",
					"items": {
						"type": ["number", "null"], // [US(number | null if not given), mm(number | null if not given)]
					},
				},
			},
			"image_file_location": {
				"type": "string", // vendorabbreviation/manufacturerabbreviation/yarnascompleteaspossible
			},
			"shades": {
				"type": "array",
				"items": {
					"type": "array",
					"items": [
						{ "type": ["string", "null"] }, // shade code
						{ "type": ["string", "null"] }, // shade name
						{ "type": "string" }, // shade image filename (path/filenameToUnavailable if necessary)
						{ "type": "array", "items": { "type": ["string", "null"] } }, // tags e.g. "New", "Heather", "Tweed", "Discontinued", "Multi", "Hand-dyed"
					],
				},
			},
		},
	},
};
