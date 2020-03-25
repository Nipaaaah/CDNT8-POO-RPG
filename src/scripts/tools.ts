import * as readline from 'readline';

export const inputReader = async (question: string) => {
  let response = "";

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  await new Promise((resolve, reject) => {
    rl.question(`${question}`, (answer: string) => {
      resolve(answer)
    })
  }).then(onfull => {
    response = JSON.stringify(onfull);
    rl.close();
  })

  return response
}