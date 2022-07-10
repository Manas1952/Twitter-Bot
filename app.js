const { TwitterApi } = require('twitter-api-v2')
const CronJob = require('cron').CronJob
require('dotenv').config()

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET
})

const rwClient = client.readWrite

const tweet = async () => {
  try {
    // await rwClient.v2.tweet("Good evening🥳")
    const result = await rwClient.v2.search('#JAVASCRIPT')
    console.log('done', result.data)
  } catch (error) {
    console.log('error ->', error)
  }
}

// const job = new CronJob("10 * * * * *", () => {
  tweet()
  // console.log('tweeted')
// })

// job.start()