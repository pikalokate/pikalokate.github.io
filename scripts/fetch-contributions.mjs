// Pulls the last year of GitHub contributions and saves them to data/contributions.json
// in the { date, count }[] shape the ContributionSkyline component expects.
// Token: GITHUB_TOKEN env var, or the local `gh` login as a fallback.

import { execSync } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"

const LOGIN = process.env.GITHUB_LOGIN || "pikalokate"
const token =
  process.env.GITHUB_TOKEN || execSync("gh auth token", { encoding: "utf8" }).trim()

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
  }
}`

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query, variables: { login: LOGIN } }),
})
const json = await res.json()
if (!res.ok || json.errors) {
  console.error(JSON.stringify(json.errors ?? json, null, 2))
  process.exit(1)
}

const calendar = json.data.user.contributionsCollection.contributionCalendar
const days = calendar.weeks
  .flatMap((w) => w.contributionDays)
  .map((d) => ({ date: d.date, count: d.contributionCount }))

// A token that can't see private work returns far fewer contributions. Keep the saved calendar then.
const file = new URL("../data/contributions.json", import.meta.url)
const saved = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")).total : 0
if (calendar.totalContributions < saved * 0.8) {
  console.warn(`Got ${calendar.totalContributions} contributions, saved file has ${saved}. Keeping the saved calendar.`)
  process.exit(0)
}

writeFileSync(
  file,
  JSON.stringify({ login: LOGIN, updatedAt: new Date().toISOString(), total: calendar.totalContributions, days }, null, 2) + "\n",
)
console.log(`Saved ${days.length} days, ${calendar.totalContributions} contributions`)
