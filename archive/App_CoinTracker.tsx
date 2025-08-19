import { useEffect, useState } from "react";

interface Tikcker {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_15m: number;
			percent_change_30m: number;
			percent_change_1h: number;
			percent_change_6h: number;
			percent_change_12h: number;
			percent_change_24h: number;
			percent_change_7d: number;
			percent_change_30d: number;
			percent_change_1y: number;
			ath_price: number;
			ath_date: string;
			percent_from_price_ath: number;
		};
	};
}

function App() {
	const [isLoading, setLodaing] = useState(true);
	const [coins, setCoins] = useState<Tikcker[]>([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
			.then((res) => res.json())
			.then((json) => {
				setCoins(json);
				setLodaing(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! {isLoading ? "" : `(${coins.length})`}</h1>
			{isLoading ? (
				<strong>Loading...!</strong>
			) : (
				<ul>
					{coins.map((item) => (
						<li key={item.id}>
							{item.name} ({item.symbol}): {Math.round(item.quotes.USD.price)}{" "}
							USD
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
// https://coinpaprika.com/v1/tickers
