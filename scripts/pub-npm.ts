import { npmPublish } from './common'

await Bun.$`bun run build:es6`
// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log('📦 打包成功 🎉🎉🎉')
await npmPublish()
await Bun.$`git push origin --follow-tags`

// const result = await build()

// if (result.success) {
//   // biome-ignore lint/suspicious/noConsoleLog: <explanation>
//   console.log('📦 打包成功 🎉🎉🎉')
//   await npmPublish()
//   await Bun.$`git push origin --follow-tags`
// } else {
//   // biome-ignore lint/suspicious/noConsoleLog: <explanation>
//   console.log('📦 打包失败 🚨\n')
//   // biome-ignore lint/suspicious/noConsoleLog: <explanation>
//   console.log(result.logs)
// }
