// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Request = require('request')
const newsController = require('../controllers/NewsController')

router.get('/fetch', (req, res) => {
	Request.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs', (err, resp, body) => {
		if (err) {
			res.json({
				confirmation: 'fail',
				message: 'Invalid URL'
			})
			return
		}

		const data = JSON.parse(body)
		//return res.json({ data: data.hits});
		newsController.validateAndPost(data.hits)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
	});
	
})

router.get('/news', (req, res) => {
	const filters = req.query
	newsController.get(filters)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})



module.exports = router
