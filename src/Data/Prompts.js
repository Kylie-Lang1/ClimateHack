export const Prompts = [
	{
		id: 1,
		area: "Transportation",
		category: "Private",
		type: "negative",
		question: "How many miles a week do you drive or Uber?",
		answers: ["0", "< 20", "20 - 60", "60 - 100", "100+"]
	},
	{
		id: 2,
		area: "Transportation",
		category: "Public",
		type: "negative",
		question: "How many miles do you travel each week by public transport?",
		answers: ["0", "< 20", "20 - 60", "60 - 100", "100+"]
	},
	{
		id: 3,
		area: "Transportation",
		category: "Public",
		type: "negative",
		question: "How many hours do you fly by plane each year?",
		answers: ["0", "< 10", "10 - 30", "30 - 60", "60+"]
	},
	{
		id: 4,
		area: "Transportation",
		category: "Non-Emittable",
		type: "positive",
		question: "How many miles a week do you get around by walking, biking, etc..?",
		answers: ["0", "< 20", "20 - 60", "60 - 100", "100+"]
	},
	{
		id: 5,
		area: "Energy",
		category: "Electrical",
		type: "negative",
		question: "How many hours per day do you watch tv?",
		answers: ["0", "1 - 6", "7 - 12", "13 - 19", "20+"]
	},
	{
		id: 6,
		area: "Energy",
		category: "Electrical",
		type: "negative",
		question: "How many hours a day are your lightbulbs in use?",
		answers: ["0", "1 - 6", "7 - 12", "13 - 19", "20+"]
	},
	{
		id: 7,
		area: "Energy",
		category: "Water",
		type: "negative",
		question: "How many times a week do you use a dishwasher?",
		answers: ["0", "1 - 2", "3 - 4", "5 - 6", "7+"]
	},
	{
		id: 8,
		area: "Energy",
		category: "Water",
		type: "negative",
		question: "How many times a week do you take baths or showers?",
		answers: ["0", "1 - 5", "6 - 10", "11 - 14", "15+"]
	},
	{
		id: 9,
		area: "Energy",
		category: "Water",
		type: "negative",
		question: "How many times a week do you use a washer and dryer?",
		answers: ["0", "1 - 2", "3 - 4", "5 - 6", "7+"]
	},
	{
		id: 10,
		area: "Energy",
		category: "Renewable",
		type: "positive",
		question: "What percentage of your appliances are energy efficient or energy saving?",
		answers: ["0", "<25%", "25 - 50%", "50 - 75%", "75 - 100%"]
	},
	{
		id: 11,
		area: "Energy",
		category: "Renewable",
		type: "positive",
		question: "What percentage of your appliances use renewable energy?",
		answers: ["0", "<25%", "25 - 50%", "50 - 75%", "75 - 100%"]
	},
	{
		id: 12,
		area: "Food",
		category: "Renewable",
		type: "negative",
		question: "How much meat do you eat each week?",
		answers: ["Never", "Once in a while", "Some days", "Most days", "All the time"]
	},
	{
		id: 13,
		area: "Food",
		category: "Renewable",
		type: "positive",
		question: "How much of your food is locally sourced?",
		answers: ["None", "Some", "Half", "Most", "All"]
	},
	{
		id: 14,
		area: "Waste",
		category: "Renewable",
		type: "positive",
		question: "How do you recycle plastic waste?",
		answers: ["I throw it in the garbage", "I sometimes recycle", "I always recycle", "I reuse my items", "I never use plastic products"]
	},
	{
		id: 15,
		area: "Waste",
		category: "Renewable",
		type: "positive",
		question: "Do you compost?",
		answers: ["No", null, null, null,"Yes"]
	},
	{
		id: 16,
		area: "Waste",
		category: "Renewable",
		type: "positive",
		question: "Do you use reusable grocery bags?",
		answers: ["Never", null, "Sometimes", null, "Always"]
	}
]

export default Prompts