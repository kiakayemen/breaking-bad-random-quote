import axios from 'axios'
import React, {
	useEffect,
	useState
} from 'react';
import spinner from '../Spinner.gif';

const Quote = (fetchData) => {

	const REQ_URL = 'https://breakingbadapi.com/api/quote/random'

	const [quote, setQuote] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [charName, setCharName] = useState('')
	const [seriesName, setSeriesName] = useState('')
	// const [id, setId] = useState('')

	useEffect(() => {
		const fetchData = async () => { 
			const res = await axios(REQ_URL)
			
			// console.log(res.data)
			setIsLoading(false)
			setQuote(res.data[0].quote)
			setCharName(res.data[0].author)
			setSeriesName(res.data[0].series)
			// setId(res.data[0].quote_id)
		}
		fetchData()
	}, [])

	function seriesPic(seriesName) {
		if (seriesName === 'Breaking Bad') {
			return (
				<div className='breaking-bad'>
					<img className='breaking-bad-wp' alt='breaking bad' src='https://wallpapercave.com/dwp1x/wp6794247.jpg' />
				</div>
			)
		} else if (seriesName === 'Better Call Saul') {
			return (
				<div className='better-call-saul'>
					<img className='better-call-saul-wp' alt='better call saul' src='https://wallpapercave.com/dwp1x/wp1930550.jpg' />
				</div>
		) }
	}

	return (
		
		isLoading ? (<img className='spinner' alt='loading...' src={ spinner }/>)
				:
			(
				<section className='card'>
					{
						seriesPic(seriesName)
					}
					<p className='quote'>
						" {quote} "
					</p>
					<p className='character'>
						{charName}
					</p>
				</section>
			)
		
	)
}

export default Quote