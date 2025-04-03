// Script para alternar o modo de performance
// Pode ser executado via linha de comando ou como uma tarefa do VS Code

const fs = require("fs")
const path = require("path")

// Caminho para o arquivo de configuração
const configPath = path.join(process.cwd(), ".performance-config.json")

// Verificar se o arquivo de configuração existe
let config = { lowPerfMode: false }
if (fs.existsSync(configPath)) {
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"))
  } catch (error) {
    console.error("Erro ao ler o arquivo de configuração:", error)
  }
}

// Alternar o modo de performance
config.lowPerfMode = !config.lowPerfMode

// Salvar a configuração
fs.writeFileSync(configPath, JSON.stringify(config, null, 2))

console.log(`Performance mode changed to: ${config.lowPerfMode ? "Low Performance" : "High Performance"}`)
console.log("Restart the server to apply the changes.")

